import React from 'react';
import './TodoListItem.css'

const TodolistItem = ({ todo, onRemovePressed, onComplete }) => {
  return (
    <div className="todo-item-container">
      <h3>{todo.text}</h3>
      <div className="buttons-container">
        {todo.isCompleted ? null :
          <button className="completed-button"
            onClick={() => {
              onComplete(todo.text)
            }}
          >Complete</button>}
        <button className="remove-button"
          onClick={() => {
            onRemovePressed(todo.text)
          }}
        >Remove</button>
      </div>
    </div>
  )
}

export default TodolistItem;
