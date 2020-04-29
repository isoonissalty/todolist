import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Layout, Row, Col, Button, Card, Tooltip } from 'antd'
import { CheckOutlined } from '@ant-design/icons'

import { checkTodo } from '../actions'


const { Content } = Layout

const Home = () => {
  const history = useHistory()

  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const onDelete = (id) => {
    dispatch(checkTodo(id))
  }

  useEffect(()=>{
    console.log(todos)
  }, [todos])

  return (
    <Layout className="layout">
      <Content style={{ padding: '50px 50px' }}>
        <Row>
          <Col offset={14} span={2}>
            <Button block type="primary" onClick={() => history.push('/create')}>Create</Button>
          </Col>
        </Row>
        <Row style={{ paddingBottom: 24 }}>
          <Col offset={8} span={8}>
            {
              todos.map((todo, index) => (
                <Card key={index} title={todo.title} extra={<EditBar index={index} payload={todo} onDelete={() => onDelete(index)} />} bordered={false} style={{ width: '100%', margin: 12 }}>
                  <p>{todo.detail}</p>
                </Card>
              ))
            }
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}

const EditBar = ({ index, onDelete, payload }) => {
  const history = useHistory()
  return (
    <span>
      <Button style={{ margin: 10 }} onClick={()=>history.push(`/edit/${index}`, payload)}>edit</Button>
      <Tooltip title="done?">
        <Button onClick={onDelete} shape="circle" icon={<CheckOutlined />} />
      </Tooltip>
    </span>
  )
}

export default Home
