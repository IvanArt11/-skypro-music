import { tracks } from '../TracksData/TracksData'

function TrackFilterAuthor() {
  return (
    <ul className="filter__ul author">
      {tracks.length ? (
        tracks.map((track) => (
          <li key={track.id} className="filter__li">
            {track.author}
          </li>
        ))
      ) : (
        <p>Треков нет</p>
      )}
    </ul>
  )
}

export default TrackFilterAuthor
