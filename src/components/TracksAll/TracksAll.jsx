// import { tracks } from '../TracksData/TracksData'
import * as S from './styles'
import Track from '../Track/Track'
import { TrackSkeleton } from '../Track/TrackSkeleton'

function TracksAll({
  isLoading,
  tracks,
  setVisibleAudioPlayer,
  getTracksError,
}) {
  if (getTracksError) {
    return (
      <S.ContentPlaylist>
        <p>Не удалось загрузить плейлист, попробуйте позже. {getTracksError}</p>
      </S.ContentPlaylist>
    )
  }
  const skeletonKeys = [...new Array(10)].map((_, index) => `skeleton_${index}`)
  return (
    <S.ContentPlaylist>
      {isLoading
        ? skeletonKeys.map((key) => <TrackSkeleton key={key} />)
        : tracks.map((track) => (
            <Track
              key={track.id}
              track={track}
              setVisibleAudioPlayer={setVisibleAudioPlayer}
            />
          ))}
    </S.ContentPlaylist>
  )
}

export default TracksAll
