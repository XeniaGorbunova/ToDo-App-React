import Form from './Form/Form';

const Header = ({ addNewTodo }) => {
  return (
    <>
      <h1>My ToDo List</h1>
      <Form addNewTodo={addNewTodo} />
    </>
  );
};

export default Header;