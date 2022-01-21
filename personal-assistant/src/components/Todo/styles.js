import styled from 'styled-components'

export const TodoEntryContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const TodoEntryButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const TodoEntryInnerContainer = styled.div`
  width: 30%;
  justify-content: space-between;
  display: flex;
  margin: 10px;
  border-radius: 5px;
  padding: 5px;

  @media (max-width: 600px) {
    width: 72%;
  }
  
`
