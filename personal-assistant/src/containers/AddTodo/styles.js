import styled from 'styled-components'

export const TodoButton = styled.button`
  background: #6699cc; 
  color: white;
  padding: 10px;
  margin-top: 10px;
  font-size: 15px;
  width: 100%;
`

export const TodoInput = styled.input`
  font-size: 15px;
  padding: 10px;
  margin-top: 25px;
  background: #ff7f7;
  width: 100%;
`

export const TodoForm =  styled.form`
  width: 40%;
  @media (max-width: 800px) {
    width: 80%;
  }
`

export const TodoContainer = styled.div`
  display: flex;
  justify-content: center;
`
