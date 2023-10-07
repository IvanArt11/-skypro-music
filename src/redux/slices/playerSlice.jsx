import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  playing: false,
  playlist: [],
  track: null,
  shuffle: false,
  shufflePlaylist: [],
  visiblePlayer: false,
}

const playerSlice = createSlice({
  name: 'track',
  initialState,
  reducers: {
    setCurrentTrack(state, action) {
      return {
        ...state,
        track: action.payload,
        playing: false,
      }
    },
    setIsPlaying(state) {
      return {
        ...state,
        playing: !state.playing,
      }
    },
    setPlaylist(state, action) {
      return {
        ...state,
        playlist: action.payload,
      }
    },
    setIsShuffle(state) {
      return {
        ...state,
        shuffle: !state.shuffle,
      }
    },
    setVisiblePlayer(state) {
      return {
        ...state,
        visiblePlayer: !state.visiblePlayer,
      }
    },
  },
})

export const selectTracks = (state) => state.track.playlist

export const {
  setCurrentTrack,
  setIsPlaying,
  setPlaylist,
  setIsShuffle,
  setVisiblePlayer,
} = playerSlice.actions

export default playerSlice.reducer
