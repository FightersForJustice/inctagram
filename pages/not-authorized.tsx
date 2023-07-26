import { authRouts } from '@/components/common/Auth/authRoutes'
import Link from 'next/link'

const NotAuthorized = () => {
  return (
    <div>
      <h1>Not Authorized</h1>
      <p>You are not authorized to access this page.</p>
      <Link href={authRouts.login}>Please log in</Link>
    </div>
  )
}

export default NotAuthorized
