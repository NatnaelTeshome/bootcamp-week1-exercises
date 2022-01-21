import React from 'react'
import {TodoNavContainer, TodoNavLink} from './styles'

const NavBar = () => {
    return (
      <TodoNavContainer>
        <li>
          <TodoNavLink to="/">Home</TodoNavLink>
        </li>
        <li>
          <TodoNavLink to="/addTodo">Add Todo</TodoNavLink>
        </li>
        <li>
          <TodoNavLink to="/history">History</TodoNavLink>
        </li>
      </TodoNavContainer>      
    )
  }

export default NavBar