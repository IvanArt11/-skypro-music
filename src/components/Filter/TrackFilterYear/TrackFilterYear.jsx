import * as S from './styles'
import React from 'react'

function TrackFilterYear({ tracks }) {
  return (
    <S.FilterUlYear>
      {tracks.length ? (
        tracks.map((track) => (
          <S.FilterLi key={track.id}>{track.release_date}</S.FilterLi>
        ))
      ) : (
        <p>Треков нет</p>
      )}
    </S.FilterUlYear>
  )
}

export default TrackFilterYear
