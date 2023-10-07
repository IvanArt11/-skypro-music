import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Track from '../Track/Track'
import { TrackSkeleton } from '../Track/TrackSkeleton'
import * as S from './styles'
import { setPlaylist } from '../../../redux/slices/playerSlice'
import {
  useGetAllTracksQuery,
  useGetFavoritesPlaylistQuery,
} from '../../../services/tracks'
import { setFavoritesPlaylist } from '../../../redux/slices/favoritesSlice'

function TracksAll() {
  const searchValue = useSelector((state) => state.filter.search)
  const dispatch = useDispatch()

  const { currentData } = useGetFavoritesPlaylistQuery()
  const { isLoading, data, error } = useGetAllTracksQuery()

  useEffect(() => {
    if (currentData) {
      dispatch(setFavoritesPlaylist(currentData))
    }
  }, [currentData, dispatch])

  useEffect(() => {
    if (data) {
      dispatch(setPlaylist(data))
    }
  }, [dispatch, data])

  let content = null
  if (isLoading) {
    const skeletons = [...new Array(10)].map(() => (
      <TrackSkeleton key={Math.random()} />
    ))
    content = skeletons
  } else if (data) {
    const filteredTracks = data.filter((track) =>
      track.name.toLowerCase().includes(searchValue.toLowerCase()),
    )
    content = filteredTracks.map((track) => (
      <Track key={track.id} track={track} />
    ))
  } else {
    content = (
      <S.ErrorMessage>
        Не удалось загрузить плейлист, попробуйте позже.{' '}
        <span>{error.error}</span>
      </S.ErrorMessage>
    )
  }

  return <S.ContentPlaylist>{content}</S.ContentPlaylist>
}

export default TracksAll
