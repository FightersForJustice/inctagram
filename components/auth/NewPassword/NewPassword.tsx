import style from './NewPassword.module.scss'
import { PasswordInput } from '../../common/Inputs/Inputs'
import { ValidatePassword } from './validate'
import { MainButton } from '@/components/common/Buttons/Buttons'
import { INewPasswordProps } from './newPasswordTypes'
import { Loading } from '@/components/common/Loaders/Loading'
import { useTranslation } from 'react-i18next'

const NewPassword = (props: INewPasswordProps) => {
  const { t } = useTranslation()
  const translate = (key: string): string => t(`forgot_password.${key}`)
  const {
    errors,
    serverError,
    isLoaderShown,
    password,
    confirmPassword,
    register,
    handleChange,
    setPassword,
    setConfirmPassword,
    handleSubmit,
    onSubmit,
  } = props

  return (
    <div className={style.mainContainer}>
      <div className={style.form_wrapper}>
        {isLoaderShown && (
          <div className={style.modal}>
            <Loading />
          </div>
        )}
        <form
          className={style.FormRoot}
          onSubmit={handleSubmit(onSubmit)}
          style={{ visibility: isLoaderShown ? 'hidden' : 'visible' }}
        >
          <h1 className={style.header}>{translate('Create_New_Password')}</h1>
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
              label={translate('New_password')}
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
              label={translate('Password_confirmation')}
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
            title={translate('Create_New_Password')}
            disabled={false}
            style={{ width: '100%', marginTop: '30px' }}
          />
        </form>
      </div>
    </div>
  )
}

export default NewPassword
