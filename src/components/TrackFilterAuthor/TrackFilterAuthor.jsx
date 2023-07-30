import { tracks } from '../TracksData/TracksData'
import * as S from './styles'

function TrackFilterAuthor() {
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
