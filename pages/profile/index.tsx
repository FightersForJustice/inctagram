import { axiosAPI } from '@/assets/api/api'
import { UserData } from '@/assets/api/auth/authTypes'
import { getSideBarLayout } from '@/components/Layout/SideBarLayout/SideBarLayout'
import { PageWrapper } from '@/components/common/PageWrapper/PageWrapper'
import { GetServerSideProps, NextApiRequest } from 'next'
import s from './style.module.scss'
import Image from 'next/image'
import { Button } from '@/@ui/ui-kit/Button/Button'
import { BUTTON_COLORS } from '@/@ui/ui-kit/Button/constants'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { userRouts } from '@/app/routes/userRouts'

import avatar from '../../public/img/avatar.jpg'
import img1 from '../../public/img/post/img1.jpg'
import img2 from '../../public/img/post/img2.jpg'
import img3 from '../../public/img/post/img3.jpg'
import img4 from '../../public/img/post/img4.jpg'
import img5 from '../../public/img/post/img5.jpg'
import img6 from '../../public/img/post/img6.jpg'
import img7 from '../../public/img/post/img7.jpg'
import img8 from '../../public/img/post/img8.jpg'
import { withAuth } from '@/utils/withAuth'

export const getServerSideProps: GetServerSideProps = withAuth(async ({ req }) => {
  const isAuth = await axiosAPI.auth.meServer(req as NextApiRequest)
  return {
    props: {
      isAuth,
    },
  }
})

type HomeType = {
  isAuth: UserData
}

const MyProfile = (props: HomeType) => {
  const router = useRouter()
  const handleClick = () => {
    router.push(userRouts.profileSettings)
  }

  return (
    <PageWrapper>
      <div className={s.main}>
        <div className={s.header}>
          <Image className={s.avatar} width={204} height={204} src={avatar} alt="Avatar" />
          <div className={s.info}>
            <div className={s.blockTop}>
              <div className={s.name}>URLProfiele</div>
              <div className={s.settings}>
                <Button color={BUTTON_COLORS.BASIC} onClick={handleClick} text="Profile Settings"></Button>
              </div>
            </div>
            <div className={s.centre}>
              <div className={s.item}>
                <span>2 218</span>
                <span>Following</span>
              </div>
              <div className={s.item}>
                <span>2 358</span>
                <span>Followers</span>
              </div>
              <div className={s.item}>
                <span>2 764</span>
                <span>Publications</span>
              </div>
            </div>
            <div className={s.blockBottom}>
              <p className={s.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco{' '}
                <Link href="#" className={s.link}>
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className={s.post}>
          <Image width={234} height={228} src={img1} alt="Post" />
          <Image width={234} height={228} src={img2} alt="Post" />
          <Image width={234} height={228} src={img3} alt="Post" />
          <Image width={234} height={228} src={img4} alt="Post" />
          <Image width={234} height={228} src={img5} alt="Post" />
          <Image width={234} height={228} src={img6} alt="Post" />
          <Image width={234} height={228} src={img7} alt="Post" />
          <Image width={234} height={228} src={img8} alt="Post" />
          <Image width={234} height={228} src={img3} alt="Post" />
          <Image width={234} height={228} src={img4} alt="Post" />
          <Image width={234} height={228} src={img2} alt="Post" />
          <Image width={234} height={228} src={img3} alt="Post" />
          <Image width={234} height={228} src={img4} alt="Post" />
          <Image width={234} height={228} src={img5} alt="Post" />
        </div>
      </div>
    </PageWrapper>
  )
}

MyProfile.getLayout = getSideBarLayout
export default MyProfile
