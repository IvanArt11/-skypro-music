import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Login = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.85);
`
export const LoginWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  background-color: #fff;
  width: 366px;
  border-radius: 12px;
  padding: 43px;
`

export const LoginLogo = styled.img`
  width: 140px;
`

const LoginInput = `
    width: 100%;
    padding: 8px 0;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.054px;
    border: 0;
    border-bottom: 1px solid #D0CECE;
    outline: none;
    &::placeholder {
        color: #E1E1E1;
    }
`
export const LoginName = styled.input`
  ${LoginInput}
  margin-top: 22px;
`

export const LoginPassword = styled.input`
  ${LoginInput}
  margin-top: 18px;
`

const LoginButton = `
    width: 100%;
    text-align: center;
    padding: 16px 0;
    border-radius: 6px;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.054px;
    cursor: pointer;
`

export const LoginLogin = styled.div`
  ${LoginButton}
  background-color: #580EA2;
  color: #fff;
  margin-top: 40px;
  &:hover {
    opacity: 0.8;
  }
`

export const LoginRegistration = styled.div`
  ${LoginButton}
  color: #000;
  border: 1px solid #d0cece;
  &:hover {
    background-color: #ddd;
  }
`

export const StyledNavLink = styled(NavLink)`
  ${LoginButton}
  color: #000;
  border: 1px solid #d0cece;
  &:hover {
    background-color: #ddd;
  }
`
export const StyledNavLinkLogin = styled(NavLink)`
  ${LoginButton}
  background-color: #580EA2;
  color: #fff;
  margin-top: 40px;
  &:hover {
    opacity: 0.8;
  }
`
