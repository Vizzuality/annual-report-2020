import { useState, useEffect, useMemo } from 'react';
import useSound from 'use-sound';
import vizz1 from '../../sounds/vizz1.webm';
import vizz2 from '../../sounds/vizz2.webm';
const SONG_STATE = {
  playing: 1,
  paused: 2,
  ended: 3
};

const Music = ({ allowedSound, isReportOpen }) => {
  const [songState, setSongState] = useState(null);
  const [currentSong, setCurrentSong] = useState(Math.floor(Math.random() + 0.5));
  const config = {
    onend: () => {
      setSongState(SONG_STATE.ended)
    },
    volume: 0.3,
    soundEnabled: allowedSound,
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
    if (isReportOpen) {
      songs[currentSong].play();
      setSongState(SONG_STATE.playing);
    }
  }, [isReportOpen]);

  useEffect(() => {
    if (!allowedSound && songState === SONG_STATE.playing) {
      setSongState(SONG_STATE.paused);
      songs[currentSong].pause();
    }
    if (allowedSound && songState === SONG_STATE.paused) {
      setSongState(SONG_STATE.playing);
      songs[currentSong].play()
    }
    if (allowedSound && songState === SONG_STATE.ended) {
      setCurrentSong((currentSong + 1) % (songs.length + 1));
      setSongState(SONG_STATE.playing);
      songs[currentSong].play();
    }
  }, [allowedSound, songState])
  return null;
};

export default Music;