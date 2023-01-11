import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './users/usersSlice'
import postsReducer from './posts/postsSlice'

//combine
const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer
  },
})

export default store;