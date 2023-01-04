import { useTodoListContext } from '../../../contexts/TodoListContext'
import TodoItem from '../TodoItem/TodoItem'

function TodoList() {
  const todos = useTodoListContext()

  if (!todos.length) return <p>List is empty...</p>

  return (
    <ul className="list-group">
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          index={index}

        />
      ))}
    </ul>
  )
}

export default TodoList
