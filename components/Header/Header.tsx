
import React from 'react'
import s from './Header.module.css'

import { OutlineBell } from './OutlineBell'
import { Logo } from '@/components/Header/Logo'
import LanguageFlags from './Flag'

interface Props {
  className: any
  languageLanguageClassName: any
  languageFlagRussiaFlagRussiaClassName: any
  outlineBellMask: string
}

export const Header = (): JSX.Element => {
  return (
    <div className={s.header}>
      <Logo className={s.inctagram} />
      <OutlineBell className={s.outline_bell_instance} mask={'image.svg'} />
      <LanguageFlags />
      {/* <Language className={s.languageLanguage} /> */}
    </div>
  )
}

