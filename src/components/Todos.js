import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
    let myStyle = {
        minHeight: "50vh"
    }
    return (
        <div className='text-center my-3' style={myStyle}>
            <h1>Todo List</h1>
            {props.todos.length === 0 ? "No Todos to display" : props.todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            })}

        </div>
    )
}

export default Todos