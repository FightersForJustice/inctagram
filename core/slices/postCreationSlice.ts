import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { POST_CREATION_KEY } from '../reducers/constant_keys'

export type Post = {
  photos: Array<{ photo: string }>
}

export type Photo = {
  photo: string
}

const initialState: { postData: Post } = {
  postData: {
    photos: [],
  },
}

const postCreationSlice = createSlice({
  name: POST_CREATION_KEY,
  initialState,
  reducers: {
    setPhoto: (state, action: PayloadAction<Photo>) => {
      state.postData.photos.push({ photo: action.payload.photo })
    },
    clearPhotos: (state) => {
      state.postData.photos = []
    },
  },
})

export const postCreationReducer = postCreationSlice.reducer
export const { setPhoto, clearPhotos } = postCreationSlice.actions
