import React, { useState } from 'react';


function App() {

  // this state store value from input field
  const [text, setText] = useState('')
  // this state store list of todos
  const [todos, setTodos] = useState([])

  // set text when input has change
  const onChange = (e) => {
    let { value } = e.target
    setText(value)
  }

  // action on click button to add todo
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

  // action on click button to delete todo by index
  const removeTodo = (index) => {
    setTodos([
      // combine new array without remove index
      ...todos.splice(0, index), // split front except index
      ...todos.splice(1, todos.length) // split tail
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
