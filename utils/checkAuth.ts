import { setAccessTokenCookie, getAccessTokenFromCookie } from './cookies'
import { createAxiosServerInstance } from '../assets/api/instance'
import { NextApiRequest } from 'next'
import { authRouts } from '@/components/common/Auth/authRoutes'

export const login = async (email: string, password: string, req: NextApiRequest) => {
  try {
    const axiosInstance = createAxiosServerInstance(req)
    const response = await axiosInstance.post<{ accessToken: string }>(authRouts.login, {
      email,
      password,
    })
    const { accessToken } = response.data

    setAccessTokenCookie(accessToken)

    return true
  } catch (error) {
    console.error(error)
    return false
  }
}
export const checkAuth = () => {
  const accessToken = getAccessTokenFromCookie()
  return !!accessToken
}
