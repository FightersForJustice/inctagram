import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { POST_CREATION_KEY } from '../reducers/constant_keys'

export type Post = {
  photos: Array<{ photo: string }>
  description: string
}

export type Photo = {
  photo: string
}

const initialState: { postData: Post } = {
  postData: {
    photos: [],
    description: '',
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
    setDescription: (state, action: PayloadAction<string>) => {
      state.postData.description = action.payload
    },
  },
})

export const postCreationReducer = postCreationSlice.reducer
export const { setPhoto, clearPhotos, setDescription } = postCreationSlice.actions
