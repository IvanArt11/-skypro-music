import * as S from './styles'

export function NotFoundPage() {
  return (
    <S.notFound>
      <S.notFoundCode>404</S.notFoundCode>
      <S.notFoundTextWrap>
        <S.notFoundText>Страница не найдена</S.notFoundText>
        <S.notFoundImg
          src="/img/icon/smile_crying.png"
          alt="грустный смайлик"
        />
      </S.notFoundTextWrap>
      <S.notFoundDescription>
        Возможно, она была удалена или перенесена на другой адрес
      </S.notFoundDescription>

      <S.StyledNavLink to="/">Вернуться на главную</S.StyledNavLink>
      {/* <S.notFoundButton>Вернуться на главную</S.notFoundButton> */}
    </S.notFound>
  )
}

export default NotFoundPage
