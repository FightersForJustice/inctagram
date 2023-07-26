import { authRouts } from '@/components/common/Auth/authRoutes'
import { instance } from '../instance'
import { AxiosResponse } from 'axios'
import { UserData, ServerErrorResponse } from '../auth/authTypes'

export const authAxiosApi = {
  me() {
    return instance.get<AxiosResponse<UserData | ServerErrorResponse>>(authRouts.me).then(({ data }) => data)
  },
}
