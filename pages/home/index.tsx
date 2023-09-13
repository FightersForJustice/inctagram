import { axiosAPI } from '@/assets/api/api'
import { UserData } from '@/assets/api/auth/authTypes'
import { getSideBarLayout } from '@/components/Layout/SideBarLayout/SideBarLayout'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { userRouts } from '@/components/common/User/userRouts'
import { withAuth } from '@/utils/withAuth'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { Example } from './slider/Slider'
import s from './home.module.scss'
import Image from 'next/image'

export const getServerSideProps: GetServerSideProps = withAuth(async () => {
  return { props: {} }
})

type HomeType = {
  isAuth: UserData
}

const Home = (props: HomeType) => {
  const { isAuth } = props
  const router = useRouter()

  const handleClick = () => {
    router.push(userRouts.profileSettings)
  }

  return (
    <PageWrapper>
      <div className={s.content}>
        <div className={s.user}>
          <Image className={s.avatar} width={36} height={36} src="/post/5.png" alt="Avatar" />
          <span className={s.name}>URLProfiele</span>
        </div>
        <Example items={['post/5.png', 'post/1.jpg', 'post/2.jpg', 'post/3.jpg', 'post/4.jpg']} />
      </div>
    </PageWrapper>
  )
}

Home.getLayout = getSideBarLayout
export default Home
