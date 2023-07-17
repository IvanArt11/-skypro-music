import NavMenuList from '../NavMenuList/NavMenuList'
import './NavMenu.css'

function NavMenu() {
  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="/src/img/logo.png" alt="logo" />
      </div>
      <div className="nav__burger burger">
        <span className="burger__line" />
        <span className="burger__line" />
        <span className="burger__line" />
      </div>
      <NavMenuList />
    </nav>
  )
}

export default NavMenu
