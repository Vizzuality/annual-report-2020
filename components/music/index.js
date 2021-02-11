import { useState, useEffect, useMemo } from 'react';
import useSound from 'use-sound';
import useSoundAllowed from 'hooks/useSoundAllowed';
import vizz1 from '../../sounds/vizz1.mp3';
import vizz2 from '../../sounds/vizz2.mp3';
const SONG_STATE = {
  playing: 1,
  paused: 2,
  ended: 3
};


const Music = () => {
  const { allowed: allowedSound, videoPlaying } = useSoundAllowed();

  const [songState, setSongState] = useState(null);
  const [currentSong, setCurrentSong] = useState(Math.floor(Math.random() + 0.5));
  const config = {
    onend: () => {
      setSongState(SONG_STATE.ended)
    },
    volume: 0.3,
    soundEnabled: allowedSound && !videoPlaying,
    preload: false,
    html5: true
  };
  const [playSong1, { pause: pauseSong1 }] = useSound(vizz1, config);
  const [playSong2, { pause: pauseSong2 }] = useSound(vizz2, config);
  const songs = [{
      play: playSong1,
      pause: pauseSong1
    },
    {
      play: playSong2,
      pause: pauseSong2
    }
  ];
  useEffect(() => {
    // Pause on set music off or video play
    if ((!allowedSound || videoPlaying) && songState === SONG_STATE.playing) {
      setSongState(SONG_STATE.paused);
      songs.forEach((song)=> {
        if (song.pause) {
          song.pause()
        }
      })
    }

    // Play on set music on
    if (allowedSound && !songState) {
      songs[currentSong].play();
      setSongState(SONG_STATE.playing);
    }

    // Pause on set music off
    if (allowedSound && !videoPlaying && songState === SONG_STATE.paused) {
      setSongState(SONG_STATE.playing);
      songs[currentSong].play()
    }

    // Change to next song when it ends
    if (allowedSound && !videoPlaying && songState === SONG_STATE.ended) {
      const nextSong = (currentSong + 1) % songs.length;
      setCurrentSong(nextSong);
      setSongState(SONG_STATE.playing);
      songs[nextSong].play();
    }
  }, [allowedSound, songState, videoPlaying])
  return null;
};

export default Music;