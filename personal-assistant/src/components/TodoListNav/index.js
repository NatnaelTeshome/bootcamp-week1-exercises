import React from 'react'
import {TodoHistoryButton, TodoHistoryDiv} from './styles'

const TodoListNav = ({choiceHandler}) => {
    return(
      <TodoHistoryDiv>
          <TodoHistoryButton onClick={choiceHandler} value="inprogress">In Progress</TodoHistoryButton>
          <TodoHistoryButton onClick={choiceHandler} value="success">Success</TodoHistoryButton>
          <TodoHistoryButton onClick={choiceHandler} value="failed">Failed</TodoHistoryButton>
       </TodoHistoryDiv>
    ) 
  }

export default TodoListNav
  