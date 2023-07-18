import SidebarPersonal from '../SidebarPersonal/SidebarPersonal'
import SidebarPlaylist from '../SidebarPlaylist/SidebarPlaylist'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className="main__sidebar sidebar">
      <SidebarPersonal />
      <SidebarPlaylist />
    </div>
  )
}

export default Sidebar
