import { useDispatch } from 'react-redux'
import { HomeType } from './homeTypes'

import { useEffect } from 'react'
import { setMeSSR } from '@/core/slices/userSlice'
import { useRouter } from 'next/router'
import { userRouts } from '@/app/routes/userRouts'

export const useHomePage = ({ isAuth }: HomeType) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setMeSSR({ userId: isAuth.userId, userName: isAuth.userName, email: isAuth.email }))
  }, [dispatch])

  const router = useRouter()

  const handleClick = () => {
    router.push(userRouts.profileSettings)
  }

  return { handleClick }
}
