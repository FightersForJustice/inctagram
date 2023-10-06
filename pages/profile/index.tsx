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
import MyProfile from '@/components/MyProfile/MyProfile'

export const getServerSideProps: GetServerSideProps = withAuth(async ({ req }) => {
  const isAuth = await axiosAPI.auth.meServer(req as NextApiRequest)
  const userProfile = await axiosAPI.profile.getProfileFromServer(req as NextApiRequest, isAuth.userId)

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

const MyProfilePage = ({ userProfile }: ProfileType) => {
  return (
    <PageWrapper>
      <MyProfile userProfile={userProfile} />
    </PageWrapper>
  )
}

MyProfilePage.getLayout = getSideBarLayout
export default MyProfilePage
