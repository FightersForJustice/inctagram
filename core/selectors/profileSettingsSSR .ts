import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { USER_KEY } from '../reducers/constant_keys'
import { RootState } from '../reducers'

const selectProfileSettingsSSR = (state: RootState) => state[USER_KEY]

const profileSettingsSSRSelector = createSelector([selectProfileSettingsSSR], (user) => ({
  userId: user.userData.userId,
  userName: user.userData.userName,
  firstName: user.userData.firstName,
  lastName: user.userData.lastName,
  city: user.userData.city,
  dateOfBirth: user.userData.dateOfBirth,
  aboutMe: user.userData.aboutMe,
  avatars: user.userData.avatars,
}))

export const useProfileSettingsSSRSelector = () => useSelector(profileSettingsSSRSelector)
