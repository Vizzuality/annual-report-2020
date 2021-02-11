import create from 'zustand'

const useSoundAllowed = create(set => ({
  allowed: false,
  videoPlaying: false,
  setAllowedSound: (allowed) => set(() => ({ allowed })),
  setVideoPlaying: (videoPlaying) => set(() => ({ videoPlaying }))
}))

export default useSoundAllowed;
