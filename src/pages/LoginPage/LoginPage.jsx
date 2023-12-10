import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as S from '../RegisterPage/styles'
import { setLocalStorage } from '../../localStorage'
import { fetchLogin, getAccessToken } from '../../API'
import { UserContext } from '../../App'

export function LoginPage() {
  const { setUser } = React.useContext(UserContext)
  const emailRef = React.useRef(null)
  const passwordRef = React.useRef(null)
  const [errorMessage, setErrorMessage] = React.useState(null)
  const [disabledButtonLogin, setDisabledButtonLogin] = React.useState(false)
  const [showPassword, setShowPassword] = React.useState(false)

  const navigate = useNavigate()

  const validateAndLogin = async () => {
    setDisabledButtonLogin(true)
    try {
      let email = ''
      let password = ''

      if (emailRef.current && passwordRef.current) {
        email = emailRef.current.value
        password = passwordRef.current.value
      }

      const userData = await fetchLogin(email, password)
      const accessToken = await getAccessToken(email, password)

      userData.accessToken = accessToken
      setUser(userData)
      setLocalStorage(userData)
      setErrorMessage(null)
      navigate('/', { replace: true })
    } catch (error) {
      if (error) {
        setErrorMessage(error.message)
      }
    } finally {
      setDisabledButtonLogin(false)
    }
  }

  const isEmailValid = (email) => {
    // Регулярное выражение для проверки валидности email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return emailRegex.test(email)
  }

  const handleLogin = () => {
    const email = emailRef.current?.value
    const password = passwordRef.current?.value

    if (!email) {
      setErrorMessage('Заполните почту')
      return
    }

    if (!isEmailValid(email)) {
      setErrorMessage('Введите корректный email в формате valid@example.com')
      return
    }

    if (!password) {
      setErrorMessage('Введите пароль')
      return
    }

    validateAndLogin()
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo-black.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        <>
          <S.Inputs>
            <S.ModalInput ref={emailRef} type="text" placeholder="Почта" />
            <S.ModalInput
              ref={passwordRef}
              type={showPassword ? 'text' : 'password'}
              placeholder="Пароль"
            />
            <S.PasswordVisibilityToggle onClick={togglePasswordVisibility}>
              {showPassword ? '👁️' : '👁️'}
            </S.PasswordVisibilityToggle>
          </S.Inputs>
          {errorMessage && <S.Error>{errorMessage}</S.Error>}
          <S.Buttons>
            <S.PrimaryButton
              disabled={disabledButtonLogin}
              onClick={handleLogin}
            >
              Войти
            </S.PrimaryButton>
            <Link to="/register">
              <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
            </Link>
          </S.Buttons>
        </>
      </S.ModalForm>
    </S.PageContainer>
  )
}

export default LoginPage
