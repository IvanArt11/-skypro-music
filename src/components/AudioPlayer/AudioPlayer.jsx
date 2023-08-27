import { useState, useEffect, useRef, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AudioPlayerControls from '../AudioPlayerControls/AudioPlayerControls'
import AudioPlayerTrack from '../AudioPlayerTrack/AudioPlayerTrack'
import AudioPlayerVolume from '../AudioPlayerVolume/AudioPlayerVolume'
import * as S from './styles'
import { timer } from '../../utils/timer'
import {
  setIsPlaying,
  setCurrentTrack,
  setIsShuffle,
} from '../../store/slices/playerSlice'

function AudioPlayer({ setVisibleAudioPlayer }) {
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(50)
  const [isRepeat, setIsRepeat] = useState(false)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef(null)

  const dispatch = useDispatch()
  const currentTrack = useSelector((state) => state.audioplayer.track)
  const isPlaying = useSelector((state) => state.audioplayer.playing)
  const currentPlaylist = useSelector((state) => state.audioplayer.playlist)
  const isShuffle = useSelector((state) => state.audioplayer.shuffle)
  const indexCurrentTrack = currentPlaylist.indexOf(currentTrack)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100
    }
  }, [volume])

  useEffect(() => {
    if (currentTrack && currentTrack.track_file) {
      const audio = audioRef.current
      audio.src = currentTrack.track_file
      audio.load()
      audio.onloadedmetadata = function () {
        setDuration(audio.duration)
      }
    }
  }, [currentTrack])

  const handleTogglePlay = useCallback(() => {
    const audio = audioRef.current
    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    dispatch(setIsPlaying(!isPlaying))
  }, [isPlaying])

  const handleTimeUpdate = useCallback(() => {
    const audio = audioRef.current
    setCurrentTime(audio.currentTime)
  }, [])

  const handleSeek = (e) => {
    const newCurrentTime = Number(e.target.value)
    audioRef.current.currentTime = newCurrentTime
    setCurrentTime(newCurrentTime)
  }

  const handleRepeat = useCallback(() => {
    const audio = audioRef.current
    audio.loop = !isRepeat
    setIsRepeat(!isRepeat)
  }, [isRepeat])

  const getRandomCurrentTrack = () => {
    const indexRandomTrack = Math.floor(
      Math.random() * (currentPlaylist.length - 1),
    )
    return currentPlaylist[indexRandomTrack]
  }

  const handlePrevTrack = () => {
    if (indexCurrentTrack > 0) {
      const prevTrack = currentPlaylist[indexCurrentTrack - 1]
      dispatch(setCurrentTrack(prevTrack))
      if (isShuffle) {
        dispatch(setCurrentTrack(getRandomCurrentTrack()))
      }
    }
    dispatch(setIsPlaying(true))
  }

  const handleNextTrack = () => {
    if (indexCurrentTrack < currentPlaylist.length - 1) {
      const nextTrack = currentPlaylist[indexCurrentTrack + 1]
      dispatch(setCurrentTrack(nextTrack))
      if (isShuffle) {
        dispatch(setCurrentTrack(getRandomCurrentTrack()))
      }
    } else {
      dispatch(setCurrentTrack(0))
    }
    dispatch(setIsPlaying(true))
  }

  const handleShuffle = () => {
    dispatch(setIsShuffle(!isShuffle))
  }

  const trackEnding = () => {
    const nextTrack = currentPlaylist[indexCurrentTrack + 1]
    dispatch(setCurrentTrack(nextTrack))
    dispatch(setIsPlaying(true))
  }

  const formattedCurrentTime = timer(currentTime)
  const formattedDuration = timer(duration)

  return currentTrack && currentTrack.track_file ? (
    <S.Bar>
      <audio
        ref={audioRef}
        src={currentTrack.track_file}
        controls
        autoPlay
        hidden
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onEnded={trackEnding}
      >
        <track kind="captions" srcLang="en" label="captions" default />
      </audio>

      <S.BarContent>
        <S.Timer>
          <span>{formattedCurrentTime} / </span>
          <span>{formattedDuration}</span>
        </S.Timer>
        <S.BarPlayerProgress
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          step={0.01}
          onChange={handleSeek}
          $color="#D9D9D9"
        />
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <AudioPlayerControls
              handlePlayingAudio={handleTogglePlay}
              isPlaying={isPlaying}
              handleRepeat={handleRepeat}
              isRepeat={isRepeat}
              handlePrevTrack={handlePrevTrack}
              handleNextTrack={handleNextTrack}
              handleShuffle={handleShuffle}
              isShuffle={isShuffle}
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
  ) : null
}

export default AudioPlayer
