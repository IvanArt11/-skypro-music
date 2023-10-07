import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TrackFavorite from '../TrackFavorite/TrackFavorite'
import { TrackSkeleton } from '../Track/TrackSkeleton'
import * as S from './styles'
import { useGetFavoritesPlaylistQuery } from '../../../services/tracks'
import { setFavoritesPlaylist } from '../../../redux/slices/favoritesSlice'

// Функция генерации уникальных ключей
function uniqueKey() {
  return `_${Math.random().toString(36).substr(2, 9)}`
}

function TracksAllFavorites() {
  const dispatch = useDispatch()
  const searchValue = useSelector((state) => state.filter.search)
  const { isLoading, data, error } = useGetFavoritesPlaylistQuery()
  const playlistFavorites = useSelector((state) => state.favorites.playlist)

  React.useEffect(() => {
    dispatch(setFavoritesPlaylist(data))
  }, [dispatch, data])

  let content = null

  if (error) {
    content = (
      <S.ErrorMessage>
        Не удалось загрузить плейлист, попробуйте позже.{' '}
        <span>{error.error}</span>
      </S.ErrorMessage>
    )
  } else if (isLoading) {
    const skeletons = [...new Array(10)].map(() => (
      <TrackSkeleton key={uniqueKey()} />
    ))
    content = skeletons
  } else if (playlistFavorites) {
    const filteredFavorites = playlistFavorites.filter((favTrack) =>
      favTrack.name.toLowerCase().includes(searchValue.toLowerCase()),
    )

    if (filteredFavorites.length > 0) {
      content = filteredFavorites.map((favTrack) => (
        <TrackFavorite key={favTrack.id} favTrack={favTrack} />
      ))
    } else {
      content = <p>Список пуст *_*</p>
    }
  }

  return <S.ContentPlaylist>{content}</S.ContentPlaylist>
}

export default TracksAllFavorites
