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
        return {
          ...state,
          playlist: [...state.playlist, favoriteTrack],
        }
      }
      return state
    },
    deleteFromFavoritesPlaylist: (state, action) => {
      const favoriteTrack = action.payload
      const updatedPlaylist = state.playlist?.filter(
        (t) => t.id !== favoriteTrack.id,
      )
      return {
        ...state,
        playlist: updatedPlaylist,
      }
    },
    setFavoritesPlaylist: (state, action) => ({
      ...state,
      playlist: action.payload,
    }),
    setSelectionPlaylist: (state, action) => ({
      ...state,
      playlist: action.payload,
    }),
  },
})

export const {
  addToFavoritesPlaylist,
  deleteFromFavoritesPlaylist,
  setFavoritesPlaylist,
  setSelectionPlaylist,
} = favoritesSlice.actions

export default favoritesSlice.reducer
