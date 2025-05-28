import { configureStore } from '@reduxjs/toolkit'
// import authSlice from '../features/auth/authSlice'
// import btnSearchReducer from '../features/search/btnSearchSlice'
// import searchJobListReducer from '../features/search/searchJobList'

export const store = configureStore({
    reducer: {
        // auth: authSlice,
        // btnSearch: btnSearchReducer,
        // searchJobList: searchJobListReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store