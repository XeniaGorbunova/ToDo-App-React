/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react'
import { useTodoListMethodsContext } from '../../../contexts/TodoListContext'

function Form() {
  const [input, setInput] = useState('')

  const { addNewTodo } = useTodoListMethodsContext()

  const changeHandler = (e) => {
    setInput(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if (input.length) {
      addNewTodo(input)
      setInput('')
    }
  }
  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={submitHandler} className="d-flex flex-column align-items-center mb-3 mt-3">
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">New ToDo</label>
          <input value={input} onChange={changeHandler} type="text" className="form-control" id="exampleInputPassword1" placeholder="new task" />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Add</button>
      </form>
    </div>
  )
}

export default Form
