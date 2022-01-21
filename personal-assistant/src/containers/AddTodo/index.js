import React, {useState} from 'react'
import {TodoButton, TodoContainer, TodoForm, TodoInput} from './styles'
import Modal from '../../components/Modal'

const AddTodo = ({todosList, setTodosList}) => {
    const [todo, setTodo] = useState("");
    const [isOpen, setIsOpen] = useState(false)
  
    const modalOpenHandler = () => setIsOpen(true)
    const modalCloseHandler = () => setIsOpen(false)
    const changeHandler = (e) => setTodo(e.target.value)
    const submitHandler = (e) => {
      e.preventDefault()
      todo && modalOpenHandler()
    }
    return (
      <TodoContainer>
        <TodoForm onSubmit={submitHandler}>
          <TodoInput type="text" value={todo} onChange={changeHandler}/>
          <TodoButton type="submit">Add Todo</TodoButton>  
        </TodoForm>
        <Modal todo={todo} setTodo={setTodo} todosList={todosList} setTodosList={setTodosList} isOpen={isOpen} modalCloseHandler={modalCloseHandler}/>
      </TodoContainer>
    )
}

export default AddTodo
  