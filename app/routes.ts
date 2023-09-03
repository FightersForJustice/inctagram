import { authRouts } from '@/app/routes/authRoutes'
import { userRouts } from '@/app/routes/userRouts'
import { legalRoutes } from './routes/legalRoutes'

const routes = {
  auth: authRouts,
  users: userRouts,
  legal: legalRoutes,
}
