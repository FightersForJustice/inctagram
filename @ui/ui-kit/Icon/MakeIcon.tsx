import { FC } from 'react'
import { MakeIconPropsType } from './iconsType'
import style from './IconsComponent.module.scss'
import Link from 'next/link'

export const MakeIcon: FC<MakeIconPropsType> = (props) => {
  const { OutlineIcon, Icon, className, text, isActive, isDisabled, url } = props
  return (
    <Link
      href={(url && !isDisabled) ? url : ''}
      className={`${style.IconWrapper} ${className} ${isActive && style.IconWrapperActive}
        ${isDisabled && style.IconWrapperDisabled}`}
    >
      <div className={style.Icon}>{isActive ? <Icon /> : <OutlineIcon />}</div>
      <span className={style.Text}>{text}</span>
    </Link>
  )
}
