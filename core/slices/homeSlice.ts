import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HOME_KEY } from '@/core/reducers/constant_keys'
import { HomeType, HomeTypeItems, SmallestIdType } from './Home.Types'

const initialState: { homeData: HomeType } = {
  homeData: {
    totalCount: 0,
    pageSize: 0,
    items: [],
    id: 0,
  },
}

const homeSlice = createSlice({
  name: HOME_KEY,
  initialState,
  reducers: {
    setHomePostSSR: (state, action: PayloadAction<HomeTypeItems>) => {
      state.homeData = {
        ...state.homeData,
        items: [...state.homeData.items, ...action.payload.items],
      }
    },
    setSmallestId: (state, action: PayloadAction<SmallestIdType>) => {
      state.homeData = {
        ...state.homeData,
        id: action.payload.id,
      }
    },
  },
})

export const homeReducer = homeSlice.reducer
export const { setHomePostSSR, setSmallestId } = homeSlice.actions
