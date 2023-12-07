import React from 'react'
import TrackTitle from '../../components/Tracks/TrackTitle/TrackTitle'
import * as S from './styles'
import TrackSearch from '../../components/Tracks/TrackSearch/TrackSearch'
import SidebarPersonal from '../../components/Bar/SidebarPersonal/SidebarPersonal'
import TracksAllFavorites from '../../components/Tracks/TracksAllFavorites/TracksAllFavorites'

export function FavoritesPage() {
  return (
    <>
      <S.MainCenterblock>
        <TrackSearch />
        <S.CenterblockH2>Избранное</S.CenterblockH2>
        <S.CenterblockContent>
          <TrackTitle />
          <TracksAllFavorites />
        </S.CenterblockContent>
      </S.MainCenterblock>
      <S.SidebarPersonalBlock>
        <SidebarPersonal />
      </S.SidebarPersonalBlock>
    </>
  )
}

export default FavoritesPage
