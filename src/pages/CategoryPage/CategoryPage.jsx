import React from 'react'
import { useParams } from 'react-router-dom'
import { CATEGORIES } from '../../constants'
import TrackTitle from '../../components/Tracks/TrackTitle/TrackTitle'
import * as S from '../FavoritesPage/styles'
import TrackSearch from '../../components/Tracks/TrackSearch/TrackSearch'
import SidebarPersonal from '../../components/Bar/SidebarPersonal/SidebarPersonal'
import TracksCategoryAll from '../../components/Tracks/TrackCategoryAll/TrackCategoryAll'
import { useGetSelectionByIdQuery } from '../../services/tracks'

export function CategoryPage() {
  const params = useParams()

  const category = CATEGORIES.find(
    (category) => category.id === Number(params.id),
  )

  const { isLoading, data, error } = useGetSelectionByIdQuery(Number(params.id))

  return (
    <>
      <S.MainCenterblock>
        <TrackSearch />
        <S.CenterblockH2>
          {category.title}{' '}
          {!error && (
            <S.CategoryCount>
              {isLoading ? '...' : data && data.items.length}
            </S.CategoryCount>
          )}
        </S.CenterblockH2>
        <S.CenterblockContent>
          <TrackTitle />
          <TracksCategoryAll />
        </S.CenterblockContent>
      </S.MainCenterblock>
      <S.SidebarPersonalBlock>
        <SidebarPersonal />
      </S.SidebarPersonalBlock>
    </>
  )
}

export default CategoryPage
