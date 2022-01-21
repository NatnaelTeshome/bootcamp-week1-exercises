import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import {TodoEntryButtonContainer, TodoEntryContainer, TodoEntryInnerContainer} from './styles'

const Todo = ({todo, todosList, setTodosList}) => {
    const successHandler = () => {
      console.log(todosList)
      const newTodosList = [...todosList]
      const successTodoIndex = todosList.indexOf(todo)
      newTodosList[successTodoIndex] = {...todo, status: 'success'}
      setTodosList(newTodosList)
    }
  
    const removeHandler = () => {
      setTodosList(todosList.filter(removedTodo => removedTodo.id !== todo.id))
    }
    return(
      <TodoEntryContainer>
      <TodoEntryInnerContainer className={todo.status}>
        <div>
          <h3>{todo.todo}</h3>
          <small>{todo.date.toLocaleDateString()}</small>
        </div>
        {todo.status === 'inprogress' && <TodoEntryButtonContainer>
        <button onClick={successHandler} className='complete-button'>
          Mark Complete
        </button>
        <button onClick={removeHandler} className='remove-button'>
        <FontAwesomeIcon icon={faTrash} color='crimson' />
        </button>
        </TodoEntryButtonContainer>}
      </TodoEntryInnerContainer>
      </TodoEntryContainer>
    )
  }

export default Todo