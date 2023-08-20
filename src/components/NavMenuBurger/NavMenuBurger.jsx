import { useState } from 'react'
import NavMenuList from '../NavMenuList/NavMenuList'
import * as S from './styles'

function NavMenuBurger({setUser}) {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <>
      <S.NavBurger
      onClick={() => setOpenMenu(!openMenu)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          setOpenMenu(!openMenu);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label="Toggle Menu"
      >
        <S.BurgerLine />
        <S.BurgerLine />
        <S.BurgerLine />
      </S.NavBurger>
      {openMenu && <NavMenuList setUser={setUser} />}
    </>
  )
}

export default NavMenuBurger
