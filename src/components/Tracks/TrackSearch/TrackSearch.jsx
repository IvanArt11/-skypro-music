import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { setSearch } from '../../../redux/slices/filterSlice'


function TrackSearch() {
  const dispatch = useDispatch()
  const searchValue = useSelector((state) => state.filter.search)

  return (
    <S.CenterblockSearch>
      <S.SearchSvg>
        <use xlinkHref="img/icon/sprite.svg#icon-search" />
      </S.SearchSvg>
      <S.SearchInput
        type="search"
        placeholder="Поиск"
        name="search"
        value={searchValue}
        onChange={(event) => dispatch(setSearch(event.target.value))}
      />
      {searchValue && (
        <S.CloseSvg onClick={() => dispatch(setSearch(''))}>
          <use xlinkHref="img/icon/sprite.svg#icon-close" />
        </S.CloseSvg>
      )}
    </S.CenterblockSearch>
  )
}

export default TrackSearch
