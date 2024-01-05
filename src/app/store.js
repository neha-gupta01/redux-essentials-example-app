import { configureStore } from '@reduxjs/toolkit'
import toDoReducer from '../features/toDos/toDoSlice'
export default configureStore({
  reducer: {
    toDos: toDoReducer,
  },
})
