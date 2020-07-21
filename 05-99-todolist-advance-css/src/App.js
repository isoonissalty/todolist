import React, { useState } from 'react';
import styled from 'styled-components'
import { TodoItem, FilterBar, FormTodo } from './components'
import { formatColor, formatDate } from './utils'
import { useForm, useModal } from './hooks';

const today = new Date()

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
`

const Content = styled.div`
  height: 60%;
  width: 60%;
  padding: 5%;
  background-color: #fff;
  border-radius: 3.14rem;
`

const Section = styled.div`
  display: flex;
  ${props => props.column && `flex-direction: column`}
  ${props => props.spaceBetween && `justify-content: space-between`}
`

function App() {
  const [isOpen, open, close] = useModal()
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('none')
  const [form, setForm, onChange] = useForm({
    id: todos.length,
    title: '',
    detail: '',
    due: formatDate(today),
    color: '#000000',
    isDone: false,
  })

  const addTodo = (e) => {
    e.preventDefault()
    setTodos([...todos, form])
    setForm({
      id: todos.length + 1,
      title: '',
      detail: '',
      due: formatDate(today),
      color: '#000000',
      isDone: false,
    })
    close()
  }

  const updateTodo = (id) => {
    let temp = { ...todos[id] }
    temp = {
      ...temp,
      isDone: !todos[id].isDone
    }
    let newTodos = todos.map((val, index) => {
      if (index === id) return temp
      else return val
    })
    setTodos(newTodos)
  }

  const deleteTodo = (id) => {
    setTodos([
      ...todos.splice(0, id),
      ...todos.splice(1, todos.length)
    ])
  }

  const filteredItem = (todos) => {
    switch (filter) {
      case 'none':
        return [...todos]
      case 'done':
        return todos.filter(val => val.isDone)
      case 'not done':
        return todos.filter(val => !val.isDone)
      default:
        return todos.filter(val => formatColor(val.color) === filter)
    }
  }

  return (
    <Container>
      <Content>
        <Section spaceBetween>
          <button onClick={open}>Create Todo</button>
          <FilterBar setFilter={setFilter} />
        </Section>
        <FormTodo isOpen={isOpen} addTodo={addTodo} form={form} onChange={onChange} close={close} />
        <ul>
          {
            filteredItem(todos).map((value, index) => <TodoItem value={value} index={index} updateTodo={updateTodo} deleteTodo={deleteTodo} />)
          }
        </ul>
      </Content>
    </Container >
  );
}

export default App;