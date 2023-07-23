import AudioPlayerControls from '../AudioPlayerControls/AudioPlayerControls'
import AudioPlayerTrack from '../AudioPlayerTrack/AudioPlayerTrack'
import AudioPlayerVolume from '../AudioPlayerVolume/AudioPlayerVolume'
import './AudioPlayer.css'

function AudioPlayer() {
  return (
    <div className="bar">
      <div className="bar__content">
        <div className="bar__player-progress" />
        <div className="bar__player-block">
          <div className="bar__player player">
            <AudioPlayerControls />
            <AudioPlayerTrack />
          </div>
          <AudioPlayerVolume />
        </div>
      </div>
    </div>
  )
}

export default AudioPlayer
