import axios, { AxiosInstance } from 'axios'
import { parse } from 'cookie'
import { NextApiRequest } from 'next'
import { getAccessTokenFromCookie } from '@/utils/cookies'
import { baseUrl } from './common.api'

const token = getAccessTokenFromCookie()

//to get client-side requests
export const instance = axios.create({
  baseURL: baseUrl,
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
    baseURL: baseUrl,
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  return serverInstance
}
