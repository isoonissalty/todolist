import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'

function App() {

  const [text, setText] = useState('')
  const [todos, setTodos] = useState(['isoon', 'is', 'salt'])

  const onChange = (e) => {
    let { value } = e.target
    setText(value)
  }

  const addTodo = () => {
    if (text !== '') {
      setTodos(
        [
          text,
          ...todos
        ]
      )
      setText('')
    }
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col xs={{span: 6, offset: 2}}>
          <Form.Control type="text" value={text} onChange={onChange} />
        </Col>
        <Col xs={2}>
          <Button block onClick={addTodo}>add todo</Button>
        </Col>
      </Row>
      <Row className="mt-3">
          {
            todos.map((todo, index) => {
              return <Col key={index} xs={{span:8, offset:2}}><Card className="w-100 my-1" body>{todo}</Card></Col>
            })
          }
      </Row>
    </Container>
  );
}

export default App;
