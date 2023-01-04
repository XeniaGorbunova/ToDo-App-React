/* eslint-disable no-shadow */
/* eslint-disable react/jsx-no-constructed-context-values */
import {
  createContext, useContext, useMemo,
} from 'react'
import useTodos from './useTodos'

export const TodoListContext = createContext()
export const TodoListMethodsContext = createContext()

function TodoListContextProvider({ children }) {
  const {
    todos, addNewTodo, changeStatusTodo, deleteTodo, clearAllTodos, editTodo,
  } = useTodos()

  const todoListMethods = useMemo(() => ({
    addNewTodo, changeStatusTodo, deleteTodo, clearAllTodos, editTodo,
  }), [])

  return (
    <TodoListContext.Provider value={todos}>
      <TodoListMethodsContext.Provider value={todoListMethods}>
        {children}
      </TodoListMethodsContext.Provider>
    </TodoListContext.Provider>
  )
}

export default TodoListContextProvider

export const useTodoListContext = () => useContext(TodoListContext)
export const useTodoListMethodsContext = () => useContext(TodoListMethodsContext)
