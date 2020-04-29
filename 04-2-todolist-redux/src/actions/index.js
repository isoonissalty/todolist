export const createTodo = (title, detail) => ({
  type: 'create-todo',
  payload: {
    title,
    detail 
  }
})

export const updateTodo = (title, detail, id) => ({
  type: 'update-todo',
  payload: {
    title,
    detail,
  },
  id
})

export const checkTodo = (id) => ({
  type: 'check-todo',
  id
})