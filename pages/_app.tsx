import '@/styles/globals.css'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '../store/store'

// из документации (для лэйаута)
export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode
}
// из документации (для лэйаута)
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // из документации (для лэйаута)
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    //тут мы будем оборачивать приложение в провайдер и передавать в контекст клиента(стор) + Hydrate

    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
