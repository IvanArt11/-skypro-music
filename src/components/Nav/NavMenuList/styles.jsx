import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavMenu = styled.div`
  display: block;
  visibility: visible;
`

export const MenuList = styled.ul`
  padding: 18px 0 10px 0;
`

export const MenuItem = styled.li`
  padding: 5px 0;
  margin-bottom: 16px;
  display: flex;
  position: relative;
`

export const MenuLink = styled.div`
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`

export const StyledNavLink = styled(NavLink)`
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
  }

  &:active {
    border-color: #ad61ff;
    color: #ad61ff;
  }
`

export const FavCount = styled.div`
  font-size: 16px;
  position: absolute;
  left: 110px;
  top: 5px;
  width: 24px;
  height: 24px;
  background: -webkit-linear-gradient(-45deg, #ad61ff, #d9b6ff);
  border-radius: 50%;
  align-items: center;
  color: white;
  display: flex;
  justify-content: center;
`
