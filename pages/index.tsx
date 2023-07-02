import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { NextPageWithLayout } from './_app'
import { getLayout } from '@/components/Layout/Layout'
import Login from './auth/login'

const Home: NextPageWithLayout = () => <PageWrapper>
    <Login/>
</PageWrapper>
// это как HOC, который дает нам Layout(туда закидываем повторяющиеся компоненты)
Home.getLayout = getLayout

export default Home
