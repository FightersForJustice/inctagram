import Head from 'next/head'

type PropsType = {
  title?: string
}

export const HeadMeta = (props: PropsType) => {
  const { title } = props

  const description = title ? `inctagram ${title.toLowerCase()}` : 'inctagram'

  return (
    <Head>
      <title>{title ?? 'inctagram'}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
