import React, { MouseEvent } from 'react'
import classNames from 'classnames'
import styles from './Button.module.scss'
import { BUTTON_COLORS } from './constants'

export type ButtonType = React.HTMLAttributes<HTMLButtonElement> & {
  text: string
  type?: 'button' | 'submit' | 'reset' | undefined
  autoHeight?: boolean
  color?: (typeof BUTTON_COLORS)[keyof typeof BUTTON_COLORS]
  disabled?: boolean
}

export const Button: React.FC<ButtonType> = (props) => {
  const { text = '', color = BUTTON_COLORS.PRIMARY, autoHeight = false, type = 'button' } = props
  const buttonClasses = classNames(styles.button, {
    [styles[`button${color}`]]: Boolean(color),
    [styles[`buttonAutoHeight`]]: Boolean(autoHeight),
  })

  return (
    <button className={buttonClasses} {...props} type={type}>
      {text}
    </button>
  )
}
