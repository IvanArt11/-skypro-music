import AudioPlayerControls from '../AudioPlayerControls/AudioPlayerControls'
import AudioPlayerTrack from '../AudioPlayerTrack/AudioPlayerTrack'
import AudioPlayerVolume from '../AudioPlayerVolume/AudioPlayerVolume'
import * as S from './styles'

function AudioPlayer({ currentTrack, setVisibleAudioPlayer }) {
  if (!currentTrack || !currentTrack.track_file) {
    return null // Or render an alternative UI, loading state, or error message
  }

  return (
    <S.Bar>
      <S.BarContent>
        <audio controls preload="none" src={currentTrack.track_file}>
          <track
            kind="captions"
            src={currentTrack.captions_file}
            label="Captions"
          />
        </audio>
        <S.BarPlayerProgress />
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <AudioPlayerControls />
            <AudioPlayerTrack currentTrack={currentTrack} />
          </S.BarPlayer>
          <AudioPlayerVolume setVisibleAudioPlayer={setVisibleAudioPlayer} />
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  )
}

export default AudioPlayer
