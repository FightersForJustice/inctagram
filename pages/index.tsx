import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { NextPageWithLayout } from './_app'
import { getLayout } from '@/components/Layout/Layout'
import Login from './auth/login'
import { useRouter } from 'next/router'
import { useMeQuery } from '@/assets/api/Auth/AuthApi'
import { useEffect } from 'react'
import { Loading } from '@/components/common/Loaders/Loading'
import { useDispatch } from 'react-redux'
import { User, setUser } from '@/assets/api/Auth/AuthSlice'

const Home: NextPageWithLayout = () => {
  const router = useRouter()
  const { isError, data } = useMeQuery()
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setUser(data as User))
      router.push('/main')
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
// это как HOC, который дает нам Layout(туда закидываем повторяющиеся компоненты)
Home.getLayout = getLayout

export default Home
