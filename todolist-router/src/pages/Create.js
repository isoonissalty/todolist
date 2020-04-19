import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Layout, Row, Col, Button, Typography, Input, Form } from 'antd'

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

const todos = [
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
]

const Create = ({ edit }) => {
  const history = useHistory()

  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')

  const { id } = useParams()

  useEffect(() => {
    if (edit) {
      let todo = todos[id];
      setTitle(todo.title)
      setDetail(todo.detail)
    } else {
      setTitle('')
      setDetail('')
    }

  }, [title, detail, edit, id])

  const onChange = (e) => {
    let { name, value } = e.target

    switch (name) {
      case 'title':
        setTitle(value)
        return
      case 'detail':
        setDetail(value)
        return
      default:
        return
    }
  }

  const onSubmit = () => {
    //submit to store
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
              onFinish={onSubmit}
            >

              <Form.Item
                label="Title"
                name="Title"
              >
                <Input placeholder={'title here...'} name="title" value={title} onChange={onChange} />
              </Form.Item>
              <Form.Item
                label="Detail"
                name="Detail"
              >
                <TextArea autoSize={{ minRows: 3, maxRows: 5 }} name="detail" value={detail} onChange={onChange} placeholder={'detail here...'} />
              </Form.Item>
              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
                <Button type="link" onClick={()=>history.push('/')}>
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
