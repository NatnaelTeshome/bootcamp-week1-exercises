import React, {useState} from 'react'
import 'react-calendar/dist/Calendar.css';
import './index.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import AddTodo from './containers/AddTodo'
import TodoHistory from './containers/TodoHistory';
import Home from './containers/Home';

const App = () => {
  const [todosList, setTodosList] = useState([])
  return(
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route path="/addTodo">
          <AddTodo todosList={todosList} setTodosList={setTodosList}/>
        </Route>
        <Route path="/history">
          <TodoHistory todosList={todosList} setTodosList={setTodosList}/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
