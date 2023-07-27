import SidebarPersonal from '../SidebarPersonal/SidebarPersonal'
import SidebarPlaylist from '../SidebarPlaylist/SidebarPlaylist'
// import './Sidebar.css'
import * as S from './styles'

function Sidebar({ isLoading }) {
  return (
    <S.MainSidebar>
      <SidebarPersonal />
      <SidebarPlaylist isLoading={isLoading} />
    </S.MainSidebar>
  )
}

export default Sidebar
