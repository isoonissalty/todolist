import React, { useState } from 'react';
import { Layout, Row, Col, Button, Input, List } from 'antd'
import './app.css'

const { Content } = Layout

function App() {

  const [text, setText] = useState('')
  const [todos, setTodos] = useState([])

  const addTodo = () => {
    if (text === '') return
    setTodos((prev) => [ ...prev, text])
    setText('')
  }

  return (
    <Layout className="layout">
      <Content style={{ padding: '50px 50px' }}>
        <Row gutter={16} className="site-layout-content">
          <Col span={21}>
            <Input placeholder="type todo here..." value={text} onChange={(e) => setText(e.target.value)} />
          </Col>
          <Col span={3}>
            <Button block type="primary" onClick={addTodo}>ADD</Button>
          </Col>
        </Row>
        <Row gutter={16} className="site-layout-content" style={{paddingBottom: 24}}>
          <Col span={24}>
            <List
              size="large"
              bordered
              dataSource={todos}
              renderItem={item => <List.Item>{item}</List.Item>}
            />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;