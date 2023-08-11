import { authRouts } from '@/components/common/Auth/authRoutes'
import { AxiosResponse } from 'axios'
import { UserData, ServerErrorResponse, LoginParamsData, ServerLoginResponse } from './authTypes'
import { createAxiosServerInstance, instance } from '../instance'
import { NextApiRequest } from 'next'

export const meServer = async (req: NextApiRequest) => {
  const axiosInstance = createAxiosServerInstance(req)
  const response = await axiosInstance.get(authRouts.me)
  return response.data
}

export const authAxiosApi = {
  me() {
    return instance.get<AxiosResponse<UserData | ServerErrorResponse>>(authRouts.me).then(({ data }) => data)
  },
  login(data: LoginParamsData) {
    return instance.post<AxiosResponse<ServerLoginResponse | ServerErrorResponse>>(authRouts.login, data).then(({ data }) => data)
  },
  meServer,
}
