import NavMenuBurger from '../NavMenuBurger/NavMenuBurger'
import './NavMenu.css'

function NavMenu() {
  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="img/logo.png" alt="logo" />
      </div>
      <NavMenuBurger />
    </nav>
  )
}

export default NavMenu
