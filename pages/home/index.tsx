import { axiosAPI } from '@/assets/api/api'
import { withAuth } from '@/utils/getServerSideProps/withAuth'
import { GetServerSideProps, NextApiRequest } from 'next'
import { getSideBarLayout } from '@/components/Layout/SideBarLayout/SideBarLayout'
import s from './home.module.scss'
import Image from 'next/image'
import { Button } from '@/@ui/ui-kit/Button/Button'
import { BUTTON_COLORS } from '@/@ui/ui-kit/Button/constants'
import { PageWrapper } from '@/components/common/PageWrapper/PageWrapper'
import MyCarousel from '@/@ui/ui-kit/Carousel'
import { HomeResponseType } from './Home.types'

export const getServerSideProps: GetServerSideProps = withAuth(async ({ req }) => {
  const postsAll = await axiosAPI.posts.getPostsServer(req as NextApiRequest)

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

const Home = (props: HomeResponseType) => {
  return (
    <PageWrapper>
      {props.postsAll.items.map((item, index) => (
        <div className={s.content} key={index}>
          <div className={s.user}>
            <div className={s.left}>
              <Image className={s.avatar} width={36} height={36} src="/post/5.png" alt="Avatar" />
              <span className={s.name}>URLProfiele</span>
              <span className={s.point}></span>
              <span className={s.time}>{item.createdAt}</span>
            </div>
            <div className={s.right}>
              <Image width={24} height={24} className={s.action} src="sidebar-icons/more-horizontal.svg" alt="" />
            </div>
          </div>
          <MyCarousel items={item.images.filter((img) => img.height === 1440).map((img, index) => img.url)} />
          <div className={s.icons}>
            <div className={s.left}>
              <Image width={24} height={24} src="sidebar-icons/heart-outline.svg" alt="" />
              <Image width={24} height={24} className={s.message} src="sidebar-icons/message-circle-outline.svg" alt="" />
              <Image width={24} height={24} className={s.paper} src="sidebar-icons/paper-plane-outline.svg" alt="" />
            </div>
            <div className={s.right}>
              <Image width={24} height={24} src="sidebar-icons/bookmark-outline.svg" alt="" />
            </div>
          </div>
          <div className={s.comments}>
            <Image className={s.avatar} width={36} height={36} src="/post/5.png" alt="Avatar" />
            <p>
              <span className={s.name}>URLProfiele </span>
              <span className={s.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </span>
            </p>
          </div>
          <div className={s.like}>
            <Image className={s.avatar} width={24} height={24} src="/post/5.png" alt="Avatar" />
            <Image className={s.avatar} width={24} height={24} src="/post/5.png" alt="Avatar" />
            <Image className={s.avatar} width={24} height={24} src="/post/5.png" alt="Avatar" />
            <span className={s.number}>2 233</span>
            <span className={s.text}>"Like"</span>
          </div>
          <div className={s.allComments}>
            <p>View All Comments (114)</p>
            <div className={s.addComment}>
              <input type="text" placeholder="Add a Comment..." />
              <Button color={BUTTON_COLORS.GHOST} text="Publish"></Button>
            </div>
            <hr />
          </div>
        </div>
      ))}
    </PageWrapper>
  )
}

Home.getLayout = getSideBarLayout
export default Home
