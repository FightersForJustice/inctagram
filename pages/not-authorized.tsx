import { authRouts } from '@/components/common/Auth/authRoutes'
import Link from 'next/link'
import { CSSProperties } from 'react'

const NotAuthorized = () => {
  const containerStyle: CSSProperties = {
    textAlign: 'center',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    maxWidth: '400px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  }

  const headerStyle: CSSProperties = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  }

  const paragraphStyle: CSSProperties = {
    fontSize: '16px',
    lineHeight: '1.5',
  }

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Not Authorized</h1>
      <p style={paragraphStyle}>You are not authorized to access this page.</p>
      <Link href={authRouts.login}>Please log in</Link>
    </div>
  )
}

export default NotAuthorized
