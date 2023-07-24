import { useState } from 'react'
import NavMenuList from '../NavMenuList/NavMenuList'
import './NavMenuBurger.css'

function NavMenuBurger() {
  const [openMenu, setOpenMenu] = useState(false)

  function switchBurgerButton() {
    setOpenMenu(!openMenu)
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      switchBurgerButton();
    }
  }

  return (
    <>
      <div
        className="nav__burger burger"
        onClick={switchBurgerButton}
        onKeyDown={handleKeyPress} // Добавляем обработчик события клавиатуры
        role="button" // Указываем роль элемента (кнопки)
        tabIndex={0} // Делаем элемент фокусируемым для обработки клавиатурных событий
      >
        <span className="burger__line" />
        <span className="burger__line" />
        <span className="burger__line" />
      </div>
      {openMenu && <NavMenuList />}
    </>
  )
}

export default NavMenuBurger
