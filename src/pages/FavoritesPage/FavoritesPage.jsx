import { GlobalStyles } from '../../GlobalStyles'
import * as S from './styles'
import NavMenu from '../../components/NavMenu/NavMenu'
import TrackSearch from '../../components/TrackSearch/TrackSearch'
import SidebarPersonal from '../../components/SidebarPersonal/SidebarPersonal'
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer'
import TrackTitle from '../../components/TrackTitle/TrackTitle'
// import TracksAll from '../../components/TracksAll/TracksAll'

export function FavoritesPage({ isLoading }) {
  return (
    <S.myPlaylist>
      <GlobalStyles />
      <S.Main>
        <NavMenu />
        <S.Container>
          <S.MainCenterblock>
            <TrackSearch />
            <S.CenterblockH2>Мои треки</S.CenterblockH2>
            <S.CenterblockContent>
              <TrackTitle />
              {/* <TracksAll isLoading={isLoading} /> */}
            </S.CenterblockContent>
          </S.MainCenterblock>
        </S.Container>
        <SidebarPersonal />
      </S.Main>
      <AudioPlayer isLoading={isLoading} />
      <S.Footer />
    </S.myPlaylist>
  )
}

export default FavoritesPage
