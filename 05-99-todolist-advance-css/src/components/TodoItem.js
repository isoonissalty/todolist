import React from 'react'

const TodoItem = ({ value, index, updateTodo, deleteTodo }) => {
  return (
    <li key={index} style={{ color: value.color }}>
      id: {value.id} <br />
        title: {value.title} <br />
        detail: {value.detail} <br />
        due: {value.due} <br />
        status: {value.isDone ? 'done' : 'not done'} <br />
      <button onClick={() => updateTodo(value.id)}>{value.isDone ? 'uncheck' : 'check'}</button>
      <button onClick={() => deleteTodo(value.id)}>delete</button>
    </li>
  )
}

export default TodoItem
