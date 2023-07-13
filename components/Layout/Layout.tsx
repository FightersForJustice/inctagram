import { NextPage } from 'next'
import { PropsWithChildren, ReactElement } from 'react'
import { Header } from '../Header/Header'
import style from './Layout.module.scss'

export const Layout: NextPage<PropsWithChildren> = (props) => {
  const { children } = props

  return (
    <>
      <Header />
      <div className={style.background_container}>{children}</div>
    </>
  )
}

export const getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}
