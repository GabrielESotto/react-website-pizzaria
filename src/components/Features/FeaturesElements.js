import styled from "styled-components";
import FeaturePic from '../../images/pizza-day.jpg'

export const FeatureContainer = styled.div`
  background: linear-gradient(to right, rgba(0,0,0,0.62),
  rgba(0,0,0,0.5)), url(${FeaturePic});
  height: 100vh;
  max-height: 500px;
  width: 100vw;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;
`

export const FeatureH1 = styled.h1`
  font-size: clamp(3rem, 5vw, 5rem);
`


export const FeatureP = styled.p`
  margin-bottom: 1rem;
  font-size: clamp(1rem, 3vw, 2rem);
`

export const FeatureButton = styled.button`
  font-size: 1.4rem;
  padding: 0.6rem 3rem;
  border: none;
  background: #ffc500;
  color: #000;
  transition: 0.2s ease-in-out;
  margin-top: 1rem;

  &:hover{
    color: #fff;
    background: #e31837;
    transition: 0.2 ease-in-out;
    cursor: pointer;
}
`
