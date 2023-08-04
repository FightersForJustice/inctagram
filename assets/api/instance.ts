import axios, { AxiosInstance } from 'axios'
import { parse } from 'cookie'
import { NextApiRequest } from 'next'
import { getAccessTokenFromCookie } from '@/utils/cookies'

const token = getAccessTokenFromCookie()

//to get client-side requests
export const instance = axios.create({
  baseURL: 'https://inctagram.work/api/',
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${token}`,
  },
})

//to get data inside getServerSideProps
export const createAxiosServerInstance = (req: NextApiRequest): AxiosInstance => {
  const cookies = parse(req.headers.cookie || '')
  const accessToken = cookies.accessToken || ''

  const serverInstance = axios.create({
    baseURL: 'https://inctagram.work/api/',
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  return serverInstance
}