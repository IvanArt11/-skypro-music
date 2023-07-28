import './TrackFilter.css'
import { useState } from 'react'
import TrackFilterAuthor from '../TrackFilterAuthor/TrackFilterAuthor'
import TrackFilterYear from '../TrackFilterYear/TrackFilterYear'
import TrackFilterGenre from '../TrackFilterGenre/TrackFilterGenre'

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
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>

      {filterTypes.map(
        ({ type, component: FilterComponent, label, buttonClass }) => (
          <div key={type}>
            <div
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
                  ? `active-filter filter__button ${buttonClass}`
                  : `filter__button ${buttonClass} btn-text`
              }
            >
              {label}
            </div>
            <div className="position-popup">
              {filter === type && <FilterComponent />}
            </div>
          </div>
        ),
      )}
    </div>
  )
}

export default TrackFilter

// Old version
// function TrackFilter() {
// const [filter, setFilter] = useState('')

// function switchFilter(state) {
//   if (state === filter) {
//     setFilter(''); // Очистка фильтра, установив его на пустую строку
//   } else {
//     setFilter(state);
//   }
// }

// return (
//   <div className="centerblock__filter filter">
//     <div className="filter__title">Искать по:</div>

//     <div
//       onClick={() => switchFilter('author')}
//       onKeyDown={(event) => {
//         if (event.key === 'Enter') {
//           switchFilter('author');
//         }
//       }}
//       role="button" // Указываем роль элемента (кнопки)
//       tabIndex={0} // Делаем элемент фокусируемым для обработки клавиатурных событий
//       className={
//         filter === 'author'
//           ? 'active-filter filter__button button-author'
//           : 'filter__button button-author btn-text'
//       }
//     >
//       исполнителю
//     </div>
//     <div className="position-popup">
//       {filter === 'author' && <TrackFilterAuthor />}
//     </div>

//     <div
//       onClick={() => switchFilter('year')}
//       onKeyDown={(event) => {
//         if (event.key === 'Enter') {
//           switchFilter('year');
//         }
//       }}
//       role="button" // Указываем роль элемента (кнопки)
//       tabIndex={0} // Делаем элемент фокусируемым для обработки клавиатурных событий
//       className={
//         filter === 'year'
//           ? 'active-filter filter__button button-year'
//           : 'filter__button button-year btn-text'
//       }
//     >
//       году выпуска
//     </div>
//     <div className="position-popup">
//       {filter === 'year' && <TrackFilterYear />}
//     </div>

//     <div
//       onClick={() => switchFilter('genre')}
//       onKeyDown={(event) => {
//         if (event.key === 'Enter') {
//           switchFilter('genre');
//         }
//       }}
//       role="button" // Указываем роль элемента (кнопки)
//       tabIndex={0} // Делаем элемент фокусируемым для обработки клавиатурных событий
//       className={
//         filter === 'genre'
//           ? 'active-filter filter__button button-genre'
//           : 'filter__button button-genre btn-text'
//       }
//     >
//       жанру
//     </div>
//     <div className="position-popup">
//       {filter === 'genre' && <TrackFilterGenre />}
//     </div>
//   </div>
// )
