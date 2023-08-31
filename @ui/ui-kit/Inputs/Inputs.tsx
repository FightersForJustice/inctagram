import style from './Inputs.module.scss'
import React, { useState } from 'react'
import LightEyeOpen from '../../../public/icons/lightEyeOpen.svg'
import LightEyeClosed from '../../../public/icons/lightEyeClosed.svg'
import classNames from 'classnames'

interface IMainInputProps extends React.HTMLAttributes<HTMLInputElement> {
  validation?: object
  type?: string
  label?: string
  disabled?: boolean
  errormessages?: Array<string | undefined>
}

type FormInputType = {
  validation?: Validation
  label: string
  id: string
  name: string
  value: string | number | readonly string[] | undefined //fix
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

type Validation = {
  minLength: number
}

type FormTextareaType = FormInputType & {}

export const MainInput: React.FC<IMainInputProps> = ({ validation, ...props }) => {
  const { label, id, disabled } = props
  const errorMessage = props?.errormessages?.find((e) => e !== undefined)
  return (
    <>
      {label && (
        <label htmlFor={id} className={classNames(style.label, { [style.labelDisabled]: disabled })}>
          {label}
        </label>
      )}
      <input className={classNames(style.input, { [style.inputError]: errorMessage })} {...props} {...validation} />
      {errorMessage && <span className={style.errorMessage}>{errorMessage}</span>}
    </>
  )
}

export const PasswordInput: React.FC<IMainInputProps> = ({ ...props }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const labelMargin = props.label ? '0px' : '-20px'
  return (
    <>
      <div style={{ position: 'relative', width: '100%' }}>
        <span className={style.eyeButton} style={{ marginTop: labelMargin }} onClick={() => setIsPasswordShown((prev) => !prev)}>
          {isPasswordShown ? <LightEyeOpen /> : <LightEyeClosed />}
        </span>
      </div>
      <MainInput {...props} type={isPasswordShown ? 'text' : 'password'} />
    </>
  )
}

export const FormInput: React.FC<FormInputType> = ({ onChange, label, id, name, value, validation }) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value

    if (validation?.minLength && newValue.length < validation.minLength) {
      setErrorMessage(`Minimum length is ${validation.minLength} characters`)
    } else {
      setErrorMessage(null)
    }

    onChange(event)
  }

  return (
    <fieldset>
      <label className={style.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={classNames(style.input, style.input_dark, { [style.inputError]: errorMessage })}
        id={id}
        name={name}
        value={value}
        onChange={handleInputChange}
      />
      {errorMessage && <span className={style.errorMessage}>{errorMessage}</span>}
    </fieldset>
  )
}

export const FormTextarea: React.FC<FormTextareaType> = ({ onChange, label, id, name, value }) => {
  return (
    <fieldset>
      <label className={style.label} htmlFor={id}>
        {label}
      </label>
      <textarea className={classNames(style.input, style.input_dark)} id={id} name={name} value={value} onChange={onChange} />
    </fieldset>
  )
}
