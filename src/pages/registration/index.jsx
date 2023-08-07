import * as S from './styles'
import { GlobalStyles } from '../main/styles'

export function Registration() {
  return (
    <S.registration>
      <GlobalStyles />
      <S.registrationWrap>
        <S.registrationLogo src="/img/logo-black.png" alt="Логотип" />
        <S.registrationName type="text" placeholder="Логин" />
        <S.registrationPassword type="text" placeholder="Пароль" />
        <S.registrationRepeatPass type="text" placeholder="Повторите пароль" />
        <S.StyledNavLink to="/">Зарегистрироваться</S.StyledNavLink>
        {/* <S.registrationRegistration>
          Зарегистрироваться
        </S.registrationRegistration> */}
        <S.StyledNavLink to="/login">Назад ко входу</S.StyledNavLink>
      </S.registrationWrap>
    </S.registration>
  )
}

export default Registration
