import React, { useState } from 'react';
import { Container, TodoContainer, InputSection, Input, Button, TodoSection, Todo } from './components'

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

  const onChange = (e) => setText(e.target.value)

  const addTodo = () => {
    if (text === '') return
    setTodos((prev) => [ ...prev, text])
    setText('')
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
