import { PropsWithChildren } from 'react'
import { HeadMeta } from '../HeadMeta/HeadMeta'

type PropsType = {
  title?: string
}

export const PageWrapper = (props: PropsWithChildren<PropsType>) => {
  const { children, title } = props

  return (
    <>
      <HeadMeta title={title} />
      <div>{children}</div>
    </>
  )
}
