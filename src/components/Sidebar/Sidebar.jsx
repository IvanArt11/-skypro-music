import SidebarPersonal from '../SidebarPersonal/SidebarPersonal'
import SidebarPlaylist from '../SidebarPlaylist/SidebarPlaylist'
import * as S from './styles'
import { CATEGORIES } from '../../constants'
import { useUserContext } from '../../hooks/useUserContext'

function Sidebar({ isLoading, setUser }) {
  const user = useUserContext();
  return (
    <S.MainSidebar>
      <SidebarPersonal user={user} setUser={setUser} />
      <SidebarPlaylist isLoading={isLoading} categories={CATEGORIES} />
    </S.MainSidebar>
  )
}

export default Sidebar
