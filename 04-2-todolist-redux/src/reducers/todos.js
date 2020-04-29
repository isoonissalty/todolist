const todos = (state = [{title: 'test', detail: 'test'}], action) => {
  switch (action.type) {
    case 'create-todo':
      return [...state, action.payload]
    case 'update-todo':
      return state.map((val, idx) => idx === Number(action.id) ? action.payload : val)
    case 'check-todo':
      return state.filter((val, idx) => idx !== Number(action.id))
    default:
      return state
  }
}

export default todos