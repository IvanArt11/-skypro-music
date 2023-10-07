import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import NavMenu from './Nav/NavMenu/NavMenu'
import AudioPlayer from './Player/AudioPlayer/AudioPlayer'
import * as S from '../stylesApp'

export function Layout() {
  const visiblePlayer = useSelector((state) => state.audioplayer.visiblePlayer)
  return (
    <S.Container>
      <S.Main>
        <NavMenu />
        <Outlet />
      </S.Main>
      {visiblePlayer && <AudioPlayer />}
      <S.Footer />
    </S.Container>
  )
}

export default { Layout }
