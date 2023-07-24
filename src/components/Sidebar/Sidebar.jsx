import SidebarPersonal from '../SidebarPersonal/SidebarPersonal'
import SidebarPlaylist from '../SidebarPlaylist/SidebarPlaylist'
import './Sidebar.css'

function Sidebar({ isLoading }) {
  return (
    <div className="main__sidebar sidebar">
      <SidebarPersonal />
      <SidebarPlaylist isLoading={isLoading} />
    </div>
  )
}

export default Sidebar
