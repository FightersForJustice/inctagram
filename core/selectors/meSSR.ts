import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { USER_KEY } from '../reducers/constant_keys'
import { RootState } from '../reducers'

const selectMeSSR = (state: RootState) => state[USER_KEY]

const meSSRSelector = createSelector([selectMeSSR], (user) => ({
  userId: user.userData.userId,
  userName: user.userData.userName,
  email: user.userData.email,
}))

export const useMeSSRSelector = () => useSelector(meSSRSelector)
