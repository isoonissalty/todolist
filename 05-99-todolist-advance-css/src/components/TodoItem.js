import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  width: 180px;
  padding: 32px;
  margin: 1.2rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3.14px;
  height: 120px;
`

const TodoItem = ({ value, index, updateTodo, deleteTodo }) => {
  return (
    <Card key={index} style={{ color: value.color }}>
        title: {value.title} <br />
        detail: {value.detail} <br />
        due: {value.due} <br />
        status: {value.isDone ? 'done' : 'not done'} <br />
      <button onClick={() => updateTodo(value.id)}>{value.isDone ? 'uncheck' : 'check'}</button>
      <button onClick={() => deleteTodo(value.id)}>delete</button>
    </Card>
  )
}

export default TodoItem
