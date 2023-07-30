import * as S from "./styles";

function TrackTitle() {
  return (
    <S.ContentTitle>
      <S.PlaylistTitleCol1>Трек</S.PlaylistTitleCol1>
      <S.PlaylistTitleCol2>Исполнитель</S.PlaylistTitleCol2>
      <S.PlaylistTitleCol3>Альбом</S.PlaylistTitleCol3>
      <S.PlaylistTitleCol4>
        <S.PlaylistTitleSvg alt="time">
          <use xlinkHref="img/icon/sprite.svg#icon-watch" />
        </S.PlaylistTitleSvg>
      </S.PlaylistTitleCol4>
    </S.ContentTitle>
  )
}

export default TrackTitle
