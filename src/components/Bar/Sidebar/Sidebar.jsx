import SidebarPersonal from '../SidebarPersonal/SidebarPersonal'
import SidebarPlaylist from '../SidebarPlaylist/SidebarPlaylist'
import React from 'react'
import * as S from './styles'
import { CATEGORIES } from '../../constants'

function Sidebar({ isLoading }) {
  return (
    <S.MainSidebar>
      <SidebarPersonal />
      <SidebarPlaylist isLoading={isLoading} categories={CATEGORIES} />
    </S.MainSidebar>
  )
}

export default Sidebar
