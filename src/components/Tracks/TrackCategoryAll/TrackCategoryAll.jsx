import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import { useParams } from 'react-router-dom'
import { TrackSkeleton } from '../Track/TrackSkeleton'
import * as S from './styles'
import {
  useGetFavoritesPlaylistQuery,
  useGetSelectionByIdQuery,
} from '../../../services/tracks'
import {
  setFavoritesPlaylist,
  setSelectionPlaylist,
} from '../../../redux/slices/favoritesSlice'
import TrackSelection from '../Track/TrackSelection/TrackSelection'

// Функция генерации уникальных ключей
function uniqueKey() {
  return `_${Math.random().toString(36).substr(2, 9)}`
}

function TracksCategoryAll() {
  const dispatch = useDispatch()
  const params = useParams()
  const searchValue = useSelector((state) => state.filter.search)
  const { isLoading, data, error } = useGetSelectionByIdQuery(Number(params.id))
  const { currentData } = useGetFavoritesPlaylistQuery()

  let content

  if (isLoading) {
    const skeletons = [...new Array(10)].map(() => (
      <TrackSkeleton key={uniqueKey()} />
    ))
    content = skeletons
  } else if (data) {
    const filteredTracks = data.items.filter((track) =>
      track.name.toLowerCase().includes(searchValue.toLowerCase()),
    )

    content = filteredTracks.map((track) => (
      <TrackSelection key={track.id} track={track} />
    ))
  } else {
    content = (
      <S.ErrorMessage>
        Не удалось загрузить плейлист, попробуйте позже.{' '}
        <span>{error.error}</span>
      </S.ErrorMessage>
    )
  }

  React.useEffect(() => {
    dispatch(setSelectionPlaylist(data))
  }, [dispatch, data])

  React.useEffect(() => {
    dispatch(setFavoritesPlaylist(currentData))
  }, [currentData, dispatch])

  return <S.ContentPlaylist>{content}</S.ContentPlaylist>
}

export default TracksCategoryAll
