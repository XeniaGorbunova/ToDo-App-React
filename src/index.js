import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import TodoListContextProvider from './contexts/TodoListContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <TodoListContextProvider>
      <App />
    </TodoListContextProvider>
  </React.StrictMode>,
)
