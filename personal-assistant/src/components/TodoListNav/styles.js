import styled from 'styled-components'

export const TodoHistoryDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  margin-top: 25px;

  @media (max-width: 600px) {
    width: 90%;
  }
`

export const TodoHistoryButton = styled.button`
  width: 100%;
  &:focus {
    color: white;
    background: black;
  }
`
