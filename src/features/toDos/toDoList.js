import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toDoDeleted } from './toDoSlice'

export const ToDoList = () => {
  const toDos = useSelector((state) => state.toDos)
  const dispatch = useDispatch()

  const onDelete = (id) => {
    dispatch(toDoDeleted(id))
  }

  const renderedToDos = toDos.map((toDo) => (
    <article className="post-excerpt" key={toDo.id}>
      <ul>
        <li>{toDo.toDo}</li>
        <button onClick={() => onDelete(toDo.id)}>Delete</button>
      </ul>
    </article>
  ))

  return (
    <section className="toDo-list">
      <h2>List</h2>
      {renderedToDos}
    </section>
  )
}
