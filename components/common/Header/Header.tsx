import React from 'react'
import s from './Header.module.scss'
import { OutlineBell } from './OutlineBell'
import { Logo } from '@/components/common/Header/Logo'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { authRouts } from '../Auth/authRoutes'

interface Props {
  className: any
  languageLanguageClassName: any
  languageFlagRussiaFlagRussiaClassName: any
  outlineBellMask: string
}
const DynamicLanguageFlags = dynamic(() => import('./SelectBox'), { ssr: false })

export const Header = (): JSX.Element => {
  return (
    <div className={s.header}>
      <Link href={authRouts.login}>
        <Logo className={s.inctagram} />
      </Link>
      <OutlineBell className={s.outline_bell_instance} mask={'image.svg'} />
      <DynamicLanguageFlags />
    </div>
  )
}
