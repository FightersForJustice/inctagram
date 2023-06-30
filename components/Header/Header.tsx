// import PropTypes from 'prop-types'
// import React from 'react'
// import s from './Header.module.css'
// import { Language } from './Select_box'
// import { OutlineBell } from './OutlineBell'
// import { Logo } from '@/components/Header/Logo'

// interface Props {
//   className: any
//   languageLanguageClassName: any
//   languageFlagRussiaFlagRussiaClassName: any
//   outlineBellMask: string
// }

export const Header = ({
  className,
  languageLanguageClassName,
  languageFlagRussiaFlagRussiaClassName,
  outlineBellMask = 'image.svg',
}: Props): JSX.Element => {
  return (
    <div className={s.header}>
      <Logo className={s.inctagram} />
      <OutlineBell className={s.outline_bell_instance} mask={outlineBellMask} />
      <Language className={s.languageLanguage} />
    </div>
  )
}

// Header.propTypes = {
//   outlineBellMask: PropTypes.string,
// }
