import { setAccessTokenCookie, removeAccessTokenCookie, getAccessTokenFromCookie } from '../utils/cookies'
import { instance } from '../assets/api/instance'

export const login = async (email, password) => {
  try {
    // Perform your login API request here
    const response = await instance.post('/auth/login', { email, password })
    const { accessToken } = response.data

    // Set the access token in the cookie
    setAccessTokenCookie(accessToken)

    return true // Login successful
  } catch (error) {
    console.error(error)
    return false // Login failed
  }
}

export const logout = () => {
  removeAccessTokenCookie()
}

export const isAuth = () => {
  // Check if the access token exists in the cookie
  const accessToken = getAccessTokenFromCookie()
  return !!accessToken
}
