import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { POST_USER_KEY } from '@/core/reducers/constant_keys'
import { MyProfileDataType, PostLastType } from '@/assets/api/myProfile/MyProfile.Types'

const initialState: { PostUserData: MyProfileDataType & PostLastType } = {
  PostUserData: {
    postLast: 0,
    totalCount: 0,
    pageSize: 0,
    items: [],
  },
}

const PostUserSlice = createSlice({
  name: POST_USER_KEY,
  initialState,
  reducers: {
    setPost: (state, action: PayloadAction<MyProfileDataType>) => {
      state.PostUserData = {
        ...state.PostUserData,
        items: action.payload.items,
      }
    },
    setPostLast: (state, action: PayloadAction<PostLastType>) => {
      state.PostUserData = {
        ...state.PostUserData,
        postLast: action.payload.postLast,
      }
    },
  },
})

export const PostUserReducer = PostUserSlice.reducer
export const { setPost, setPostLast } = PostUserSlice.actions
