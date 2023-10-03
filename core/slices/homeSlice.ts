import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserData } from '../../assets/api/auth/authTypes'
import { UpdateUserProfile, UpdateUserProfilePhoto, userAvatar, UserProfile } from '../../assets/api/user/Home.types'
import { HOME_KEY, USER_KEY } from '@/core/reducers/constant_keys'

interface Image {
  url: string
  width: number
  height: number
  fileSize: number
  uploadId: string
}

interface Post {
  id: number
  description: string
  location: null | string
  images: Image[]
  createdAt: string
  updatedAt: string
}

type Home = {
  totalCount: number
  pageSize: number
  items: Post[]
}

const initialState: { homeData: Home } = {
  homeData: {
    totalCount: 0,
    pageSize: 0,
    items: [],
  },
}

const homeSlice = createSlice({
  name: HOME_KEY,
  initialState,
  reducers: {
    setHomePostSSR: (state, action: PayloadAction<UserData>) => {
      state.homeData = {
        ...state.userData,
        userId: action.payload.userId,
        userName: action.payload.userName,
        email: action.payload.email,
      }
    },
  },
})

export const userReducer = homeSlice.reducer
export const { setHomePostSSR } = homeSlice.actions
