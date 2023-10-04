import { axiosAPI } from '@/assets/api/api'
import { withAuth } from '@/utils/getServerSideProps/withAuth'
import { GetServerSideProps, NextApiRequest } from 'next'
import { getSideBarLayout } from '@/components/Layout/SideBarLayout/SideBarLayout'
import { PageWrapper } from '@/components/common/PageWrapper/PageWrapper'
import MyCarousel from '@/@ui/ui-kit/Carousel'
import { HomeResponseType } from './Home.types'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setHomePostSSR } from '@/core/slices/homeSlice'
import { useScrollEffect } from './hook'
import Home from '@/components/Home/Home'

export const getServerSideProps: GetServerSideProps = withAuth(async ({ req }) => {
  const postsAll = await axiosAPI.posts.getPostsSSR(req as NextApiRequest)

  if (!postsAll) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      postsAll,
    },
  }
})

const HomePage = (props: HomeResponseType) => {
  const { totalCount, pageSize, items } = props.postsAll
  const dispatch = useDispatch()
  const handleScroll = () => {
    console.log('Сработал скрол')
  }
  useScrollEffect(handleScroll)

  useEffect(() => {
    dispatch(setHomePostSSR({ totalCount, pageSize, items }))
  }, [dispatch, { totalCount, pageSize, items }])

  return (
    <PageWrapper>
      <Home />
    </PageWrapper>
  )
}

HomePage.getLayout = getSideBarLayout
export default HomePage
