import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { HOME_KEY, USER_KEY } from '../reducers/constant_keys'
import { RootState, getReducers } from '../reducers'
import { homeReducer } from '../slices/homeSlice'

const selectHomeSSR = (state: RootState) => state[HOME_KEY].homeData

export const homeSSRSelector = createSelector(selectHomeSSR, (homeData) => ({
  totalCount: homeData.totalCount,
  pageSize: homeData.pageSize,
  items: homeData.items,
}))

export const useHomeSSRSelector = () => useSelector(homeSSRSelector)
