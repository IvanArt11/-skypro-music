import { useState } from 'react'
import TrackFilterAuthor from '../TrackFilterAuthor/TrackFilterAuthor'
import TrackFilterYear from '../TrackFilterYear/TrackFilterYear'
import TrackFilterGenre from '../TrackFilterGenre/TrackFilterGenre'
import * as S from './styles'

// Optimized code
const filterTypes = [
  {
    type: 'author',
    component: TrackFilterAuthor,
    label: 'исполнителю',
    buttonClass: 'button-author',
  },
  {
    type: 'year',
    component: TrackFilterYear,
    label: 'году выпуска',
    buttonClass: 'button-year',
  },
  {
    type: 'genre',
    component: TrackFilterGenre,
    label: 'жанру',
    buttonClass: 'button-genre',
  },
]

function TrackFilter() {
  const [filter, setFilter] = useState('')

  function switchFilter(state) {
    if (state === filter) {
      setFilter('') // Очистка фильтра, установив его на пустую строку
    } else {
      setFilter(state)
    }
  }

  return (
    <S.CenterblockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>

      {filterTypes.map(
        ({ type, component: FilterComponent, label, buttonClass }) => (
          <div key={type}>
            <S.FilterButton
              onClick={() => switchFilter(type)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  switchFilter(type)
                }
              }}
              role="button"
              tabIndex={0}
              className={
                filter === type
                  ? `active-filter ${buttonClass}`
                  : `${buttonClass} btn-text`
              }
            >
              {label}
            </S.FilterButton>
            <S.PositionPopup>
              {filter === type && <FilterComponent />}
            </S.PositionPopup>
          </div>
        ),
      )}
    </S.CenterblockFilter>
  )
}

export default TrackFilter

// Old version
// function TrackFilter() {
//   const [filter, setFilter] = useState('')

//   function switchFilter(state) {
//     if (state === filter) {
//       setFilter()
//     } else {
//       setFilter(state)
//     }
//   }

//   return (
//     <S.CenterblockFilter>
//       <S.FilterTitle>Искать по:</S.FilterTitle>
//       <S.FilterButton
//         className="_btn-text"
//         onClick={() => switchFilter('author')}
//         $active={filter === 'authors'}
//       >
//         исполнителю
//       </S.FilterButton>
//       <S.PositionPopup>
//         {filter === 'author' && <TrackFilterAuthor />}
//       </S.PositionPopup>

//       <S.FilterButton
//         className="_btn-text"
//         onClick={() => switchFilter('year')}
//         $active={filter === 'year'}
//       >
//         году выпуска
//       </S.FilterButton>
//       <S.PositionPopup>
//         {filter === 'year' && <TrackFilterYear />}
//       </S.PositionPopup>

//       <S.FilterButton
//         className="_btn-text"
//         onClick={() => switchFilter('genre')}
//         $active={filter === 'genre'}
//       >
//         жанру
//       </S.FilterButton>
//       <S.PositionPopup>
//         {filter === 'genre' && <TrackFilterGenre />}
//       </S.PositionPopup>
//     </S.CenterblockFilter>
//   )
// }

// export default TrackFilter
