import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 50vw;
  height: 60vh;
  background: rgba(0, 0, 100, 0.2);
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 50px;
  transition: width 2s linear, height 2s linear, border-radius 2s ease-in;

  &:hover {
    width: 70vw;
    height: 70vh;
  }

  @media (max-width: 600px) {
    width: 90vw;
    height: 65vh;
  }
`

export const TodoContainer = styled.div`
  display: flex;
  justify-content: center;
`


