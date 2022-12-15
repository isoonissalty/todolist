import React, { useState } from 'react';

const today = new Date()

function App() {

  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('none')

  const [form, setForm] = useState({
    id: todos.length,
    title: '',
    detail: '',
    due: formatDate(today),
    color: '#000000',
    isDone: false,
  })

  const onChange = (e) => {
    let { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const addTodo = () => {
    setTodos((prev) => [...prev, form])
    setForm({
      id: todos.length+1,
      title: '',
      detail: '',
      due: formatDate(today),
      color: '#000000',
      isDone: false,
    })
  }

  const updateTodo = (id) => {
    let temp = {...todos[id]}
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

  const todoList = (value, index) => {
    return (
      <li key={index} style={{ color: value.color }}>
        id: {value.id} <br />
        title: {value.title} <br />
        detail: {value.detail} <br />
        due: {value.due} <br />
        <button onClick={() => updateTodo(value.id)}>{value.isDone ? 'uncheck' : 'check'}</button>
      </li>
    )
  }


  return (
    <div>
      <form onSubmit={addTodo}>
        <div>
          <label htmlFor='title'>Title: </label>
          <input type="text" name="title" value={form.title} onChange={onChange} />
        </div>
        <div>
          <label htmlFor='detail'>Detail: </label><br />
          <textarea style={{ resize: 'none' }} rows="3" cols="22" name="detail" value={form.detail} onChange={onChange} />
        </div>
        <div>
          <label htmlFor='due'>Due Date: </label>
          <input name='due' type='date' value={form.due} onChange={onChange} min={formatDate(today)} />
        </div>
        <div>
          <label htmlFor='color'>color: </label>
          <input name='color' type='color' value={form.color} onChange={onChange} />
        </div>
        <input type='submit' value="add todo" />
      </form>
      <hr />
      <div>
        <span>filter: </span>
        <button onClick={() => setFilter('done')}>done</button>
        <button onClick={() => setFilter('not done')}>not done</button>
        {
          ['#ff0000', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#ff00ff', '#000000'].map((value, index) => (
            <button key={index} style={{ backgroundColor: value, width: 40, height: 15, margin: 4 }} onClick={() => setFilter(value)}></button>
          ))
        }
        <button onClick={() => setFilter('none')}>clear</button>
      </div>
      <ul>
        {
          (filter === 'none') ?
            todos.map((value, index) => todoList(value, index)) :
            (filter === 'done') ?
              todos.filter(val => val.isDone).map((value, index) => todoList(value, index))
              : (filter === 'not done') ?
                todos.filter(val => !val.isDone).map((value, index) => todoList(value, index))
                :
                todos.filter(val => formatColor(val.color) === filter).map((value, index) => todoList(value, index))
        }
      </ul>
    </div >
  );
}

const formatDate = (today) => {
  let y = today.getFullYear()
  let m = today.getMonth() + 1
  let d = today.getDate()
  let t = `${y}-${m < 10 ? `0${m}` : `${m}`}-${d < 10 ? `0${d}` : d}`
  return t
}

const formatColor = (filter) => {
  let r = parseInt(`0x${filter.slice(1, 3)}`)
  let g = parseInt(`0x${filter.slice(3, 5)}`)
  let b = parseInt(`0x${filter.slice(5, 7)}`)
  r = Math.round(r / Math.floor(255 / 3)) + 1
  g = Math.round(g / Math.floor(255 / 3)) + 1
  b = Math.round(b / Math.floor(255 / 3)) + 1
  let colorRange = ['#000000', '#0000ff', '#00ff00', '#00ffff', '#ff0000', '#ff00ff', '#ffff00']
  console.log(`${Math.ceil(1 - (1 / r))}${Math.ceil(1 - (1 / g))}${Math.ceil(1 - (1 / b))}`)
  console.log(parseInt(`${Math.ceil(1 - (1 / r))}${Math.ceil(1 - (1 / g))}${Math.ceil(1 - (1 / b))}`, 2))
  return colorRange[parseInt(`${Math.ceil(1 - (1 / r))}${Math.ceil(1 - (1 / g))}${Math.ceil(1 - (1 / b))}`, 2)]
}

export default App;