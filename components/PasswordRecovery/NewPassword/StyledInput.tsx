import style from '@/components/Login/LoginForm.module.css'
import { useState } from 'react'

interface IStyledInputProps extends React.HTMLAttributes<HTMLInputElement> {
  validation?: object
  type?: string
}

const StyledInput: React.FC<IStyledInputProps> = ({ validation, ...props }) => {
  return <div className={style.FormField} style={{ position: 'relative' }} >
    <input className={style.Input}  {...props} {...validation} />
  </div>
}

export const StyledInputPassword: React.FC<IStyledInputProps> = ({ ...props }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  return <div style={{ position: 'relative' }}>
    <StyledInput {...props} type={isPasswordShown ? 'text' : 'password'} />
    <span
      style={
        {
          position: 'absolute',
          right: '10px',
          marginTop: '-62px',
          fontSize: '22px',
          color: 'white',
          cursor: 'pointer'
        }}
      onClick={() => setIsPasswordShown(prev => !prev)}
    >{isPasswordShown ? <span>&#8413;</span> : <span>&#8416;</span>}</span>
  </div>
}

export default StyledInput