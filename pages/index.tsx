import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { NextPageWithLayout } from './_app'
import { getLayout } from '@/components/Layout/Layout'
import Login from './auth/login'
import { useRouter } from 'next/router'
import { useMeQuery } from '@/assets/api/auth/authQueryApi'
import { useEffect } from 'react'
import { Loading } from '@/components/common/Loaders/Loading'
import { User, setUser } from '@/assets/api/auth/userSlice'
import { useAppDispatch } from '@/hooks'

const Home: NextPageWithLayout = () => {
  const router = useRouter()
  const { isError, data } = useMeQuery()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (data) {
      dispatch(setUser(data as User))
      router.push('/home')
    }
  }, [data])

  if (isError) {
    return (
      <PageWrapper>
        <Login />
      </PageWrapper>
    )
  }

  return (
    <PageWrapper>
      <Loading />
    </PageWrapper>
  )
}

Home.getLayout = getLayout

export default Home
