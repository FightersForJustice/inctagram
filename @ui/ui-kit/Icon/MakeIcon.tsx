import { FC } from 'react'
import { MakeIconPropsType } from './iconsType'
import style from './IconsComponent.module.scss'
import Link from 'next/link'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'

export const MakeIcon: FC<MakeIconPropsType> = (props) => {
  const { OutlineIcon, Icon, customClass, text, isActive, isDisabled, url } = props
  const className = classNames(style.IconWrapper, customClass, {
    [style.IconWrapperActive]: isActive,
    [style.IconWrapperDisabled]: isDisabled,
  })
  const { t } = useTranslation()
  const translate = (key: string): string => t(`Sidebar.${key}`)
  return (
    <>
      {!isDisabled ? (
        <Link href={url ? url : ''} className={className}>
          <div className={style.Icon}>{isActive ? <Icon /> : <OutlineIcon />}</div>
          <span className={style.Text}>{text && translate(text).replace('Sidebar.', '')}</span>
        </Link>
      ) : (
        <div className={className}>
          <div className={style.Icon}>
            <OutlineIcon />
          </div>
          <span className={style.Text}>{text && translate(text).replace('Sidebar.', '')}</span>
        </div>
      )}
    </>
  )
}
