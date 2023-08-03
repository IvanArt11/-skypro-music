import * as S from './styles'

export function Login() {
  return (
    <S.Login>
      <S.LoginWrap>
        <S.LoginLogo src="img/logo.png" alt="Логотип" />
        <S.LoginName type="text" placeholder="Адрес эл. почты" />
        <S.LoginPassword type="text" placeholder="Пароль" />
        <S.LoginLogin>Войти</S.LoginLogin>
        <S.LoginRegistration>Зарегистрироваться</S.LoginRegistration>
      </S.LoginWrap>
    </S.Login>
  )
}

export default Login
