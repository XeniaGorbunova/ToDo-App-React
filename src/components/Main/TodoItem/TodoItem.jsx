/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import { useEffect, useRef, useState } from 'react'
import { useTodoListMethodsContext } from '../../../contexts/TodoListContext'
import usePrevious from '../../../contexts/usePrevious'
import Modal from '../../Modal/Modal'
import DeleteTodoModal from './DeleteTodoModal'
import styles from './todoItem.module.css'

function TodoItem({
  title, id, index, completed,
}) {
  const { changeStatusTodo, editTodo } = useTodoListMethodsContext()
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isEditing, setEditing] = useState(false)
  const [newTitle, setNewTitle] = useState('')
  const editFieldRef = useRef(null)
  const editButtonRef = useRef(null)
  const wasEditing = usePrevious(isEditing)

  const openDeleteModalHandler = () => {
    setIsDeleteModalOpen(true)
  }

  useEffect(() => {
    if (!wasEditing && isEditing) {
      editFieldRef.current.focus()
    }
    if (wasEditing && !isEditing) {
      editButtonRef.current.focus()
    }
  }, [wasEditing, isEditing])

  const completeHandler = () => {
    changeStatusTodo(id)
  }

  function handleChange(e) {
    setNewTitle(e.target.value)
  }

  const editHandler = (e) => {
    e.preventDefault()
    editTodo(id, newTitle)
    setNewTitle('')
    setEditing(false)
  }

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="d-flex justify-content-start align-items-center">
        <span>
          {index + 1}
          .
          {' '}
        </span>
        <p className={`mb-0 ${completed ? styles.done : ''} ${isEditing ? 'd-none' : 'visible'}`}>
          {title}
        </p>
        <form className={`d-flex justify-content-between align-items-center ${isEditing ? 'visible' : 'd-none'}`} onSubmit={editHandler}>
          <div>
            <label htmlFor={id}>
              New name for
              {' '}
              {title}
            </label>
            <input
              id={id}
              className="mx-2"
              type="text"
              value={newTitle}
              onChange={handleChange}
              ref={editFieldRef}
            />
          </div>
          <div>
            <button
              type="button"
              className="btn btn-dark mx-2 mb-1"
              onClick={() => setEditing(false)}
            >
              Cancel
              <span className="visually-hidden">
                renaming
                {' '}
                {title}
              </span>
            </button>
            <button type="submit" className="btn btn-success mx-2">
              Save
              <span className="visually-hidden">
                new name for
                {' '}
                {title}
              </span>
            </button>
          </div>
        </form>
      </div>
      <DeleteTodoModal
        isOpen={isDeleteModalOpen}
        setIsDeleteModalOpen={setIsDeleteModalOpen}
        title={title}
        id={id}
      />
      <div>
        <button
          onClick={completeHandler}
          type="button"
          className={`btn mb-1 btn-${completed ? 'primary' : 'success'} mx-2 ${isEditing ? 'd-none' : 'visible'}`}
        >
          {completed ? 'Undone' : 'Done'}
        </button>
        <button onClick={openDeleteModalHandler} type="button" className="btn btn-danger mx-2 mb-1">
          Delete
        </button>
        <button
          onClick={() => setEditing(true)}
          ref={editButtonRef}
          type="button"
          className={`btn mx-2 mb-1 btn-primary ${isEditing ? 'd-none' : 'visible'}`}
        >
          Edit
        </button>
      </div>
    </li>
  )
}

export default TodoItem
