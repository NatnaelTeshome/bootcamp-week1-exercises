import React, {useRef} from 'react'
import {TodoSearchBar, TodoSearchBarContainer, SearchBarButton} from './styles'

const TodoSearch = ({todosList, setSearchedTodos}) => {
    const searchRef = useRef()
    const changeHandler = () => {
      const newTodosList = todosList.filter(todo => todo.todo.toLowerCase().includes(searchRef.current.value.toLowerCase()))
      setSearchedTodos(newTodosList)
    }
    return (
      <TodoSearchBarContainer>
        <TodoSearchBar ref={searchRef} onChange={changeHandler}/>
        <SearchBarButton>
          Search
        </SearchBarButton>
      </TodoSearchBarContainer>
    );
  }

export default TodoSearch