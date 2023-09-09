import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { POST_CREATION_KEY } from '../reducers/constant_keys'

export type Post = {
  photo: any
}

const initialState: { postData: Post } = {
  postData: {
    photo: undefined,
  },
}

const postCreationSlice = createSlice({
  name: POST_CREATION_KEY,
  initialState,
  reducers: {
    setPhoto: (state, action: PayloadAction<Post>) => {
      state.postData = {
        ...state.postData,
        photo: action.payload.photo,
      }
    },
  },
})

export const postCreationReducer = postCreationSlice.reducer
export const { setPhoto } = postCreationSlice.actions
