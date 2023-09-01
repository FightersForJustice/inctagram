import { setUserProfileSSR } from '@/core/slices/userSlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ProfileType } from './profileSettingsTypes'

export const useProfileSettings = ({ userProfile }: ProfileType) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      setUserProfileSSR({
        id: userProfile.id,
        userName: userProfile.userName,
        firstName: userProfile.firstName,
        lastName: userProfile.lastName,
        city: userProfile.city,
        dateOfBirth: userProfile.dateOfBirth,
        aboutMe: userProfile.aboutMe,
        avatars: userProfile.avatars,
      })
    )
  }, [dispatch])

}
