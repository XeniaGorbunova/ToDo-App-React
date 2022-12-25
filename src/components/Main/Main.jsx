import TodoList from "./TodoList/TodoList";

const Main = ({ todos, deleteTodo, changeStatusTodo }) => {
  return (
    <main>
      <TodoList todos={todos} deleteTodo={deleteTodo} changeStatusTodo={changeStatusTodo} />
    </main>
  )
}
export default Main;