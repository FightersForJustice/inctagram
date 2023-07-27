import { authRouts } from '@/components/common/Auth/authRoutes'
import { AxiosResponse } from 'axios'
import { UserData, ServerErrorResponse, LoginParamsData, ServerLoginResponse } from '../auth/authTypes'
import axiosInstance from '../instance'

export const authAxiosApi = {
  me() {
    return axiosInstance.get<AxiosResponse<UserData | ServerErrorResponse>>(authRouts.me).then(({ data }) => data)
  },
  login(data: LoginParamsData) {
    return axiosInstance
      .post<AxiosResponse<ServerLoginResponse | ServerErrorResponse>>(authRouts.login, data)
      .then(({ data }) => {
        const loginResponse = data as unknown as ServerLoginResponse
        const accessToken = loginResponse.accessToken

        return data
      })
  },
}
