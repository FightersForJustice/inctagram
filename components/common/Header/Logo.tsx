import React from 'react'
import s from './Header.module.scss'

interface Props {
  className: any
}

export const Logo = ({ className }: Props): JSX.Element => {
  return <div className={s.inctagram}>Inctagram</div>
}
