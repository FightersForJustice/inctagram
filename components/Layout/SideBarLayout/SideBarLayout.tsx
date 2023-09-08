import { NextPage } from 'next'
import { PropsWithChildren, ReactElement } from 'react'
import { Header } from '../../common/Header/Header'
import style from './SideBarLayout.module.scss'
import SideBar from '../../SideBar/SideBar'

export const Layout: NextPage<PropsWithChildren> = (props) => {
  const { children } = props

  return (
    <>
      <Header />
      <div className={style.content_container}>
        <div className={style.sidebar}>
          <SideBar />
        </div>
        <div className={style.background_container}>{children}</div>
      </div>
    </>
  )
}

export const getSideBarLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}
