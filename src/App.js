import { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {

  const [ todos, setTodos ] = useState([]);

  const addNewTodo = (title) => {
    const newTodo = {
      id: crypto.randomUUID(),
      completed: false,
      title
    }

    setTodos((prev) => [newTodo, ...prev]);
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  const changeStatusTodo = (id) => {
    setTodos((prev) => prev.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo;
    }));
  }

  const clearAllTodos = () => {
    setTodos([]);
  }

  console.log(todos);

  return (
    <div className="container">
      <Header addNewTodo={addNewTodo} />
      <hr />
      <Main todos={todos} deleteTodo={deleteTodo} changeStatusTodo={changeStatusTodo} />
      <hr />
      <Footer clearAllTodos={clearAllTodos}/>
    </div>
  );
}

export default App;
