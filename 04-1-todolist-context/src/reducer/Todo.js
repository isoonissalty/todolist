export const initState = {
  todos: []
}

export function todoReducer(state = initState, action) {
  switch (action.type) {
    case 'create-todo':
      return {
        todos: [...state.todos, action.payload]
      }
    case 'update-todos':
      return {
        todos: state.todos.map((val, idx) => idx === Number(action.id) ? action.payload : val)
      }
    case 'check-todo':
      return {
        todos: state.todos.filter((val, idx) => idx !== Number(action.id))
      }
    default:
      return state
  }
}