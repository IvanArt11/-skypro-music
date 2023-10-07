import * as S from './styles'

function TrackFilterGenre({ tracks }) {
  return (
    <S.FilterUlGenre>
      {tracks.length ? (
        tracks.map((track) => (
          <S.FilterLi key={track.id}>{track.genre}</S.FilterLi>
        ))
      ) : (
        <p>Треков нет</p>
      )}
    </S.FilterUlGenre>
  )
}

export default TrackFilterGenre
