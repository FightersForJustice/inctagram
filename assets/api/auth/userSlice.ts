import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserData } from './authTypes'
import { userAvatar } from '../user/userTypes'

export type User = UserData & {
  id: number //refactor: duplucate from userData
  userName: string
  firstName: string
  lastName: string
  city: string
  dateOfBirth: string
  aboutMe: string
  avatars: userAvatar[]
}

const initialState = {
  userData: ({} as User) || null,
}

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.userData = action.payload
    },
  },
})

export const userReducer = slice.reducer
export const { setUser } = slice.actions //refactor userActions
