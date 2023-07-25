import React, { ChangeEvent, FocusEvent } from 'react'
import classNames from 'classnames'
import styles from './Textarea.module.scss'
import { TEXTAEREA_COLORS } from './constants'

export type TextAreaProps = {
  hasError?: boolean
  disabled?: boolean
  hovered?: boolean
  errorMessage?: string
  placeholder?: string
  color?: (typeof TEXTAEREA_COLORS)[keyof typeof TEXTAEREA_COLORS]
} & React.TextareaHTMLAttributes<HTMLTextAreaElement> // Inherit all textarea HTML attributes

export const TextArea: React.FC<TextAreaProps> = ({
  defaultValue,
  hasError = false,
  disabled = false,
  hovered = false,
  errorMessage = 'Error text',
  placeholder = 'Textarea',
  color = TEXTAEREA_COLORS.DEFAULT,
  ...restProps // Spread the remaining HTML attributes
}) => {
  const textareaClasses = classNames(styles.textarea, {
    [styles.Default]: color === TEXTAEREA_COLORS.DEFAULT,
    [styles.Active]: color === TEXTAEREA_COLORS.ACTIVE,
    [styles.Error]: color === TEXTAEREA_COLORS.ERROR,
  })

  return (
    <div>
      <p className={styles.title}>Textarea</p>
      <textarea
        className={textareaClasses}
        defaultValue={defaultValue}
        disabled={disabled}
        placeholder={placeholder}
        {...restProps} // Spread the remaining HTML attributes
      />
      {hasError && <p className={styles.error_message}>{errorMessage}</p>}
    </div>
  )
}
