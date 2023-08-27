/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  playing: false,
  playlist: [],
  track: null,
  shuffle: false,
  shufflePlaylist: [],
}

const playerSlice = createSlice({
  name: 'track',
  initialState,
  // Поле 'reducers' позволяет нам разметить все необходимые редьюсеры и сгенерировать необходимые связанные экшены
  reducers: {
    setCurrentTrack(state, action) {
      // Redux Toolkit позволяет нам писать логику мутации состояния в reducers.
      // Под капотом он не мутирует состояние напрямую, а использует библиотеку Immer, которая
      // обнаруживает изменения в «черновом состоянии» и создает новое неизменное состояние на основе этих изменений.
      state.track = action.payload
      state.playing = false
    },
    setIsPlaying(state) {
      state.playing = !state.playing
    },
    setPlaylist(state, action) {
      state.playlist = action.payload
    },
    setIsShuffle(state) {
      state.shuffle = !state.shuffle
    },
  },
})

export const { setCurrentTrack, setIsPlaying, setPlaylist, setIsShuffle } =
  playerSlice.actions

export default playerSlice.reducer
