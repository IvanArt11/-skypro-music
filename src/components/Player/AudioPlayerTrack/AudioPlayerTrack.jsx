import { Link } from 'react-router-dom'
import React from 'react'
import * as S from './styles'
import { handleClickLike } from '../../../utils/trackUtils'

function AudioPlayerTrack({ currentTrack, addToFavorites, dispatch }) {
  return (
    <S.PlayerTrackPlay>
      <S.TrackPlayContain>
        <S.TrackPlayImage>
          <S.TrackPlaySvg alt="music">
            <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
          </S.TrackPlaySvg>
        </S.TrackPlayImage>
        <S.TrackPlayAuthor>
          <Link to="/">
            <S.TrackPlayAuthorLink href="http://">
              {currentTrack.name}
            </S.TrackPlayAuthorLink>
          </Link>
        </S.TrackPlayAuthor>
        <S.TrackPlayAlbum>
          <Link to="/">
            <S.TrackPlayAlbumLink href="http://">
              {currentTrack.author}
            </S.TrackPlayAlbumLink>
          </Link>
        </S.TrackPlayAlbum>
      </S.TrackPlayContain>

      <S.TrackPlayLikeDislike>
        <S.TrackPlayLike>
          <S.TrackPlayLikeSvg
            onClick={() =>
              handleClickLike(
                currentTrack.id,
                addToFavorites,
                dispatch,
                currentTrack,
              )
            }
            alt="like"
          >
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </S.TrackPlayLikeSvg>
        </S.TrackPlayLike>
      </S.TrackPlayLikeDislike>
    </S.PlayerTrackPlay>
  )
}

export default AudioPlayerTrack
