import { FC } from 'react'
import Link from 'next/link'

import style from './logo-group.module.scss'

export const AuthLogoGroup: FC = () => {
  return (
    <div className={style.item}>
      <Link href="" className={style.link}>
        <img src="/img/google-svg.svg" alt="google.com" />
      </Link>
      <Link href="" className={style.link}>
        <img src="/img/github-svg.svg" alt="github.com" />
      </Link>
    </div>
  )
}
