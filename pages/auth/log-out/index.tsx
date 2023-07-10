import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { getLayout } from '@/components/Layout/Layout'


const LogOut = () => {
    const router = useRouter()
    useEffect(() => {
        localStorage.removeItem('accessToken');
        router.push('/')
      }, [])
}

LogOut.getLayout = getLayout
export default LogOut
