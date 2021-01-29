import { useState, useEffect } from 'react';
import useSound from 'use-sound';
import openAudio from '../../sounds/vizz2.webm';

const SONG_STATE = {
  playing: 1,
  paused: 2
};

export default ({ allowedSound, isReportOpen }) => {
  const [songState, setSongState] = useState(null);
  const [playSong1, {
    pause: pauseSong1
  }] = useSound(openAudio, {
    volume: 0.3,
    soundEnabled: allowedSound,
    preload: false,
    html5: true
  });

  useEffect(() => {
    if (isReportOpen) {
      const WAIT_MS = 15000 + 2000;
      setTimeout(() => {
        playSong1();
        setSongState(SONG_STATE.playing);
      }, Math.random() * WAIT_MS);
    }
  }, [isReportOpen]);

  useEffect(() => {
    if (!allowedSound && songState === SONG_STATE.playing) {
      setSongState(SONG_STATE.paused);
      pauseSong1();
    }
    console.log(allowedSound, songState)
    if (allowedSound && songState === SONG_STATE.paused) {
      setSongState(SONG_STATE.playing);
      playSong1();
    }
  }, [allowedSound, songState])
  return null;
}