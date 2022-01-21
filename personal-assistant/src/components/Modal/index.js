import React from 'react'
import TodoCalendar from '../TodoCalendar'

const Modal = ({isOpen, modalCloseHandler, todo, setTodo, todosList, setTodosList}) => {
    const modalClass = isOpen ? "modal display-block" : "modal display-none";
    return (
      <div className={modalClass}>
        <section className="modal-main">
          <TodoCalendar todo={todo} setTodo={setTodo} todosList={todosList} setTodosList={setTodosList} modalCloseHandler={modalCloseHandler}/>
        </section>
      </div>
    )
  }

export default Modal