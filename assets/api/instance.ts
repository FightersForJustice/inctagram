import axios from 'axios'

const accessToken = localStorage.getItem('accessToken')

export const instance = axios.create({
  baseURL: 'https://inctagram-api.vercel.app/api',
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
})
