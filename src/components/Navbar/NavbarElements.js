import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaPizzaSlice } from 'react-icons/fa'

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;

  @media screen and (max-width: 600px) {
    justify-content: space-between;
    margin: 0 20px;
    align-items: center;
  }

`

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  @media screen and (max-width: 430px) {
    position: absolute;
    top: 17px;
    left: 25px;
    font-size: 1.5rem;
  }

  &:hover{
    color: #e9ba23
  }


`

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 7px;
  right: 0;
  cursor: pointer;
  color: #fff;
  transition: 0.2s ease-in-out;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }

  &:hover{
    color: #e9ba23
  }

  @media screen and (max-width: 430px) {
    top: 0;
  }
`

export const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`
