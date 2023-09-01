import React from 'react'
import s from './Header.module.scss'
import Mask from '@/public/img/mask.svg'

interface Props {
  className: any
  mask: string
}

export const OutlineBell = ({ className, mask = 'mask.svg' }: Props): JSX.Element => {
  return (
    <div className={s.outline_bell}>
      <div className={s.overlap_group}>
        <Mask />
        <div className={s.ellipse} />
        <div className={s.element}>3</div>
      </div>
    </div>
  )
}
