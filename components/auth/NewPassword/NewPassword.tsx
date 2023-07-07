import style from './NewPassword.module.scss'
import { PasswordInput } from '../../common/Inputs/Inputs'
import { ValidatePassword } from './Validate'
import { MainButton } from '@/components/common/Buttons/Buttons'
import { INewPasswordProps } from './NewPasswordTypes'
import { Loading } from '@/components/common/Loaders/Loading'

const NewPassword = (props: INewPasswordProps) => {
  const { errors, serverError, isRecoverLoading, isCreatePasswordLoading, password, confirmPassword,
    register, handleChange, setPassword, setConfirmPassword, handleSubmit, onSubmit, } = props

  return (
    <div className={style.mainContainer}>
      <div className={style.form_wrapper}>
        {(isRecoverLoading || isCreatePasswordLoading) && (
          <div className={style.modal}>
            <Loading />
          </div>
        )}
        <h1 className={style.header}>Create New Password</h1>
        <form className={style.FormRoot} onSubmit={handleSubmit(onSubmit)}>
          <div className={style.input_wrapper}>
            <PasswordInput
              validation={{
                ...register('password', {
                  ...ValidatePassword(confirmPassword),
                  onChange: (e) => handleChange(e, setPassword),
                }),
              }}
              key="password"
              id="password"
              label="New password"
              placeholder="****************"
              style={errors.confirmPassword && errors.password && { border: '1px solid red' }}
            />
            {errors.confirmPassword && errors.password && <p style={{ color: 'red', float: 'left' }}>Error!</p>}
          </div>
          <div className={style.input_wrapper}>
            <PasswordInput
              validation={{
                ...register('confirmPassword', {
                  ...ValidatePassword(password),
                  onChange: (e) => handleChange(e, setConfirmPassword),
                }),
              }}
              key="confirmPassword"
              id="confirmPassword"
              label="Password confirmation"
              placeholder="***************"
              style={errors.confirmPassword && errors.password && { border: '1px solid red' }}
            />
            {errors.confirmPassword && errors.password && <p style={{ color: 'red', float: 'left' }}>Error!</p>}
          </div>

          <div className={style.error_message}>
            {errors.password && errors.password.type === 'value' && <p>Passwords doesn't match</p>}
            {errors.password && errors.confirmPassword && <p>{errors.password.message}</p>}
            {serverError}
          </div>
          <MainButton
            onClick={() => onSubmit}
            title="Create New Password"
            disabled={false}
            style={{ width: '100%', marginTop: '30px' }}
          />
        </form>
      </div>
    </div>
  )
}

export default NewPassword