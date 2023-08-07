import style from './Inputs.module.scss'
import React, { useState } from 'react'
import LightEyeOpen from '../../../public/icons/lightEyeOpen.svg'
import LightEyeClosed from '../../../public/icons/lightEyeClosed.svg'

interface IMainInputProps extends React.HTMLAttributes<HTMLInputElement> {
  validation?: object
  type?: string
  label?: string
}

type FormInputType = {
  validation?: object
  label: string
  id: string
  name: string
  value: string | number | readonly string[] | undefined //fix
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

type FormTextareaType = FormInputType & {}

export const MainInput: React.FC<IMainInputProps> = ({ validation, ...props }) => {
  return (
    <>
      {props.label && (
        <label htmlFor={props.id} className={style.Label}>
          {props.label}
        </label>
      )}
      <input className={style.Input} {...props} {...validation} />
    </>
  )
}

export const PasswordInput: React.FC<IMainInputProps> = ({ ...props }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  return (
    <>
      <MainInput {...props} type={isPasswordShown ? 'text' : 'password'} />
      <div style={{ position: 'relative', width: '100%' }}>
        <span className={style.EyeButton} onClick={() => setIsPasswordShown((prev) => !prev)}>
          {isPasswordShown ? <LightEyeOpen /> : <LightEyeClosed />}
        </span>
      </div>
    </>
  )
}

export const FormInput: React.FC<FormInputType> = ({ onChange, label, id, name, value }) => {
  return (
    <fieldset>
      <label className={style.Label} htmlFor={id}>
        {label}
      </label>
      <input className={style.Input} id={id} name={name} value={value} onChange={onChange} />
    </fieldset>
  )
}
export const FormTextarea: React.FC<FormTextareaType> = ({ onChange, label, id, name, value }) => {
  return (
    <fieldset>
      <label className={style.Label} htmlFor={id}>
        {label}
      </label>
      <textarea className={style.Input} id={id} name={name} value={value} onChange={onChange} />
    </fieldset>
  )
}
