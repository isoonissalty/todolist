import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Layout, Row, Col, Button, Card, Tooltip } from 'antd'
import { CheckOutlined } from '@ant-design/icons'

const { Content } = Layout

const Home = ({ todos = [
  {
    title: 'something1',
    detail: 'detail for something 1',
  },
  {
    title: 'something2',
    detail: 'detail for something 2',
  },
  {
    title: 'something3',
    detail: 'detail for something 3',
  },
  {
    title: 'something4',
    detail: 'detail for something 4',
  }
] }) => {

  const history = useHistory()

  const onDelete = (id) => {
    console.log('delete id: ', id)
  }

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
                <Card key={index} title={todo.title} extra={<EditBar index={index} onDelete={()=>onDelete(index)}/>} bordered={false} style={{ width: '100%', margin: 12 }}>
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

const EditBar = ({index, onDelete}) => {
  return (
    <span>
      <Link style={{margin: 10}} to={`/edit/${index}`}>edit</Link>
      <Tooltip title="done?">
        <Button onClick={onDelete} shape="circle" icon={<CheckOutlined />} />
      </Tooltip>
    </span>
  )
}

export default Home
