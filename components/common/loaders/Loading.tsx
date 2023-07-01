import React from 'react'
import LoadingIcon from '@/public/icons/loading.svg'
import style from './loading.module.scss'

export const Loading = () => {
  return (
    <div className={style.loadingContainer}>
      <LoadingIcon />
    </div>
  )
}
