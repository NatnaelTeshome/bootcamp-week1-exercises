import React, {useState, useRef, useEffect} from 'react'
import { nanoid } from 'nanoid'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './modal.css';
import styled from 'styled-components'
import { BrowserRouter, Switch, Route, Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const TodoButton = styled.button`
  background: #6699cc; 
  color: white;
  padding: 10px;
  margin-top: 10px;
  font-size: 15px;
  width: 100%;
`;

const TodoContainer = styled.div`
  display: flex;
  justify-content: center;
`

const TodoInput = styled.input`
  font-size: 15px;
  padding: 10px;
  margin-top: 25px;
  background: #ff7f7;
  width: 100%;
`

const TodoForm =  styled.form`
  width: 40%;
  @media (max-width: 800px) {
    width: 80%;
  }
`

const CalendarText = styled.h3`
  text-align: center;
`

const TodoNavContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center; 
  background-color: black;
  font-weight: bold;
  list-style: none;
  height: 7vh;
`

const TodoNavLink = styled(Link)`
  text-decoration: none;
  color: #6699cc;
  font-weight: bold;
  font-size: 20px;
  padding: 15px;

  &:hover {
    background: #6699cc;
    color: white;
  }
`

const TodoHistoryDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  margin-top: 25px;

  @media (max-width: 600px) {
    width: 90%;
  }
`

const TodoHistoryButton = styled.button`
  width: 100%;
  &:focus {
    color: white;
    background: black;
  }
`

const TodosListContainer = styled.div`
  
`

const TodoListNavContainer = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
`

const TodoEntryInnerContainer = styled.div`
  width: 30%;
  justify-content: space-between;
  display: flex;
  margin: 10px;
  border-radius: 5px;
  padding: 5px;

  @media (max-width: 600px) {
    width: 72%;
  }
  
`

const TodoEntryButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const HomeContainer = styled.div`
  width: 50vw;
  height: 60vh;
  background: #6699cc;
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 50px;
  transition: width 2s linear, height 2s linear, border-radius 2s ease-in;

  &:hover {
    width: 70vw;
    height: 70vh;
  }

  @media (max-width: 600px) {
    width: 90vw;
    height: 65vh;
  }
`

const TodoEntryContainer = styled.div`
  display: flex;
  justify-content: center;
`

const TodoSearchContainer = styled.div`
  display: flex;
  justify-content: center;
`

const TodoSearchBarContainer = styled.div`
  margin-top: 25px;
  margin-bottom: 7px;
  width: 30%;
  display: flex;
  align-items: center;

   @media (max-width: 600px) {
    width: 80%;
  }
`

const TodoSearchBar = styled.input`
  width: 100%;
  padding: 10px;
`

const SearchBarButton = styled.div`
  background: #6699cc;
  padding: 10px;
`

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
    <TodosListContainer>
       {listType}
    </TodosListContainer>
    </>
  )
}

const TodoListNav = ({choiceHandler}) => {
  return(
    <TodoHistoryDiv>
        <TodoHistoryButton onClick={choiceHandler} value="inprogress">In Progress</TodoHistoryButton>
        <TodoHistoryButton onClick={choiceHandler} value="success">Success</TodoHistoryButton>
        <TodoHistoryButton onClick={choiceHandler} value="failed">Failed</TodoHistoryButton>
     </TodoHistoryDiv>
  ) 
}

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

const Home = () => {
  const [quote, setQuote] = useState({})
  useEffect(() => {
    fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    setQuote(data[Math.floor(Math.random() * 100)])
    console.log(data);
  });
  }, [])
  return(
    <TodoContainer>
      <HomeContainer>
        {quote.text}
      </HomeContainer>
    </TodoContainer>
  )
}

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

export default App
