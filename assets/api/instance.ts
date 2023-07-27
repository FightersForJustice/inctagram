import { getAccessTokenFromCookie } from '@/utils/cookies'
import axios from 'axios'

const token = getAccessTokenFromCookie()

const instance = axios.create({
  baseURL: 'https://inctagram-api.vercel.app/api',
  withCredentials: true,
})

instance.interceptors.request.use((config) => {
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }

  return config
})

export default instance
