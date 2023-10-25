import React from 'react'
import * as S from './styles'
import { useGetAllTracksQuery } from '../../../services/tracks'

const TrackFilterAuthor = () => {
  const { data, isLoading } = useGetAllTracksQuery()
  return (
    <S.FilterUlAuthor>
      {isLoading ? (
        <p>Загружаем ...</p>
      ) : data ? (
        data.map((track) => (
          <S.FilterLi key={track.id}>{track.author}</S.FilterLi>
        ))
      ) : (
        <p>Треков нет</p>
      )}
    </S.FilterUlAuthor>
  )
}

export default TrackFilterAuthor
