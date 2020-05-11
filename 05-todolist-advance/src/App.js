import React, { useState } from 'react';

const today = new Date()

function App() {

  const [todos, setTodos] = useState([])
  const [form, setForm] = useState({
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

  const addTodo = (e) => {
    e.preventDefault()
    setTodos([...todos, form])
    setForm({
      title: '',
      detail: '',
      due: new Date(),
      color: '#000000',
      isDone: false,
    })
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
      <ul>
        {
          todos.map((value, index) => (
          <li style={{color: value.color}}>
            title: {value.title} <br />
            detail: {value.detail} <br />
            due: {value.due}
          </li>
          ))
        }
      </ul>
    </div>
  );
}

const formatDate = (today) => {
  let y = today.getFullYear()
  let m = today.getMonth() + 1
  let d = today.getDate()
  let t = `${y}-${m < 10 ? `0${m}` : `${m}`}-${d < 10 ? `0${d}` : d}`
  return t
}

export default App;
