import { authRouts } from '@/components/common/Auth/authRoutes'
import { AxiosResponse } from 'axios'
import { UserData, ServerErrorResponse, LoginParamsData, ServerLoginResponse } from '../auth/authTypes'
import { instance } from '../instance'

export const authAxiosApi = {
  me() {
    return instance.get<AxiosResponse<UserData | ServerErrorResponse>>(authRouts.me).then(({ data }) => data)
  },
  login(data: LoginParamsData) {
    return instance.post<AxiosResponse<ServerLoginResponse | ServerErrorResponse>>(authRouts.login, data).then(({ data }) => data)
  },
}
