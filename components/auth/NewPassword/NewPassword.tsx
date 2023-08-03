import style from './NewPassword.module.scss'
import { PasswordInput } from '../../../@ui/ui-kit/Inputs/Inputs'
import { ValidatePassword } from './validate'
import { INewPasswordProps } from './newPasswordTypes'
import { Loading } from '@/components/common/Loaders/Loading'
import { useTranslation } from 'react-i18next'
import authStyle from '@/@ui/design/settings/commonAuth.module.scss'
import classNames from 'classnames'
import { Button } from '@/@ui/ui-kit/Button/Button'

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
    <div className={authStyle.authContainer}>
        {isLoaderShown && (
          <div className={authStyle.loading}>
            <Loading />
          </div>
        )}
        <form
          className={classNames(authStyle.authForm, style.authForm)}
          onSubmit={handleSubmit(onSubmit)}
          style={{ visibility: isLoaderShown ? 'hidden' : 'visible' }}
        >
          <h1 className={authStyle.header}>{translate('Create_new_password')}</h1>
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
              placeholder="******************"
              errormessages={[errors.confirmPassword && errors.password && 'Error!']}
            />
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
              placeholder="******************"
              errormessages={[errors.confirmPassword && errors.password && 'Error!']}
            />
          </div>

          <div>
            {errors.password && errors.password.type === 'value' && <p className={style.error_message}>{translate('Passwords_doesnt_match')}</p>}
            {errors.password?.message && errors.confirmPassword
            ? <p className={style.error_message}>{translate(errors.password.message)}</p>
            : <p className={style.hint_message}>{translate('password_hint')}</p>}
          </div>
          <div className={style.button_wrapper}>
          <Button
            onClick={handleSubmit(onSubmit)}
            text={translate('Create_new_password')}
            disabled={isLoaderShown}
            color='Primary'
          />
          </div>
        </form>
      </div>
  )
}

export default NewPassword
