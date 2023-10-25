import React from 'react'
import SidebarPersonal from '../SidebarPersonal/SidebarPersonal'
import SidebarPlaylist from '../SidebarPlaylist/SidebarPlaylist'
import * as S from './styles'

function Sidebar({ isLoading }) {
  return (
    <S.MainSidebar>
      <SidebarPersonal />
      <SidebarPlaylist />
    </S.MainSidebar>
  )
}

export default Sidebar
