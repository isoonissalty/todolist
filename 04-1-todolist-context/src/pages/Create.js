import React, {  useState, useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Layout, Row, Col, Button, Typography, Input, Form } from 'antd'

import { TodoContext } from '../context'

const { Content } = Layout
const { Title } = Typography
const { TextArea } = Input
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Create = ({ edit }) => {
  const history = useHistory()

  const { id } = useParams()
  const { todos, dispatch } = useContext(TodoContext)

  const [payload, setPayload] = useState(edit ? todos[id] : {
    title: '',
    detail: ''
  })

  const onChange = (e) => {
    let { name, value } = e.target
    setPayload({ ...payload, [name]: value })
  }

  const onSubmit = () => {
    edit ? dispatch({ type: 'update-todos', payload, id }) : dispatch({ type: 'create-todo', payload })
    history.push('/')
  }

  return (
    <Layout className="layout">
      <Content style={{ padding: '50px 50px' }}>
        <Row>
          <Col offset={10} span={6} style={{ marginBottom: '16px' }}>
            <Title level={3}>{edit ? 'Edit your todo' : 'Create your todo'}</Title>
          </Col>
        </Row>
        <Row gutter={16} style={{ paddingBottom: 24 }}>
          <Col offset={8} span={8}>
            <Form
              {...layout}
              initialValues={payload}
              onFinish={onSubmit}
            >
              <Form.Item
                label="Title"
                name="title"
              >
                <Input placeholder={'title here...'} name="title" value={payload.title} onChange={onChange} />
              </Form.Item>
              <Form.Item
                label="Detail"
                name="detail"
              >
                <TextArea autoSize={{ minRows: 3, maxRows: 5 }} name="detail" value={payload.detail} onChange={onChange} placeholder={'detail here...'} />
              </Form.Item>
              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  {edit ? 'Edit' : 'Submit'}
                </Button>
                <Button type="link" onClick={() => history.push('/')}>
                  back
                </Button>
              </Form.Item>

            </Form>
          </Col>
        </Row>
      </Content>
    </Layout >
  )
}

export default Create
