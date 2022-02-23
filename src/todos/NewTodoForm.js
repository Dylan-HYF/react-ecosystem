import React, { useState } from 'react';
import { connect } from 'react-redux'
import { createTodo } from './actions'
import './NewTodoForm.css'
// {todos,...} is from mapStateToProps
const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputVal, setInputVal] = useState('')
  return (
    <div className="new-todo-form">
      <input type="text" className="new-todo-input" placeholder="new todo" value={inputVal} onChange={e => setInputVal(e.target.value)} />
      <button className="new-todo-button"
        onClick={() => {
          const isDuplicateText = todos.some(todo => todo.text === inputVal)
          if (!isDuplicateText) {
            onCreatePressed(inputVal)
            setInputVal('')
          }

        }}>Create</button>
    </div>
  )
};

const mapStateToProps = state => ({
  todos: state.todos
})
const mapDispatchToProps = dispatch => ({
  onCreatePressed: text => dispatch(createTodo(text))
})
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
