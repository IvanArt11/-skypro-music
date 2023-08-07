import { Link } from 'react-router-dom'
import NavMenuBurger from '../NavMenuBurger/NavMenuBurger'
import * as S from './styles'

function NavMenu() {
  return (
    <S.MainNav>
      <S.NavLogo>
        <Link to="/">
          <S.LogoImage src="img/logo.png" alt="logo" />
        </Link>
      </S.NavLogo>
      <NavMenuBurger />
    </S.MainNav>
  )
}

export default NavMenu
