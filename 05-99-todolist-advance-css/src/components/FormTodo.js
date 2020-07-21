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
  padding: 3% 3% 1% 3%;
  margin-bottom: 15%;
  background-color: #fff;
  z-index: 400;
  border-radius: 3.14rem;
`

const FormGroup = styled.div`
  display: flex;
  margin: 4px 0;
  width: 300px;
`

const FormLabel = styled.label`
  padding: 2px 0;
  width: 30%;
`

const InputText = styled.input`
  width: 80%;
`

const InputTextArea = styled.textarea`
  width: 80%;
`

const InputDate = styled.input`
  width: 80%;
`

const InputColor = styled.input`
  width: 80%;
`

const InputSubmit = styled.input`
`

const ModalFooter = styled.div`
  padding: 24px 0;
  display: flex;
  justify-content: space-between;
`


const FormTodo = ({ addTodo, form, onChange, isOpen, close }) => {
  return isOpen ? (
    <>
      <Modal>
        <Form onSubmit={addTodo}>
          <FormGroup>
            <FormLabel htmlFor='title'>Title: </FormLabel>
            <InputText type="text" name="title" value={form.title} onChange={onChange} />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor='detail'>Detail: </FormLabel>
            <InputTextArea style={{ resize: 'none' }} rows="3" cols="22" name="detail" value={form.detail} onChange={onChange} />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor='due'>Due Date: </FormLabel>
            <InputDate name='due' type='date' value={form.due} onChange={onChange} min={formatDate(today)} />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor='color'>color:</FormLabel>
            <InputColor name='color' type='color' value={form.color} onChange={onChange} />
          </FormGroup>
          <ModalFooter>
            <InputSubmit type='submit' value="add todo" />
            <button onClick={close}>cancel</button>
          </ModalFooter>
        </Form>
        <Background onClick={close} />
      </Modal>
    </>
  ) : null
}

export default FormTodo
