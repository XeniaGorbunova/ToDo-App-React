import { useCallback, useEffect, useState } from 'react'

const useTodos = () => {
  const [todos, setTodos] = useState(() => {
    const dataFromLS = localStorage.getItem('TODO_LIST_KEY')
    const preparedData = dataFromLS ? JSON.parse(dataFromLS) : []
    return preparedData
  })

  useEffect(() => {
    localStorage.setItem('TODO_LIST_KEY', JSON.stringify(todos))
  }, [todos])

  const addNewTodo = useCallback((title) => {
    const newTodo = {
      id: crypto.randomUUID(),
      completed: false,
      title,
    }

    setTodos((prev) => [newTodo, ...prev])
  }, [setTodos])

  const deleteTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }, [setTodos])

  const changeStatusTodo = useCallback((id) => {
    setTodos((prev) => prev.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        }
      }
      return todo
    }))
  }, [setTodos])

  const editTodo = useCallback((id, newTitle) => {
    setTodos((prev) => prev.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title: newTitle,
        }
      }
      return todo
    }))
  }, [setTodos])

  const clearAllTodos = useCallback(() => {
    setTodos([])
  }, [setTodos])

  return {
    todos,
    addNewTodo,
    changeStatusTodo,
    deleteTodo,
    clearAllTodos,
    editTodo,
  }
}

export default useTodos
