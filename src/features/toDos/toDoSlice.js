import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: 1, toDo: 'first' },
  { id: 2, toDo: 'second' },
]

const toDoSlice = createSlice({
  name: 'toDos',
  initialState,
  reducers: {
    toDoAdded(state, action) {
      state.push(action.payload)
    },
    toDoDeleted(state, action) {
      return state.filter((toDo) => toDo.id !== action.payload)
    },
  },
})
export const { toDoAdded, toDoDeleted } = toDoSlice.actions

export default toDoSlice.reducer
