import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HOME_KEY } from '@/core/reducers/constant_keys'
import { HomeType } from './Home.Types'

const initialState: { homeData: HomeType } = {
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
    setHomePostSSR: (state, action: PayloadAction<HomeType>) => {
      state.homeData = {
        ...state.homeData,
        totalCount: action.payload.totalCount,
        pageSize: action.payload.pageSize,
        items: action.payload.items,
      }
    },
  },
})

export const homeReducer = homeSlice.reducer
export const { setHomePostSSR } = homeSlice.actions
