import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { toDoAdded } from './toDoSlice'
export const AddToDoForm = () => {
  const [toDo, setToDo] = useState('')
  const dispatch = useDispatch()

  const onToDoChanged = (e) => setToDo(e.target.value)

  const onToDoClicked = () => {
    if (toDo) {
      dispatch(
        toDoAdded({
          id: nanoid(),
          toDo,
        })
      )
      setToDo('')
    }
  }

  return (
    <section>
      <h2>To Do</h2>
      <form>
        <label htmlFor="toDo">Add todo:</label>
        <input
          type="text"
          id="toDo"
          name="toDo"
          value={toDo}
          onChange={onToDoChanged}
        />
        <button type="button" onClick={onToDoClicked}>
          Add todo
        </button>
      </form>
    </section>
  )
}
