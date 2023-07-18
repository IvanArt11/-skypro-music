import Track from '../Track/Track'
import TrackFilter from '../TrackFilter/TrackFilter'
import TrackSearch from '../TrackSearch/TrackSearch'
import TrackTitle from '../TrackTitle/TrackTitle'
import './TrackList.css'

function TrackList() {
  return (
    <div className="main__centerblock centerblock">
      <TrackSearch />
      <h2 className="centerblock__h2">Треки</h2>
      <TrackFilter />
      <div className="centerblock__content">
        <TrackTitle />
        <Track />
      </div>
    </div>
  )
}

export default TrackList
