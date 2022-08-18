import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/'>Pizzas Salgadas</SidebarLink>
        <SidebarLink to='/'>Pizzas Doces</SidebarLink>
        <SidebarLink to='/'>Menu Completo</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/'>Peça agora</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  )
}

export default Sidebar
