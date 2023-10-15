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
    setPostUser: (state, action: PayloadAction<MyProfileDataType>) => {
      state.PostUserData.items.push(...action.payload.items)
    },
    setPostsUserLast: (state, action: PayloadAction<PostLastType>) => {
      state.PostUserData = {
        ...state.PostUserData,
        postLast: action.payload.postLast,
      }
    },
    deletePostUser: (state, action: PayloadAction<number>) => {
      const idToDelete = action.payload
      state.PostUserData.items = state.PostUserData.items.filter((item) => item.id !== idToDelete)
    },
  },
})

export const PostUserReducer = PostUserSlice.reducer
export const { setPostUser, setPostsUserLast, deletePostUser } = PostUserSlice.actions
