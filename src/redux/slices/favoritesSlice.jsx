import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  playlist: [],
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavoritesPlaylist: (state, action) => {
      const favoriteTrack = action.payload
      const isExists = state.playlist?.some((t) => t.id === favoriteTrack.id)
      if (!isExists) {
        if (state.playlist) {
          state.playlist.push(favoriteTrack)
        }
      }
    },
    deleteFromFavoritesPlaylist: (state, action) => {
      const favoriteTrack = action.payload
      const isExists = state.playlist?.some((t) => t.id === favoriteTrack.id)
      if (isExists) {
        const index = state.playlist?.findIndex(
          (item) => item.id === favoriteTrack.id,
        )
        if (index !== -1) {
          if (state.playlist) {
            state.playlist.splice(index, 1)
          }
        }
      }
    },
    setFavoritesPlaylist: (state, action) => {
      state.playlist = action.payload
    },
    setSelectionPlaylist: (state, action) => {
      state.playlist = action.payload
    },
  },
})

export const {
  addToFavoritesPlaylist,
  deleteFromFavoritesPlaylist,
  setFavoritesPlaylist,
  setSelectionPlaylist,
} = favoritesSlice.actions

export default favoritesSlice.reducer
