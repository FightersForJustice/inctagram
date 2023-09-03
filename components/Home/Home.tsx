import { getSideBarLayout } from '../Layout/SideBarLayout/SideBarLayout'
import { PageWrapper } from '../common/PageWrapper/PageWrapper'
import { HomeType } from './homeTypes'
import { useHomePage } from './useHomePage'

const Home = (props: HomeType) => {
  const { handleClick } = useHomePage(props)

  return (
    <PageWrapper>
      <button
        onClick={handleClick}
        style={{
          width: '200px',
          height: '50px',
        }}
      >
        Profile Settings
      </button>
    </PageWrapper>
  )
}

Home.getLayout = getSideBarLayout
export default Home
