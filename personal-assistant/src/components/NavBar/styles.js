import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const TodoNavContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center; 
  background-color: black;
  font-weight: bold;
  list-style: none;
  height: 50px;
`

export const TodoNavLink = styled(Link)`
  text-decoration: none;
  color: #6699cc;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;

  &:hover {
    background: #6699cc;
    color: white;
  }
`
