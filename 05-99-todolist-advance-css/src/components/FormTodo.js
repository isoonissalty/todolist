import React from 'react'
import { formatDate } from '../utils'

const today = new Date()

const FormTodo = ({ addTodo, form, onChange}) => {
  return (
    <form onSubmit={addTodo}>
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
    </form>
  )
}

export default FormTodo
