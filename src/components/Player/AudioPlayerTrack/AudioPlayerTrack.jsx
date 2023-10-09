import { Link } from 'react-router-dom'
import * as S from './styles'
import React from 'react'

function AudioPlayerTrack({ currentTrack }) {
  return (
    <S.PlayerTrackPlay>
      <S.TrackPlayContain>
        <S.TrackPlayImage>
          <S.TrackPlaySvg alt="music">
            <use xlinkHref="img/icon/sprite.svg#icon-note" />
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
        <S.TrackPlayLike className="_btn-icon">
          <S.TrackPlayLikeSvg alt="like">
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </S.TrackPlayLikeSvg>
        </S.TrackPlayLike>
        <S.TrackPlayDislike className="_btn-icon">
          <S.TrackPlayDislikeSvg alt="dislike">
            <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
          </S.TrackPlayDislikeSvg>
        </S.TrackPlayDislike>
      </S.TrackPlayLikeDislike>
    </S.PlayerTrackPlay>
  )
}

export default AudioPlayerTrack
