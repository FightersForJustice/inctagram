import React from 'react'
import { useController, Control } from 'react-hook-form'
import classNames from 'classnames'
import styles from './Textarea.module.css'

interface TextAreaProps {
  name: string
  control: Control
  defaultValue?: string
  rules?: Object
  disabled?: boolean
  isDirty?: boolean
  isFocused?: boolean
  isHovered?: boolean
}

const TextArea: React.FC<TextAreaProps> = ({ name, control, defaultValue, rules, ...rest }) => {
  const {
    field: { ref, value, onChange, onBlur },
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue,
    rules,
  })

  const hasError = !!error

  const className = classNames('textarea', {
    disabled: rest.disabled,
    error: hasError,
    active: rest.isDirty,
    focus: rest.isFocused,
    hover: rest.isHovered,
  })

  return (
    <div>
      <textarea className={className} ref={ref} value={value} onChange={onChange} onBlur={onBlur} {...rest} />
      {hasError && <span className="error-message">{error.message}</span>}
    </div>
  )
}

export default TextArea
