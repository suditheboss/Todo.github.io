import React, { useState, useEffect } from 'react'
import AddTodo from './components/AddTodo'
import Footer from './components/Footer'
import Header from './components/Header'
import Todos from './components/Todos'


const App = () => {
  let initTodo;
  if (localStorage.getItem("todos") === null)
  {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(
    
      initTodo
    
  )

  function addTodo(title, desc) {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }

    else {
       sno = todos[todos.length - 1].sno + 1
    }
    const myTodo = {
      sno: sno,
      title: title,
      description: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo)
  }

  useEffect(() => {
   
  
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  

  function onDelete(todo) {
    setTodos(todos.filter((tt) => {
      return tt !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  return (
    <div>
      <Header title="Todo Game" />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </div>
  )
}

export default App