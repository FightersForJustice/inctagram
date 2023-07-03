import { PageWrapper } from 'components/PageWrapper/PageWrapper'
import { getLayout } from '@/components/Layout/Layout'

export const getStaticProps = async () => {
  return {
    props: {},
  }
}

const Main = () => {
  return (
    <PageWrapper>
      <div style={{ color: 'white', height: '100vh', textAlign: 'center', fontSize: '50px', paddingTop: '300px' }}>
        Unleashing creativity with elegant code and stunning visuals
      </div>
    </PageWrapper>
  )
}

Main.getLayout = getLayout
export default Main
