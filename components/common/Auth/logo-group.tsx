import React, { FC } from 'react'
import style from './logo-group.module.scss'

export const AuthLogoGroup: FC = () => {
  return (
    <div className={style.item}>
      <a href="" className={style.link}>
        <img src="/img/google-svg.svg" alt="google.com" />
      </a>
      <a href="" className={style.link}>
        <img src="/img/github-svg.svg" alt="github.com" />
      </a>
    </div>
  )
}


