import { NextPage } from 'next'
import { PropsWithChildren, ReactElement } from 'react'
import { Header } from '../Header/Header'

export const Layout: NextPage<PropsWithChildren> = (props) => {
  const { children } = props

  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  )
}

export const getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}
