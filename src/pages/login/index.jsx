import { useNavigate } from 'react-router-dom'
import * as S from './styles'
import { GlobalStyles } from '../main/styles'

export function Login() {
  const navigate = useNavigate()

  const onAuthButtonClick = (user) => {
    localStorage.setItem('user', user)
    navigate('/', { replace: true })
  }

  return (
    <S.Login>
      <GlobalStyles />
      <S.LoginWrap>
        <S.LoginLogo src="img/logo-black.png" alt="Логотип" />
        <S.LoginName type="text" placeholder="Логин" />
        <S.LoginPassword type="text" placeholder="Пароль" />
        <S.StyledNavLinkLogin to="/" onClick={onAuthButtonClick}>
          Войти
        </S.StyledNavLinkLogin>
        {/* <S.LoginLogin>Войти</S.LoginLogin> */}
        <S.StyledNavLink to="/registration">Зарегистрироваться</S.StyledNavLink>
        {/* <S.LoginRegistration>Зарегистрироваться</S.LoginRegistration> */}
      </S.LoginWrap>
    </S.Login>
  )
}

export default Login
