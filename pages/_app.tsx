import '@/styles/Globals.css'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode, useEffect } from 'react'
import { Provider } from 'react-redux'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import translationEN from '../assets/locales/en/translationEn.json'
import translationRU from '../assets/locales/ru/translationRu.json'
import i18n from 'i18next'
import { store } from '@/store/store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

i18n.use(initReactI18next).init({
  detection: {
    order: ['localStorage', 'htmlTag', 'path', 'subdomain'],
    caches: ['localStorage'],
  },
  lng: 'en',
  resources: {
    en: {
      translation: translationEN,
    },
    ru: {
      translation: translationRU,
    },
  },
})

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout || ((page) => page)
  useEffect(() => {
    const storedLanguage = localStorage.getItem('i18next') 

    if (storedLanguage && storedLanguage !== i18n.language) {
      i18n.changeLanguage(storedLanguage) 
    }
  }, [])
  return getLayout(
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <Component {...pageProps} />
        <ToastContainer />
      </Provider>
    </I18nextProvider>
  )
}
