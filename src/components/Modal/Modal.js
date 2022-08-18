import React, { useEffect, useCallback, useRef } from "react";
import { useSpring, animated } from 'react-spring'
import { 
  Background, 
  CloseModalButton, 
  ModalButton, 
  ModalContent, 
  ModalImg, 
  ModalP, 
  ModalWrapper,
  ModalH1
} from "./ModalElements";

export const Modal = ({showModal, setShowModal}) => {
  const modalRef = useRef()

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  })

  const closeModal = e => {
    if(modalRef.current === e.target) {
      setShowModal(false)
    }
  }

  const keyPress = useCallback(e => {
    if(e.key === 'Escape' && showModal) {
      setShowModal(false)
    }
  }, [setShowModal, showModal])
  
  useEffect(() => {
    document.addEventListener('keydown', keyPress) 
    return () => document.removeEventListener('keydown', keyPress)
  }, [keyPress])

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalImg 
                src={require('../../images/pizzaria-talentosa-logo.jpg')} 
                alt='logo' />
              <ModalContent>
                <ModalH1>Em andamento</ModalH1>
                <ModalP>Site em desenvolvimento</ModalP>
                <ModalButton>Em breve...</ModalButton>
              </ModalContent>
              <CloseModalButton aria-label='Close modal' onClick={() => setShowModal(prev => !prev)} />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null} 
    </>
  )
}
