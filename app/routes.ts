import { authRouts } from '@/components/common/Auth/authRoutes'
import { userRouts } from '@/app/routes/userRouts'
import { legalRoutes } from './routes/legalRoutes'

const routes = {
  auth: authRouts,
  users: userRouts,
  legal: legalRoutes,
}
