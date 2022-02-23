import React from 'react'
import { connect } from 'react-redux'
import { removeTodo, complete } from './actions'
import './TodoList.css'
import TodoListItem from './TodoListItem'
import NewTodoForm from './NewTodoForm'
const TodoList = ({ todos = [], onRemovePressed, onComplete }) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed} onComplete={onComplete} />)}
  </div>
)
const mapStateToProps = state => ({
  todos: state.todos
})
const mapDispatchToProps = dispatch => ({
  onRemovePressed: text => dispatch(removeTodo(text)),
  onComplete: text => dispatch(complete(text))
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)