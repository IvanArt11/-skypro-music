import React from 'react'
import { useDispatch } from 'react-redux'
import NavMenu from '../../components/NavMenu/NavMenu'
import TrackList from '../../components/TrackList/TrackList'
import Sidebar from '../../components/Sidebar/Sidebar'
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer'
import * as S from '../../stylesApp'
import { getTracksAll } from '../../API'
import { setPlaylist } from '../../store/slices/playerSlice'

export function HomePage({ setUser }) {
  const [tracks, setTracks] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [visibleAudioPlayer, setVisibleAudioPlayer] = React.useState(false)
  const [getTracksError, setGetTracksError] = React.useState(null)

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTracksAll()
        setTracks(data)
      } catch (error) {
        setGetTracksError(error.message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(setPlaylist(tracks))
  }, [dispatch, tracks])

  return (
    <S.Container>
      <S.Main>
        <NavMenu setUser={setUser} />
        <TrackList
          isLoading={isLoading}
          tracks={tracks}
          setVisibleAudioPlayer={setVisibleAudioPlayer}
          getTracksError={getTracksError}
        />
        <Sidebar isLoading={isLoading} setUser={setUser} />
      </S.Main>
      {visibleAudioPlayer && (
        <AudioPlayer
          setVisibleAudioPlayer={setVisibleAudioPlayer}
        />
      )}
      <S.Footer />
    </S.Container>
  )
}
export default HomePage
