import { Link } from 'react-router-dom'
import React from 'react'
import * as S from './styles'
import { removeLocalStorage } from '../../localStorage'
import { useUserContext } from '../../hooks/useUserContext'

function SidebarPersonal() {
  // Используем хук useUserContext для получения данных о пользователе
  const { user, setUser } = useUserContext()

  const handleClickLogout = () => {
    setUser(null)
    removeLocalStorage()
  }
  return (
    <S.SidebarPersonal>
      <S.SidebarPersonalName>{user.username}</S.SidebarPersonalName>
      <Link to="/login">
        <S.SidebarLogout onClick={handleClickLogout} className="_btn">
          <use xlinkHref="img/icon/sprite.svg#icon-exit" />
        </S.SidebarLogout>
      </Link>
    </S.SidebarPersonal>
  )
}

export default SidebarPersonal
