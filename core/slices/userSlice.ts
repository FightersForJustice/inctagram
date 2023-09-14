import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserData } from '../../assets/api/auth/authTypes'
import { UpdateUserProfile, UpdateUserProfilePhoto, userAvatar, UserProfile } from '../../assets/api/user/userTypes'
import { USER_KEY } from '@/core/reducers/constant_keys'

export type User = UserData & {
  firstName: string
  lastName: string
  city: string
  dateOfBirth: string
  aboutMe: string
  avatars: userAvatar[]
}

const initialState: { userData: User } = {
  userData: {
    userId: 0,
    userName: '',
    email: '',
    firstName: '',
    lastName: '',
    city: '',
    dateOfBirth: '',
    aboutMe: '',
    avatars: [],
  },
}

const userSlice = createSlice({
  name: USER_KEY,
  initialState,
  reducers: {
    setMeSSR: (state, action: PayloadAction<UserData>) => {
      state.userData = {
        ...state.userData,
        userId: action.payload.userId,
        userName: action.payload.userName,
        email: action.payload.email,
      }
    },

    setUserProfileSSR: (state, action: PayloadAction<UserProfile>) => {
      state.userData = {
        ...state.userData,
        userId: action.payload.id,
        userName: action.payload.userName,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        city: action.payload.city,
        dateOfBirth: action.payload.dateOfBirth,
        aboutMe: action.payload.aboutMe,
        avatars: action.payload.avatars,
      }
    },

    setUpdateUserProfilePhoto: (state, action: PayloadAction<UpdateUserProfilePhoto>) => {
      state.userData = {
        ...state.userData,
        avatars: action.payload.avatars,
      }
    },

    setUpdatedUser: (state, action: PayloadAction<UpdateUserProfile>) => {
      state.userData = {
        ...state.userData,
        ...action.payload,
      }
    },
  },
})

export const userReducer = userSlice.reducer
export const { setMeSSR, setUserProfileSSR, setUpdatedUser, setUpdateUserProfilePhoto } = userSlice.actions
