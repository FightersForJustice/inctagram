import axios from 'axios'

const accessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI1NCwiaWF0IjoxNjkwMzYxMzIxLCJleHAiOjE2OTAzNjQ5MjF9.2fJg9w5nAw7MfQlqAA58OMZvtagicO-WwEnS1cJvLfk'

export const instance = axios.create({
  baseURL: 'https://inctagram-api.vercel.app/api',
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
})
