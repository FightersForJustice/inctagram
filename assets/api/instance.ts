import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://inctagram-api.vercel.app/api',
  withCredentials: true,
})
