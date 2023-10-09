import React from 'react'
import * as S from './styles'

function TrackFilterAuthor({ tracks }) {
  return (
    <S.FilterUlAuthor>
      {tracks.length ? (
        tracks.map((track) => (
          <S.FilterLi key={track.id}>{track.author}</S.FilterLi>
        ))
      ) : (
        <p>Треков нет</p>
      )}
    </S.FilterUlAuthor>
  )
}

export default TrackFilterAuthor
