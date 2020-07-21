import { useState } from 'react'

const useForm = (init) => {
  const [form, setForm] = useState(init)

  const onChange = (e) => {
    let { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  return [form, setForm, onChange]
}

export default useForm