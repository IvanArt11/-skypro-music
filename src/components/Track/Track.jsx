import { Link } from 'react-router-dom'
import * as S from './styles'
import { timer } from '../../utils/timer'

function Track({ track, setCurrentTrack, setVisibleAudioPlayer }) {
  return (
    <S.PlaylistTrack
      onClick={() => {
        setCurrentTrack(track)
        setVisibleAudioPlayer(true)
      }}
    >
      <S.TrackTitle>
        <S.TrackTitleImage>
          <S.TrackTitleSvg alt="track">
            <use xlinkHref="img/icon/sprite.svg#icon-note" />
          </S.TrackTitleSvg>
        </S.TrackTitleImage>
        <S.TrackTitleText>
          <Link to="/">
            <S.TrackTitleLink>
              {track.name} <S.TrackTitleSpan />
              <S.TrackTitleSpan>{track.subname}</S.TrackTitleSpan>
            </S.TrackTitleLink>
          </Link>
        </S.TrackTitleText>
      </S.TrackTitle>
      <S.TrackAuthor>
        <Link to="/">
          <S.TrackAuthorLink>{track.author}</S.TrackAuthorLink>
        </Link>
      </S.TrackAuthor>
      <S.TrackAlbum>
        <Link to="/">
          <S.TrackAlbumLink>{track.album}</S.TrackAlbumLink>
        </Link>
      </S.TrackAlbum>
      <S.TrackTime>
        <S.TrackTimeSvg alt="time">
          <use xlinkHref="img/icon/sprite.svg#icon-like" />
        </S.TrackTimeSvg>
        <S.TrackTimeText>{timer(track.duration_in_seconds)}</S.TrackTimeText>
      </S.TrackTime>
    </S.PlaylistTrack>
  )
}

export default Track
