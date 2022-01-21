import styled from 'styled-components'

export const TodoSearchBarContainer = styled.div`
  margin-top: 25px;
  margin-bottom: 7px;
  width: 30%;
  display: flex;
  align-items: center;

   @media (max-width: 600px) {
    width: 80%;
  }
`

export const TodoSearchBar = styled.input`
  width: 100%;
  padding: 10px;
`

export const SearchBarButton = styled.div`
  background: #6699cc;
  padding: 10px;
`
