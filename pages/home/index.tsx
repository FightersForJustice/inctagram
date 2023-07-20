import { PageWrapper } from 'components/PageWrapper/PageWrapper'
import { getSideBarLayout } from '@/components/Layout/SideBarLayout/SideBarLayout'

export const getStaticProps = async () => {
  return {
    props: {},
  }
}

const HomePage = () => {
  return (
    <PageWrapper>
      <div style={{ color: 'white', height: '100vh', textAlign: 'center', fontSize: '50px', paddingTop: '300px' }}>
        Unleashing creativity with elegant code and stunning visuals
      </div>
    </PageWrapper>
  )
}

HomePage.getLayout = getSideBarLayout
export default HomePage
