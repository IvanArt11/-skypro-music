import React from 'react'
import NavMenu from '../../components/NavMenu/NavMenu'
import TrackList from '../../components/TrackList/TrackList'
import Sidebar from '../../components/Sidebar/Sidebar'
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer'
import * as S from './styles'
import { getTracksAll } from '../../API'

export function Main() {
  const [tracks, setTracks] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [visibleAudioPlayer, setVisibleAudioPlayer] = React.useState(false)
  const [currentTrack, setCurrentTrack] = React.useState(null)
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

  return (
    <S.Wrapper>
      <S.GlobalStyles />
      <S.Container>
        <S.Main>
          <NavMenu />
          <TrackList
            isLoading={isLoading}
            tracks={tracks}
            setCurrentTrack={setCurrentTrack}
            setVisibleAudioPlayer={setVisibleAudioPlayer}
            getTracksError={getTracksError}
          />
          <Sidebar isLoading={isLoading} />
        </S.Main>
        {visibleAudioPlayer && (
          <AudioPlayer
            currentTrack={currentTrack}
            setVisibleAudioPlayer={setVisibleAudioPlayer}
          />
        )}
        <S.Footer />
      </S.Container>
    </S.Wrapper>
  )
}

export default Main
