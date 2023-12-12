import React from 'react'
import * as S from './styles'
import { removeLocalStorage } from '../../../localStorage'
import { UserContext } from '../../../App'
import { useGetFavoritesPlaylistQuery } from '../../../services/tracks'

function NavMenuList() {
  const { setUser } = React.useContext(UserContext)

  const handleClickLogout = () => {
    setUser(null)
    removeLocalStorage()
  }

  const { data } = useGetFavoritesPlaylistQuery()

  return (
    <S.NavMenu>
      <S.MenuList>
        <S.MenuItem>
          <S.StyledNavLink to="/">Главное</S.StyledNavLink>
          {/* <S.MenuLink href="http://">Главное</S.MenuLink> */}
        </S.MenuItem>
        <S.MenuItem>
          <S.StyledNavLink to="/favorites">
            Мой плейлист
            {data && <S.FavCount>{data.length}</S.FavCount>}
          </S.StyledNavLink>
          {/* <S.MenuLink href="http://">Мой плейлист</S.MenuLink> */}
        </S.MenuItem>
        <S.MenuItem>
          <S.StyledNavLink to="/Auth" onClick={handleClickLogout}>
            Выйти
          </S.StyledNavLink>
          {/* <S.MenuLink href="http://">Войти</S.MenuLink> */}
        </S.MenuItem>
      </S.MenuList>
    </S.NavMenu>
  )
}

export default NavMenuList
