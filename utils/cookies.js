import Cookies from 'js-cookie'

const ACCESS_TOKEN_COOKIE_NAME = 'accessToken'

export const setAccessTokenCookie = (accessToken) => {
  Cookies.set(ACCESS_TOKEN_COOKIE_NAME, accessToken, { expires: 7, secure: true, sameSite: 'lax' })
}

export const getAccessTokenFromCookie = () => {
  return Cookies.get(ACCESS_TOKEN_COOKIE_NAME)
}

export const removeAccessTokenCookie = () => {
  Cookies.remove(ACCESS_TOKEN_COOKIE_NAME)
}
