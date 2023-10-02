import { axiosAPI } from '@/assets/api/api'
import { getSideBarLayout } from '@/components/Layout/SideBarLayout/SideBarLayout'
import { PageWrapper } from '@/components/common/PageWrapper/PageWrapper'
import { GetServerSideProps, NextApiRequest } from 'next'
import s from './style.module.scss'
import Image from 'next/image'
import { Button } from '@/@ui/ui-kit/Button/Button'
import { BUTTON_COLORS } from '@/@ui/ui-kit/Button/constants'
import { useRouter } from 'next/router'
import { userRouts } from '@/app/routes/userRouts'

import img1 from '../../public/img/post/img1.jpg'
import img2 from '../../public/img/post/img2.jpg'
import img3 from '../../public/img/post/img3.jpg'
import img4 from '../../public/img/post/img4.jpg'
import img5 from '../../public/img/post/img5.jpg'
import img6 from '../../public/img/post/img6.jpg'
import img7 from '../../public/img/post/img7.jpg'
import img8 from '../../public/img/post/img8.jpg'
import { withAuth } from '@/utils/getServerSideProps/withAuth'
import { useEffect, useState } from 'react'
import { ProfileType } from '@/components/Profile-Settings/profileSettingsTypes'
import { useScrollEffect } from '../../hooks/useScrollEffect'

export const getServerSideProps: GetServerSideProps = withAuth(async ({ req }) => {
  const userProfile = await axiosAPI.profile.getProfileFromServer(req as NextApiRequest)

  if (!userProfile) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      userProfile,
    },
  }
})

const MyProfile = ({ userProfile }: ProfileType) => {
  console.log(userProfile)

  const [images, setImagesContent] = useState(['fff', 'hhhh'])

  const router = useRouter()

  useScrollEffect(setImagesContent, images)

  const handleClick = () => {
    router.push(userRouts.profileSettings)
  }

  return (
    <PageWrapper>
      <div className={s.main}>
        <div className={s.header}>
          <Image className={s.avatar} width={204} height={204} src={userProfile.avatars[0].url} alt="Avatar" />
          <div className={s.info}>
            <div className={s.blockTop}>
              <div className={s.name}>{userProfile.firstName}</div>
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
              <p className={s.text}>{userProfile.aboutMe}</p>
            </div>
          </div>
        </div>
        <div className={s.post}>
          {
            // тут посты отображаются
          }
        </div>
      </div>
    </PageWrapper>
  )
}

MyProfile.getLayout = getSideBarLayout
export default MyProfile
