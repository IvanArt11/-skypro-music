import { addToFavoritesPlaylist } from "../redux/slices/favoritesSlice"

export const handleClickLike = (id, addToFavorites, dispatch, track) => {
  addToFavorites(id)
  dispatch(addToFavoritesPlaylist(track))
}
