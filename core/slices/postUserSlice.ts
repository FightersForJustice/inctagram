import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { POST_USER_KEY, USER_KEY } from '@/core/reducers/constant_keys'

const initialState: { PostUserData: MyProfileDataType } = {
  PostUserData: {
    totalCount: 0,
    pageSize: 0,
    items: [],
  },
}

const PostUserSlice = createSlice({
  name: POST_USER_KEY,
  initialState,
  reducers: {
    setMeSSR: (state, action: PayloadAction<MyProfileDataType>) => {
      state.PostUserData = {
        ...state.PostUserData,
        totalCount: action.payload.totalCount,
        pageSize: action.payload.pageSize,
        items: action.payload.items,
      }
    },
  },
})

export const PostUserReducer = PostUserSlice.reducer
export const { setMeSSR } = PostUserSlice.actions
