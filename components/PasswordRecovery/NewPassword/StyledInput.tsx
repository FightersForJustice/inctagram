import style from '@/components/Login/LoginForm.module.css'
import { useState } from 'react'

interface IStyledInputProps extends React.HTMLAttributes<HTMLInputElement> {
  validation?: object
  type?: string
  label?: string
}

const StyledInput: React.FC<IStyledInputProps> = ({ validation, ...props }) => {
  return <div style={{ position: 'relative' }}>
    <div className={style.FormField} style={{ marginTop: '20px' }} >
      {props.label && <label style={{ color: '#8d9094', position: 'absolute', top: '0px' }}>{props.label}</label>}
      <input className={style.Input}  {...props} {...validation} />
    </div>
  </div>
}

export const StyledInputPassword: React.FC<IStyledInputProps> = ({ ...props }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  return <>
    <StyledInput {...props} type={isPasswordShown ? 'text' : 'password'} />
    <span
      style={
        {
          position: 'absolute',
          right: '10px',
          top: '20px',
          fontSize: '22px',
          color: 'white',
          cursor: 'pointer'
        }}
      onClick={() => setIsPasswordShown(prev => !prev)}
    >{isPasswordShown ? <span>&#8413;</span> : <span>&#8416;</span>}</span>
  </>

}

export default StyledInput