import style from './Inputs.module.scss'
import { useState } from 'react'
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
        <span className={style.eyeButton} style={{marginTop: labelMargin}} onClick={() => setIsPasswordShown((prev) => !prev)}>
          {isPasswordShown ? <LightEyeOpen /> : <LightEyeClosed />}
        </span>
      </div>
      <MainInput {...props} type={isPasswordShown ? 'text' : 'password'} />
    </>
  )
}
