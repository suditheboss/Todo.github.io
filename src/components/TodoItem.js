import React from 'react'

const TodoItem = ({todo, onDelete}) => {
  return (
    <>
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.description}</p>
      <button className='btn btn-danger btn btn-sm' onClick={()=>onDelete(todo)}>Delete</button>
      </div>
      <hr />
      </>
  )
}

export default TodoItem