import React, { useState } from 'react';


function App() {

  const [text, setText] = useState('')
  const [todos, setTodos] = useState([])

  const onChange = (e) => {
    let { value } = e.target
    setText(value)
  }

  const addTodo = () => {
    if (text !== '') {
      setTodos(
        [
          ...todos,
          text
        ]
      )
      setText('')
    }
  }

  const removeTodo = (index) => {

    setTodos([
      ...todos.splice(0, index),
      ...todos.splice(1, todos.length)
    ])
  }

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <button onClick={addTodo}>add</button>

      <ul>
        {
          todos.map((todo, index) => {
            return <span key={index}><li>{todo} <button onClick={() => removeTodo(index)}>x</button></li></span>
          })
        }
      </ul>
    </div>
  );
}

export default App;
