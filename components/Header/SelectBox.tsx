import React from 'react'
import { FlagRussia } from './FlagRussia'
import s from './Header.module.css'

interface Props {
  className: any
}

export const Language = ({ className }: Props): JSX.Element => {
  return (
    <div className={s.language}>
      <FlagRussia className={s.flagRussiaFlagRussiaClassName} />
    </div>
  )
}
