import { FC } from 'react'
import { MakeIconPropsType } from './iconsType'
import style from './IconsComponent.module.scss'
import Link from 'next/link'
import classNames from 'classnames'

export const MakeIcon: FC<MakeIconPropsType> = (props) => {
  const { OutlineIcon, Icon, customClass, text, isActive, isDisabled, url } = props
  const className = classNames(style.IconWrapper, customClass, {[style.IconWrapperActive]: isActive, [style.IconWrapperDisabled]: isDisabled })
  return (
    <Link
      href={(url && !isDisabled) ? url : ''}
      className={className}
    >
      <div className={style.Icon}>{isActive ? <Icon /> : <OutlineIcon />}</div>
      <span className={style.Text}>{text}</span>
    </Link>
  )
}
