import React, { useState } from 'react';
import { TodoItem, FilterBar, FormTodo } from './components'
import { formatColor, formatDate } from './utils'
import { useForm } from './hooks';

const today = new Date()

function App() {

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

    console.log(newTodos)

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
    <div>
      <FormTodo addTodo={addTodo} form={form} onChange={onChange} />
      <hr />
      <FilterBar setFilter={setFilter} />
      <ul>
        {
          filteredItem(todos).map((value, index) => <TodoItem value={value} index={index} updateTodo={updateTodo} deleteTodo={deleteTodo} />)
        }
      </ul>
    </div >
  );
}

export default App;