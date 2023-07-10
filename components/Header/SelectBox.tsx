import React, { FC } from 'react'
import { FlagRussia } from './FlagRussia'
import s from './Header.module.css'

interface Props {
  className: any
  code: string
  onClick: () => void
}

const Language: FC<LanguageProps> = ({ code, onClick }) => {
  return (
    <div className={s.language}>
      <FlagRussia />
    </div>
  )
}
