import React, { useState } from 'react';
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TodoContainer = styled.div`
  width: 50%;
  height: 60vh;
  background-color: #EEE;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 5px 5px 15px 0px rgba(0,0,0,0.25);
  padding: 1rem;
`

const InputSection = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const TodoSection = styled.div`
  height: calc( 60vh - 100px );
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`

const Input = styled.input`
  width: 60%;
  height: 4vh;
  margin: 1rem 2rem;
  padding: .25rem .5rem;
  border-radius: 6.28px;
  font-size: 2rem;
  text-align: center;
  border: 4px none #8842d5;

  &:focus {
    outline-offset: 0;
    outline: -webkit-focus-ring-color auto 0px;
  }
`

const Button = styled.div`
  color: #FFF;
  background-color: #AAA;
  font-size: 2rem;
  text-align: center;
  padding: .25rem 1.5rem;
  border-radius: 6.28px;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: #AAA;
    background-color: #FFF;
  }

  &:active {
    color: #CCC;
    background-color: #333;
  } 

`

const Todo = styled.div`
  width: 60%;
  font-size: 2rem;
  box-sizing: border-box;
  padding: .5rem 1.5rem;
  border-radius: 6.28px;
  background-color: #FFF;
  margin: .5rem 0;
  cursor: pointer;
  border: 1px solid #FFF;

  &:hover {
    box-sizing: border-box;
    border: 1px solid #888;
  }
`

function App() {

  const [text, setText] = useState('')
  const [todos, setTodos] = useState([
    'cook a breakfast',
    'wash motorcycke',
    'create portfolio website',
    'do something',
    'final project',
    'wash your hand',
    'create stunning website',
    'repeat avything',
    'every day',
    'make cookies'
  ])

  const onChange = (e) => {
    let { value } = e.target

    setText(value)
  }

  const addTodo = () => {
    if (text !== '') {
      setTodos([
        text,
        ...todos,
      ])

      setText('')
    }
  }

  return (
    <Container>
      <TodoContainer>
        <InputSection>
          <Input type="text" value={text} onChange={onChange} />
          <Button onClick={addTodo}>add</Button>
        </InputSection>
        <TodoSection>
          {
            todos.map((value, index) => {
              return <Todo key={index}>{value}</Todo>
            })
          }
        </TodoSection>
      </TodoContainer>
    </Container>
  );
}

export default App;
