// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
  background: linear-gradient(to top, #3c2940, #0b0c1e);
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`

export const CustomImage = styled.img`
  height: 90px;
`
export const Heading = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
`

export const Button = styled.button`
  background-color: #06b6d4;
  height: 38px;
  width: 80px;
  margin-top: 40px;
  color: #e2e8f0;
  border-radius: 7px;
  cursor: pointer;
  border-style: none;
`
