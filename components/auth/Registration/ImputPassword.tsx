import { useState } from 'react'
import s from './ImputPassword.module.scss' 

interface IMainInputProps extends React.HTMLAttributes<HTMLInputElement> {
  validation?: object
}


export const MainInput: React.FC<IMainInputProps> = ({ validation, ...props }) => {
  
  const [type, setType] = useState('password')
  const clickImg = () => { type == 'password' ? setType('text') : setType('password') }
  const classs  = type === 'password' ? s.EyeOff : s.EyeOn
  return (
    <div className={s.block}>
      <input type={type} {...props} {...validation} />
      <div onClick={clickImg} className={s.img +' '+ classs}></div>
    </div>
  )
}