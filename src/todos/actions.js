export const CREATE_TODO = 'CREATE_TODO'
export const createTodo = text => ({
  type: CREATE_TODO,
  payload: { text }
})

export const REMOVE_TODO = 'REMOVE_TODO'
export const removeTodo = text => ({
  type: REMOVE_TODO,
  // is equal to text: text
  payload: { text }
})

export const COMPLETE = 'COMPLETE'
export const complete = text => ({
  type: COMPLETE,
  payload: { text }
})