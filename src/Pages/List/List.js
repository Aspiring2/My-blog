import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();
  const LOCAL_STORAGE_KEY = "todoApp.todos";

  //Save todos value
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) setTodos(storageTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  //Change checkbox
  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }
  //Assigns a unique id
  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }

  function handleClearTodos() {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }

  //Return interface
  return (
    <Container>
      <div style={{marginTop: '10px', boxShadow: '0 0 5px rgba(141, 141, 141, 0.3)', padding: '10px' }}>
      <TodoList todos={todos} toggleTodo={toggleTodo}></TodoList>
      <input ref={todoNameRef} type="text"></input>
      <button onClick={handleAddTodo} style={{background: 'rgb(139, 255, 139)'}}>Add Todo</button>
      <button onClick={handleClearTodos} style={{background: 'rgb(255, 139, 139)'}}>Clear Complete</button>
      <div>{todos.filter((todo) => !todo.complete).length} left to do</div>
      </div>
    </Container>
  );
}

export default App;
