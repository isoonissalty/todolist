import React from 'react'
import { formatDate } from '../utils'
import styled from 'styled-components'

const today = new Date()

const Modal = styled.div`
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;  
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`

const Background = styled.div`
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.2);
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
`

const Form = styled.form`
  padding: 4% 6%;
  margin-bottom: 15%;
  background-color: #fff;
  z-index: 400;
  border-radius: 3.14rem;
`

const FormTodo = ({ addTodo, form, onChange, isOpen, close }) => {
  return isOpen ? (
    <>
      <Modal>
        <Form onSubmit={addTodo}>
          <div>
            <label htmlFor='title'>Title: </label>
            <input type="text" name="title" value={form.title} onChange={onChange} />
          </div>
          <div>
            <label htmlFor='detail'>Detail: </label><br />
            <textarea style={{ resize: 'none' }} rows="3" cols="22" name="detail" value={form.detail} onChange={onChange} />
          </div>
          <div>
            <label htmlFor='due'>Due Date: </label>
            <input name='due' type='date' value={form.due} onChange={onChange} min={formatDate(today)} />
          </div>
          <div>
            <label htmlFor='color'>color: </label>
            <input name='color' type='color' value={form.color} onChange={onChange} />
          </div>
          <input type='submit' value="add todo" />
        </Form>
        <Background onClick={close} />
      </Modal>
    </>
  ) : null
}

export default FormTodo
