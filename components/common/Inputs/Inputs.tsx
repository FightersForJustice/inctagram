import style from './Inputs.module.scss'
import { useState } from 'react'
import LightEyeOpen from '../../../public/icons/lightEyeOpen.svg';
import LightEyeClosed from '../../../public/icons/lightEyeClosed.svg';

interface IMainInputProps extends React.HTMLAttributes<HTMLInputElement> {
  validation?: object
  type?: string
  label?: string
}

export const MainInput: React.FC<IMainInputProps> = ({ validation, ...props }) => {
  return <>
    {props.label && <label htmlFor={props.id} className={style.Label}>{props.label}</label>}
    <input className={style.Input} {...props} {...validation} />
  </>
}

export const PasswordInput: React.FC<IMainInputProps> = ({ ...props }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  return <div style={{ position: 'relative', width: '100%' }}>
    <MainInput {...props} type={isPasswordShown ? 'text' : 'password'} />
    <span
      className={style.EyeButton}
      onClick={() => setIsPasswordShown(prev => !prev)}
    >{isPasswordShown
      ? <LightEyeOpen />
      : <LightEyeClosed />}
    </span>
  </div>
}
