const Footer = ({ clearAllTodos}) => {
  return (
    <footer>
      <button onClick={clearAllTodos} type="button" className="btn btn-danger">Delete all</button>
    </footer>
  );
};

export default Footer;