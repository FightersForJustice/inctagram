import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface User {
  userId: number
  userName: string
  email: string
}

const initialState = {
  user: null as User | null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    },
  },
})

export const { setUser } = authSlice.actions

export default authSlice.reducer