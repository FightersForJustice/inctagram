import React, { ChangeEvent, FocusEvent } from 'react'
import classNames from 'classnames'
import styles from './TextArea.module.scss'
import { TEXTAEREA_COLORS } from './constants'

type TextAreaProps = {
  defaultValue?: string
  isActive?: boolean
  hasError?: boolean
  isHovered?: boolean
  isFocused?: boolean
  isDisabled?: boolean
  errorMessage?: string
  placeholderText?: string
  color?: (typeof TEXTAEREA_COLORS)[keyof typeof TEXTAEREA_COLORS]
  onFocus?: (event: FocusEvent<HTMLTextAreaElement>) => void
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
  onBlur?: (event: FocusEvent<HTMLTextAreaElement>) => void
}

const TextArea: React.FC<TextAreaProps> = ({
  defaultValue,
  isActive = false,
  hasError = false,
  isHovered = false,
  isFocused = false,
  isDisabled = false,
  errorMessage = 'Error text',
  placeholderText = 'Textarea',
  color = TEXTAEREA_COLORS.DEFAULT,
  onChange,
  onFocus,
  onBlur,
}) => {
  const textareaClasses = classNames(styles.textarea, {
    [styles[`textarea${color}`]]: Boolean(color),
  })

  return (
    <div>
      <p className={styles.title}>Textarea</p>
      <textarea
        className={textareaClasses}
        defaultValue={defaultValue}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={isDisabled}
        placeholder={placeholderText}
      />
      {hasError && <span className={styles.error_message}>{errorMessage}</span>}
    </div>
  )
}

export default TextArea
