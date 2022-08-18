import styled from "styled-components";
import { MdClose } from 'react-icons/md'

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 100;
  align-items: center;
`

export const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0,0,0, 0.2);
  background-color: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  border-radius: 10px;

  @media screen and (max-width: 830px) {
    width: 700px;
    height: 400px;
  };

  @media screen and (max-width: 730px) {
    width: 500px;
    height: 300px;
  };

  @media screen and (max-width: 550px) {
    width: 330px;
    height: 100px;
  };
`

export const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background-color: #000;
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  background-color: #ebf2ff;

  @media screen and (max-width: 550px) {
    
  };
`

export const ModalP = styled.p`
  margin-bottom: 1rem;

  @media screen and (max-width: 550px) {
    font-size: 12px;
  };
`

export const ModalButton = styled.button`
  padding: 10px 24px;
  background-color: #141414;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: 0.4s ease-in-out;
  font-weight: bold;
  letter-spacing: 1.2px;
  
  &:hover{
    color: #000;
    background-color: #e9ba23;
  }

  @media screen and (max-width: 550px) {
    padding: 5px 12px;
  };
`

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  transition: 0.2s ease-in-out;

  &:hover{
    color: #e9ba23;
  }

  @media screen and (max-width: 550px) {
    top: 5px;
    right: 5px;
    width: 16px;
    height: 16px;
  };
`

export const ModalH1 = styled.h1`
  font-size: 32px;

  @media screen and (max-width: 550px) {
    font-size: 14px;
  };
`
