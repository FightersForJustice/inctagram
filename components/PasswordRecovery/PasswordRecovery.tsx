import { ChangeEvent, useState, FC } from "react"
import { useForm, SubmitHandler } from "react-hook-form"

interface IFormInput {
  password: string
  confirmPassword: string
}

const PasswordRecovery: FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isPasswordShown, setIsPasswordShown] = useState({password: false, confirmPassword: false})
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    alert("new password set")
    setPassword('')
    setConfirmPassword('')
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>, setValue: any) => {
    setValue(e.target.value)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input
        {...register("password", {
          required: true, maxLength: 20, minLength: 6,
          onChange: (e) => handleChange(e, setPassword),
          validate: v => v === confirmPassword
        })}
        type={isPasswordShown.password ? "text" : "password"}
        id="password" />
      <label htmlFor="password" onClick={() => 
        setIsPasswordShown(prev => ({...prev, password: !prev.password}))}>o</label>
      <br></br>

      <input
        {...register("confirmPassword", {
          required: true, maxLength: 20, minLength: 6,
          onChange: (e) => handleChange(e, setConfirmPassword),
          validate: v => v === password
        })}
        type={isPasswordShown.confirmPassword ? "text" : "password"}
        id="confirmPassword" />
      <label htmlFor="confirmPassword" onClick={() => 
        setIsPasswordShown(prev => ({...prev, confirmPassword: !prev.confirmPassword}))}>o</label>
      <br></br>

      {errors.confirmPassword
        && (errors.confirmPassword.type === "minLength" || errors.confirmPassword.type === "maxLength")
        && <p>Your password must be between 6 and 20 characters</p>}
      {errors.confirmPassword && errors.password
        && (errors.confirmPassword.type === "required")
        && <p>Password field is empty</p>}
      {errors.confirmPassword && errors.password
        && (errors.confirmPassword.type === "validate")
        && <p>Passwords doesn't match</p>}
      <input type="submit" />
    </form>
  )
}

export default PasswordRecovery