import { AnyAction, createSlice, Reducer, Slice } from '@reduxjs/toolkit'

const initialState = {
  isAuth: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },
})

export const {  } = authSlice.actions

export default authSlice.reducer
