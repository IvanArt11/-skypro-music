import React from 'react'
import AudioPlayerControls from '../AudioPlayerControls/AudioPlayerControls'
import AudioPlayerTrack from '../AudioPlayerTrack/AudioPlayerTrack'
import AudioPlayerVolume from '../AudioPlayerVolume/AudioPlayerVolume'
import * as S from './styles'
import { timer } from '../../utils/timer'

function AudioPlayer({ currentTrack, setVisibleAudioPlayer }) {
  const [isPlaying, setIsPlaying] = React.useState(true)
  const [currentTime, setCurrentTime] = React.useState(0)
  const [volume, setVolume] = React.useState(50)
  const [isRepeat, setIsRepeat] = React.useState(false)
  const [duration, setDuration] = React.useState(0)
  const audioRef = React.useRef(null)

  React.useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100
    }
  }, [volume])

  const handlePlayingAudio = () => {
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  const handleLoadStart = () => {
    const src = currentTrack.track_file
    const audio = new Audio(src)
    audio.onloadedmetadata = function () {
      if (audio.readyState > 0) {
        setDuration(audio.duration)
      }
    }
  }

  const handleTimeUpdate = () => {
    const { currentTime: audioCurrentTime } = audioRef.current
    setCurrentTime(audioCurrentTime)
  }

  const changeCurrentTime = (e) => {
    const newcurrentTime = Number(e.target.value)
    audioRef.current.currentTime = currentTime
    setCurrentTime(newcurrentTime)
  }

  const handleRepeat = () => {
    if (isRepeat) {
      audioRef.current.loop = false
      setIsRepeat(false)
    } else {
      audioRef.current.loop = true
      setIsRepeat(true)
    }
  }

  const handleNextPrev = () => {
    alert('На реализации')
  }

  const handleShuffle = () => {
    alert('На реализации')
  }

  if (!currentTrack || !currentTrack.track_file) {
    return null
  }

  return (
    <S.Bar>
      <audio
        ref={audioRef}
        src={currentTrack.track_file}
        controls
        autoPlay
        hidden
        onLoadStart={handleLoadStart}
        onTimeUpdate={handleTimeUpdate}
      >
        <track kind="captions" srcLang="en" label="captions" default />
      </audio>

      <S.BarContent>
        <S.Timer>
          <span>{timer(currentTime)} / </span>
          <span>{timer(duration)}</span>
        </S.Timer>
        <S.BarPlayerProgress
          type="range"
          min={0}
          max={currentTrack.duration_in_seconds}
          value={currentTime}
          step={0.01}
          onChange={changeCurrentTime}
          $color="#D9D9D9"
        />
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <AudioPlayerControls
              handlePlayingAudio={handlePlayingAudio}
              isPlaying={isPlaying}
              handleRepeat={handleRepeat}
              isRepeat={isRepeat}
              handleNextPrev={handleNextPrev}
              handleShuffle={handleShuffle}
            />
            <AudioPlayerTrack currentTrack={currentTrack} />
          </S.BarPlayer>
          <AudioPlayerVolume
            setVisibleAudioPlayer={setVisibleAudioPlayer}
            setVolume={setVolume}
            volume={volume}
          />
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  )
}

export default AudioPlayer
