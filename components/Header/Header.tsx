import PropTypes from 'prop-types'
import React from 'react'
import s from './Header.module.css'
import { OutlineBell } from './OutlineBell'
import { Logo } from '@/components/Header/Logo'
import dynamic from 'next/dynamic'

interface Props {
  className: any
  languageLanguageClassName: any
  languageFlagRussiaFlagRussiaClassName: any
  outlineBellMask: string
}
const DynamicLanguageFlags = dynamic(() => import('./Select_box'), { ssr: false })

export const Header = (): JSX.Element => {
  return (
    <div className={s.header}>
      <Logo className={s.inctagram} />
      <OutlineBell className={s.outline_bell_instance} mask={'image.svg'} />
      <DynamicLanguageFlags />
    </div>
  )
}

Header.propTypes = {
  outlineBellMask: PropTypes.string,
}
