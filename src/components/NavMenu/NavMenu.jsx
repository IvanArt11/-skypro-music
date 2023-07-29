import NavMenuBurger from '../NavMenuBurger/NavMenuBurger'
import * as S from './styles'

function NavMenu() {
  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImage src="img/logo.png" alt="logo" />
      </S.NavLogo>
      <NavMenuBurger />
    </S.MainNav>
  )
}

export default NavMenu
