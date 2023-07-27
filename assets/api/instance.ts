import axios from 'axios'
import { getAccessTokenFromCookie } from '../../utils/cookies'

const token = getAccessTokenFromCookie()

const instance = axios.create({
  baseURL: 'https://inctagram-api.vercel.app/api',
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${token}`,
  },
})

export default instance
