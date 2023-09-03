import React, { MouseEvent } from 'react'
import classNames from 'classnames'
import styles from './Button.module.scss'
import { BUTTON_COLORS, BUTTON_VARIATIONS } from './constants'

export type ButtonType = React.HTMLAttributes<HTMLButtonElement> & {
  variation?: (typeof BUTTON_VARIATIONS)[keyof typeof BUTTON_VARIATIONS]
  text: string
  type?: 'button' | 'submit' | 'reset' | undefined
  color?: (typeof BUTTON_COLORS)[keyof typeof BUTTON_COLORS]
  disabled?: boolean
}

export const Button: React.FC<ButtonType> = (props) => {
  const { text = '', color = BUTTON_COLORS.PRIMARY, variation = BUTTON_VARIATIONS.DEFAULT, type = 'button' } = props
  const buttonClasses = classNames(styles.button, {
    [styles[`button${color}`]]: Boolean(color),
    [styles[`button${variation}`]]: Boolean(variation),
  })

  return (
    <button className={buttonClasses} {...props} type={type}>
      {text}
    </button>
  )
}
