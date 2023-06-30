import React from 'react'
import s from './Header.module.css'
import Flagimg from './flag-russia.svg'

// import './style.css'
interface Props {
  className: any
}
export const FlagRussia = ({ className }: Props): JSX.Element => {
  return (
    <div className={s.image}>
      <div className={s.flag_russia_wrapper}>
        <Flagimg className={s.flag_russia} />
      </div>
    </div>
  )
}
