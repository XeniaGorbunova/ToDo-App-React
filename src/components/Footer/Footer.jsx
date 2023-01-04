import { memo } from 'react'
import { useTodoListMethodsContext } from '../../contexts/TodoListContext'

const Footer = memo(() => {
  const { clearAllTodos } = useTodoListMethodsContext()
  return (
    <footer className="d-flex justify-content-center">
      <button onClick={clearAllTodos} type="button" className="btn btn-dark">Delete all</button>
    </footer>
  )
})

export default Footer
