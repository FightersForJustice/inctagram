import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { NextPageWithLayout } from './_app'
import { getLayout } from '@/components/Layout/Layout'
import Login from './auth/login'
import { useRouter } from 'next/router'
import { useMeQuery } from '@/assets/api/auth/authApi'
import { useEffect } from 'react'
import { Loading } from '@/components/common/loaders/Loading'

const Home: NextPageWithLayout = () => {
  const router = useRouter()
  const { data, isError } = useMeQuery()

  useEffect(() => {
    if (data) {
      router.push('/mainPage')
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
