import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todos, deleteTodo, changeStatusTodo }) => {
  if (!todos.length) return <p>List is empty...</p>
  return (
    <ul className="list-group">
      {todos.map((todo, index) => 
        <TodoItem 
          key={todo.id} 
          id={todo.id} 
          title={todo.title} 
          completed={todo.completed} 
          index={index} 
          deleteTodo={deleteTodo}
          changeStatusTodo={changeStatusTodo}
          
        />)}
    </ul>
  );
};

export default TodoList;