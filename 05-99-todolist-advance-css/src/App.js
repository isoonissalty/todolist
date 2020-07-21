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
  ${props => props.column && `flex-direction: column;`}
  ${props => props.spaceBetween && `justify-content: space-between;`}
  ${props => props.height && `height: ${props.height};`}
  flex-wrap: wrap;
  overflow: auto;
`

function App() {
  const [isOpen, open, close] = useModal()
  const [todos, setTodos] = useState([{
    id: 0,
    title: '',
    detail: '',
    due: formatDate(today),
    color: '#000000',
    isDone: false,
  },
  {
    id: 1,
    title: '',
    detail: '',
    due: formatDate(today),
    color: '#000000',
    isDone: false,
  },
  {
    id: 2,
    title: '',
    detail: '',
    due: formatDate(today),
    color: '#000000',
    isDone: false,
  },
  {
    id: 3,
    title: '',
    detail: '',
    due: formatDate(today),
    color: '#000000',
    isDone: false,
  },
  {
    id: 4,
    title: '',
    detail: '',
    due: formatDate(today),
    color: '#000000',
    isDone: false,
  },
  {
    id: 5,
    title: '',
    detail: '',
    due: formatDate(today),
    color: '#000000',
    isDone: false,
  },
  {
    id: 6,
    title: '',
    detail: '',
    due: formatDate(today),
    color: '#000000',
    isDone: false,
  },
  {
    id: 7,
    title: '',
    detail: '',
    due: formatDate(today),
    color: '#000000',
    isDone: false,
  }])
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
    let temp = todos.find(val => val.id === id)
    temp = { ...temp, isDone: !temp.isDone }
    let newTodos = todos.map(val => {
      return val.id === id ?
        temp : val
    })
    setTodos(newTodos)
  }

  const deleteTodo = (id) => {
    let temp = todos.filter(val => val.id !== id)
    setTodos(temp)
    setForm({
      id: temp.length,
      title: '',
      detail: '',
      due: formatDate(today),
      color: '#000000',
      isDone: false,
    })
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
        <Section height='100%'>
          {
            filteredItem(todos).map((value, index) =>
              <TodoItem value={value} index={index} updateTodo={updateTodo} deleteTodo={deleteTodo} />)
          }
        </Section>
      </Content>
    </Container >
  );
}

export default App;