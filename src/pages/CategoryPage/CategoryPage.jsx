import { useParams } from 'react-router-dom'
import { GlobalStyles } from '../../GlobalStyles'
import NavMenu from '../../components/NavMenu/NavMenu'
import TrackSearch from '../../components/TrackSearch/TrackSearch'
import SidebarPersonal from '../../components/SidebarPersonal/SidebarPersonal'
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer'
import TrackTitle from '../../components/TrackTitle/TrackTitle'
// import TracksAll from '../../components/TracksAll/TracksAll'
import * as S from './styles'
import { CATEGORIES } from '../../constants'

export function CategoryPage({ isLoading }) {
  const params = useParams()

  const selectedCategory = CATEGORIES.find(
    (category) => category.id === Number(params.id),
  )

  return (
    <S.myPlaylist>
      <GlobalStyles />
      <S.Main>
        <NavMenu />
        <S.Container>
          <S.MainCenterblock>
            <TrackSearch />
            <S.CenterblockH2>{selectedCategory.title}</S.CenterblockH2>
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

export default CategoryPage
