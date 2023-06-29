import React from 'react'
import s from './Header.module.css'

// import './style.css'

interface Props {
  className: any
}

export const FlagRussia = ({ className }: Props): JSX.Element => {
  return <div className={s.flag_russia} />
}
