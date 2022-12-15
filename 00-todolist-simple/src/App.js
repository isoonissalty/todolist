import React, { useState } from 'react';


function App() {
  const [text, setText] = useState('')
  const [todos, setTodos] = useState([])

  const onChange = (e) => setText(e.target.value)

  const addTodo = () => {
    if (text === '') return
    setTodos((prev) => [ ...prev, text])
    setText('')
  }

  const removeTodo = (index) => {
    if (index < 0 || index >= todos.length) return

    setTodos((prev) => {
      return prev.filter((todo, i) => i !== index)
    })
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
