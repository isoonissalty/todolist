import { useState } from 'react'

const useModal = (init = false) => {
  const [isOpen, setOpen] = useState(init)

  const openModal = () => {
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }

  return [isOpen, openModal, closeModal]
}

export default useModal