import { FC } from 'react'
import { MakeIconPropsType } from './iconsType'
import style from './IconsComponent.module.scss'
import Link from 'next/link'

export const MakeIcon: FC<MakeIconPropsType> = (props) => {
  const { OutlineIcon, Icon, className, text, isActive, isDisabled, Url } = props
  return (
    <>
      {!isDisabled ? (
        <Link href={Url ? Url : '#'} className={`${style.IconWrapper} ${className} ${isActive ? style.IconWrapperActive : null}`}>
          <div className={style.Icon}>{isActive ? <Icon /> : <OutlineIcon />}</div>
          <span className={style.Text}>{text}</span>
        </Link>
      ) : (
        <div className={`${style.IconWrapper} ${className} ${style.IconWrapperDisabled}`}>
          <div className={style.Icon}>{isActive ? <Icon /> : <OutlineIcon />}</div>
          <span className={style.Text}>{text}</span>
        </div>
      )}
    </>
  )
}
