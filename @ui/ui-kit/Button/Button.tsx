import React, { MouseEvent } from 'react'
import classNames from 'classnames'
import styles from './Button.module.scss'
import { BUTTON_COLORS } from './constants'

export type ButtonType = {
  text: string
  autoHeight?: boolean
  color?: (typeof BUTTON_COLORS)[keyof typeof BUTTON_COLORS]
  disabled?: boolean
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

export const Button: React.FC<ButtonType> = ({
  text = '',
  color = BUTTON_COLORS.PRIMARY,
  disabled = false,
  onClick,
  autoHeight = false,
}) => {
  const buttonClasses = classNames(styles.button, {
    [styles[`button${color}`]]: Boolean(color),
    [styles[`buttonAutoHeight`]]: Boolean(autoHeight),
  })

  return (
    <button className={buttonClasses} disabled={disabled} onClick={onClick} type="button">
      {text}
    </button>
  )
}
