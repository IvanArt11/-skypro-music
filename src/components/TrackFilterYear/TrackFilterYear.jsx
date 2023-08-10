import * as S from './styles'

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
