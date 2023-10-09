import { Link } from 'react-router-dom'
import NavMenuBurger from '../NavMenuBurger/NavMenuBurger'
import * as S from './styles'
import { useUserContext } from '../../hooks/useUserContext'
import React from 'react'

function NavMenu() {
  const { user } = useUserContext()
  return (
    <S.MainNav>
      <S.NavLogo>
        <Link to="/">
          <S.LogoImage src="img/logo.png" alt="logo" />
        </Link>
      </S.NavLogo>
      <NavMenuBurger user={user} />
    </S.MainNav>
  )
}

export default NavMenu
