import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as S from './styles'
import { setLocalStorage } from '../../localStorage'
import { fetchLogin } from '../../API'

export function LoginPage({ setUser }) {
  const emailRef = React.useRef(null)
  const passwordRef = React.useRef(null)
  const [errorMessage, setErrorMessage] = React.useState('')
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

  const validateInputs = () => {
    if (!emailRef.current?.value) {
      setErrorMessage('Заполните почту')
      return false
    }
    // Проверка валидности email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if (!emailPattern.test(emailRef.current.value)) {
      setErrorMessage('Введите корректный email в формате valid@example.com')
      return false
    }
    if (!passwordRef.current?.value) {
      setErrorMessage('Введите пароль')
      return false
    }
    return true
  }

  const handleLoginButtonClick = () => {
    if (!validateInputs()) return
    validateAndLogin()
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo-black.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        <>
          <S.Inputs>
            <S.ModalInput ref={emailRef} type="text" placeholder="Почта" />
            <S.ModalInputContainer>
              <S.ModalInput
                ref={passwordRef}
                type={showPassword ? 'text' : 'password'}
                placeholder="Пароль"
              />
              <S.ShowPasswordIcon
                onClick={toggleShowPassword}
                showPassword={showPassword}
              >
                {showPassword ? '👁️' : '👁️'}
              </S.ShowPasswordIcon>
            </S.ModalInputContainer>
          </S.Inputs>
          {errorMessage && <S.Error>{errorMessage}</S.Error>}
          <S.Buttons>
            <S.PrimaryButton
              disabled={disabledButtonLogin}
              onClick={handleLoginButtonClick}
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
