import './TrackFilter.css'
import { useState } from 'react'
import TrackFilterAuthor from '../TrackFilterAuthor/TrackFilterAuthor'
import TrackFilterYear from '../TrackFilterYear/TrackFilterYear'
import TrackFilterGenre from '../TrackFilterGenre/TrackFilterGenre'

function TrackFilter() {
  const [filter, setFilter] = useState('')

  function switchFilter(state) {
    if (state === filter) {
      setFilter(''); // Очистка фильтра, установив его на пустую строку
    } else {
      setFilter(state);
    }
  }

  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>

      <div
        onClick={() => switchFilter('author')}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            switchFilter('author');
          }
        }}
        role="button" // Указываем роль элемента (кнопки)
        tabIndex={0} // Делаем элемент фокусируемым для обработки клавиатурных событий
        className={
          filter === 'author'
            ? 'active-filter filter__button button-author'
            : 'filter__button button-author btn-text'
        }
      >
        исполнителю
      </div>
      <div className="position-popup">
        {filter === 'author' && <TrackFilterAuthor />}
      </div>

      <div
        onClick={() => switchFilter('year')}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            switchFilter('year');
          }
        }}
        role="button" // Указываем роль элемента (кнопки)
        tabIndex={0} // Делаем элемент фокусируемым для обработки клавиатурных событий
        className={
          filter === 'year'
            ? 'active-filter filter__button button-year'
            : 'filter__button button-year btn-text'
        }
      >
        году выпуска
      </div>
      <div className="position-popup">
        {filter === 'year' && <TrackFilterYear />}
      </div>

      <div
        onClick={() => switchFilter('genre')}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            switchFilter('genre');
          }
        }}
        role="button" // Указываем роль элемента (кнопки)
        tabIndex={0} // Делаем элемент фокусируемым для обработки клавиатурных событий
        className={
          filter === 'genre'
            ? 'active-filter filter__button button-genre'
            : 'filter__button button-genre btn-text'
        }
      >
        жанру
      </div>
      <div className="position-popup">
        {filter === 'genre' && <TrackFilterGenre />}
      </div>
    </div>
  )
}

export default TrackFilter
