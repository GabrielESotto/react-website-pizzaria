import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import { 
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn 
} from './HeroElements'

const Hero = ({openModal}) => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>A melhor Pizza</HeroH1>
          <HeroP>Entregamos no conforto da sua casa</HeroP>
          <HeroBtn onClick={openModal}>Peça ja</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
