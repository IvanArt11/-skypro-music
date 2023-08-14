import * as S from './styles'

function AudioPlayerControls({
  handlePlayingAudio,
  isPlaying,
  handleRepeat,
  isRepeat,
  handleNextPrev,
  handleShuffle,
}) {
  return (
    <S.PlayerControls>
      <S.PlayerBtnPrev className="_btn">
        <S.PlayerBtnPrevSvg onClick={() => handleNextPrev()} alt="prev">
          <use xlinkHref="img/icon/sprite.svg#icon-prev" />
        </S.PlayerBtnPrevSvg>
      </S.PlayerBtnPrev>
      <S.PlayerBtnPlay onClick={handlePlayingAudio} className="_btn">
        <S.PlayerBtnPlaySvg alt="play">
          <use
            xlinkHref={
              isPlaying
                ? 'img/icon/sprite.svg#icon-pause'
                : 'img/icon/sprite.svg#icon-play'
            }
          />
        </S.PlayerBtnPlaySvg>
      </S.PlayerBtnPlay>
      <S.PlayerBtnNext className="_btn">
        <S.PlayerBtnNextSvg onClick={() => handleNextPrev()} alt="next">
          <use xlinkHref="img/icon/sprite.svg#icon-next" />
        </S.PlayerBtnNextSvg>
      </S.PlayerBtnNext>
      <S.PlayerBtnRepeat
        onClick={handleRepeat}
        className={isRepeat ? '_btn-icon-active' : '_btn-icon'}
      >
        <S.PlayerBtnRepeatSvg alt="repeat">
          <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
        </S.PlayerBtnRepeatSvg>
      </S.PlayerBtnRepeat>
      <S.PlayerBtnShuffle className="_btn-icon">
        <S.PlayerBtnShuffleSvg onClick={() => handleShuffle()} alt="shuffle">
          <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
        </S.PlayerBtnShuffleSvg>
      </S.PlayerBtnShuffle>
    </S.PlayerControls>
  )
}

export default AudioPlayerControls
