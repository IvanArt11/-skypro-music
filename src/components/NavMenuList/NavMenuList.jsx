import * as S from './styles'

function NavMenuList() {
  const removeLocalStorage = () => {
    localStorage.removeItem('user')
  }

  return (
    <S.NavMenu>
      <S.MenuList>
        <S.MenuItem>
          <S.StyledNavLink to="/">Главное</S.StyledNavLink>
          {/* <S.MenuLink href="http://">Главное</S.MenuLink> */}
        </S.MenuItem>
        <S.MenuItem>
          <S.StyledNavLink to="/favorites">Мой плейлист</S.StyledNavLink>
          {/* <S.MenuLink href="http://">Мой плейлист</S.MenuLink> */}
        </S.MenuItem>
        <S.MenuItem>
          <S.StyledNavLink to="/login" onClick={removeLocalStorage}>
            Выйти
          </S.StyledNavLink>
          {/* <S.MenuLink href="http://">Войти</S.MenuLink> */}
        </S.MenuItem>
      </S.MenuList>
    </S.NavMenu>
  )
}

export default NavMenuList
