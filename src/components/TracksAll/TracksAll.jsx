import { tracks } from '../TracksData/TracksData'
import './TracksAll.css'
import Track from '../Track/Track'

function TracksAll({ isLoading }) {
  return (
    <div className="content__playlist playlist">
      {tracks.length ? (
        tracks.map((track) => (
          <Track key={track.id} track={track} isLoading={isLoading} />
        ))
      ) : (
        <p>Треков нету</p>
      )}
    </div>
  )
}

export default TracksAll
