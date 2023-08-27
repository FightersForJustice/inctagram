import React, { ChangeEvent, FocusEvent } from 'react'
import classNames from 'classnames'
import styles from './Textarea.module.scss'
import { TEXTAEREA_COLORS } from './constants'

export type TextAreaProps = {
  value?: string
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
  hasError?: boolean
  disabled?: boolean
  hovered?: boolean
  errorMessage?: string
  placeholder?: string
  label?: string
  color?: (typeof TEXTAEREA_COLORS)[keyof typeof TEXTAEREA_COLORS]
} & React.TextareaHTMLAttributes<HTMLTextAreaElement> 

export const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChange = () => {},
  label = '',
  hasError = false,
  disabled = false,
  hovered = false,
  errorMessage = 'Error text',
  placeholder = 'Textarea',
  color = TEXTAEREA_COLORS.DEFAULT,

}) => {
  const textareaClasses = classNames(styles.textarea, {
    [styles.Default]: color === TEXTAEREA_COLORS.DEFAULT,
    [styles.Active]: hovered || color === TEXTAEREA_COLORS.ACTIVE,
    [styles.Error]: color === TEXTAEREA_COLORS.ERROR,
  })

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (!disabled) {
      if (onChange) {
        onChange(event);
      }
    }
  }

  return (
    <div>
      <p className={styles.title}>{label}</p>
      <textarea
        className={textareaClasses}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {hasError && <p className={styles.error_message}>{errorMessage}</p>}
    </div>
  )
}
