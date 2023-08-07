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
`

export const MenuLink = styled.a`
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
