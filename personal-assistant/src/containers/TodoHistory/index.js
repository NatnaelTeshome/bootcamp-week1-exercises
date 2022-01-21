import React, {useEffect, useState} from 'react'
import {TodoSearchContainer, TodoListNavContainer} from './styles'
import Todo from '../../components/Todo'
import TodoSearch from '../../components/TodoSearch'
import TodoListNav from '../../components/TodoListNav'

const TodoHistory = ({todosList, setTodosList}) => {
    const [choice, setChoice] = useState('')
    const [searchedTodos, setSearchedTodos] = useState('')
    useEffect(() => {
      todosList.map(todo => {
        if (new Date() > todo.date){
          todo.status = 'failed'
        }
      })
    })
    const choiceHandler = (e) => {
      setChoice(e.target.value)
    }
    const todosListUsed = searchedTodos ? searchedTodos: todosList;
    const listType = choice ? todosListUsed.map(todo => {
      if (todo.status === choice) {
        return <Todo key={todo.id} todo={todo} todosList={todosList} setTodosList={setTodosList}/>
      } 
      }) : todosListUsed.map(todo => <Todo key={todo.id} todosList={todosList} setTodosList={setTodosList} todo={todo}/>)
      
    return(
      <>
      <TodoSearchContainer>
        <TodoSearch todosList={todosList} setSearchedTodos={setSearchedTodos}/>
      </TodoSearchContainer>
      <TodoListNavContainer>
        <TodoListNav choiceHandler={choiceHandler}/>
      </TodoListNavContainer>
      <div>
         {listType}
      </div>
      </>
    )
}

export default TodoHistory
  