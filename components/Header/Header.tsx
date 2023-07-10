import PropTypes from 'prop-types'
import React from 'react'
import s from './Header.module.css'
import { Language } from './SelectBox'
import { OutlineBell } from './OutlineBell'
import { Logo } from '@/components/Header/Logo'
import LanguageFlags from './Flag'
import Link from 'next/link'

interface Props {
  className: any
  languageLanguageClassName: any
  languageFlagRussiaFlagRussiaClassName: any
  outlineBellMask: string
}

export const Header = (): JSX.Element => {
  return (
    <div className={s.header}>
      <Link href="/auth/login">
        <Logo className={s.inctagram} />
      </Link>
      <OutlineBell className={s.outline_bell_instance} mask={'image.svg'} />
      <LanguageFlags />
      {/* <Language className={s.languageLanguage} /> */}
    </div>
  )
}

Header.propTypes = {
  outlineBellMask: PropTypes.string,
}
