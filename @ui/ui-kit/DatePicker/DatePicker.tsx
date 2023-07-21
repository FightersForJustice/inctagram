import { FC } from 'react'
import style from './DatePicker.module.scss'
import Link from 'next/link'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import { MainInput } from '@/components/common/Inputs/Inputs'

export const DatePicker: FC = (props) => {
  const { t } = useTranslation()
  const translate = (key: string): string => t(`Sidebar.${key}`)
  return (
    <div>
      <MainInput type='date' className={style.DatePicker} />
    </div>
  )
}