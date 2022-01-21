import React from 'react'
import Calendar from 'react-calendar';
import { nanoid } from 'nanoid'
import {CalendarText} from './styles'

const TodoCalendar = ({modalCloseHandler, todo, setTodo, todosList, setTodosList}) => {
    const onDatePick = (e) => {
      setTodosList([...todosList, {id: nanoid(), todo: todo, date: e, status: (new Date() > e) ? 'failed' : 'inprogress'}])
      setTodo('')
      modalCloseHandler()
    }
    return (
      <div>
        <CalendarText>Plan to complete on</CalendarText>
        <Calendar onChange={onDatePick} className={'calendar'}/>
      </div>
    ) 
}

export default TodoCalendar
