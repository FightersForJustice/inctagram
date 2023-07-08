import  { useEffect } from 'react'
import { useRouter } from 'next/router'
import { getLayout } from '@/components/Layout/Layout'
import { useLogoutMutation } from '@/assets/api/auth/authApi'



const LogOut = () => {


    const [logout] = useLogoutMutation();
    const router = useRouter()
    useEffect(() => {
      const performLogout = async () => {
        try {
          await logout({})
          .unwrap()
          .then(() => {
            router.push('/auth/login')
            localStorage.removeItem('accessToken');
          })
          
        } catch (error) {
          console.error('Error occurred while logging out:', error);
        }
      };
  
      performLogout();
    }, [ logout]);


}

LogOut.getLayout = getLayout
export default LogOut