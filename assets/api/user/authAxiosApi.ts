import { authRouts } from '@/components/common/Auth/authRoutes'
import { instance } from '../instance'
import { AxiosResponse } from 'axios'
import { UserData, ServerErrorResponse } from '../auth/authTypes'

export const authAxiosApi = {
  me: async () => {
    try {
      console.log('Sending "me" query')
      const response = await fetch(authRouts.me)
      if (!response.ok) {
        throw new Error('Failed to fetch "me" data') // Throw an error for non-successful response
      }
      const data = await response.json()
      return data
    } catch (error) {
      console.error('Error fetching "me" data:', error)
      throw error
    }
  },
}
