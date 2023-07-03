import { PropsWithChildren } from 'react'
import { HeadMeta } from '../HeadMeta/HeadMeta'

type PropsType = {
  title?: string
}

export const PageWrapper = (props: PropsWithChildren<PropsType>) => {
  const { children, title } = props

  return (
    <div style={{ backgroundColor: 'black' }}>
      <HeadMeta title={title} />
      <div>{children}</div>
    </div>
  )
}
