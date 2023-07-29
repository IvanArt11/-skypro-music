import { tracks } from '../TracksData/TracksData'
import * as S from './styles'
import Track from '../Track/Track'

function TracksAll({ isLoading }) {
  return (
    <S.ContentPlaylist>
      {tracks.length ? (
        tracks.map((track) => (
          <Track key={track.id} track={track} isLoading={isLoading} />
        ))
      ) : (
        <p>Треков нет</p>
      )}
    </S.ContentPlaylist>
  )
}

export default TracksAll
