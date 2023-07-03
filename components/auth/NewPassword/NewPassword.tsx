import { ChangeEvent, useState, FC, PropsWithChildren, useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import style from './NewPassword.module.scss'
import { PasswordInput } from '../../common/Inputs/Inputs'
import { ValidatePassword } from './validate'
import { MainButton } from '@/components/common/Buttons/buttons'
import { useRouter } from 'next/router'
import { useNewPasswordCreateMutation, useRecoveryCodeCheckMutation } from '@/assets/api/auth/authApi'

interface IFormInput {
  password: string
  confirmPassword: string
}

const NewPassword: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { register, handleSubmit, clearErrors, formState: { errors } }
    = useForm<IFormInput>({ mode: 'onSubmit' })
  const router = useRouter();
  const [password, setPassword] = useState('')
  const [serverError, setServerError] = useState('')
  const [isRecoveryCodeValid, setIsRecoveryCodeValid] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState('')
  const [recoveryMutation, { isLoading: isRecoverLoading }] = useRecoveryCodeCheckMutation()
  const [passwordCreateMutation, { isLoading: isCreatePasswordLoading }] = useNewPasswordCreateMutation()
  const recoveryCode = router.query["code"];
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const { password } = data

    try {
      if(typeof recoveryCode !== 'string') throw 'some error'
      const response = await passwordCreateMutation({ recoveryCode, newPassword: password })
        .unwrap()
        .then((data) => {
          alert('Success')
          router.push('/main')
        })
        .catch((error: any) => {
          setServerError(
            error.data.error === 'Unauthorized'
              ? 'The password or email you entered is incorrect. Please try again'
              : error.data.error
          )
          if (error.status == 'FETCH_ERROR') {
            alert('Server Error')
          }
          if (typeof error.data != 'undefined') {
            console.log(error.data.messages[0].message)
          }
        })
    } catch (error) {
      console.error('Failed to log in:', error)
    }
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>, setValue: any) => {
    clearErrors()
    setValue(e.target.value)
  }
  useEffect(() => {
    const CheckRecoveryCode = async () => {
      try {
        console.log(recoveryCode)
        if (typeof recoveryCode !== 'string') throw 'Recovery code is invalid or expired';
        const response = await recoveryMutation({ recoveryCode })
          .unwrap()
          .then((data) => {
            setIsRecoveryCodeValid(true)
          })
          .catch((error: any) => {
            setServerError(
              error.data.error === 'Bad request'
                ? 'Bad request'
                : error.data.error
            )
            if (error.status == 'FETCH_ERROR') {
              alert('Server Error')
            }
            if (typeof error.data != 'undefined') {
              console.log(error.data.messages[0].message)
            }
          })
      } catch (error) {
        console.error('Failed', error)
      }
    }
    CheckRecoveryCode()
  }, [recoveryCode])

  return (
    <>
      {isRecoveryCodeValid
        ?
        <div className={style.mainContainer}>
          <div className={style.form_wrapper}>
            <h1 className={style.header}>Create New Password</h1>
            <form className={style.FormRoot} onSubmit={handleSubmit(onSubmit)}>
              <div className={style.input_wrapper}>
                <PasswordInput
                  validation={{
                    ...register('password', {
                      ...ValidatePassword(confirmPassword),
                      onChange: (e) => handleChange(e, setPassword),
                    })
                  }}
                  key='password'
                  id="password"
                  label='New password'
                  placeholder='****************'
                />
              </div>
              <div className={style.input_wrapper}>
                <PasswordInput
                  validation={{
                    ...register('confirmPassword', {
                      ...ValidatePassword(password),
                      onChange: (e) => handleChange(e, setConfirmPassword),
                    })
                  }}
                  key='confirmPassword'
                  id="confirmPassword"
                  label='Password confirmation'
                  placeholder='***************'
                  style={errors.confirmPassword && errors.password && { border: '1px solid red' }}
                />
                {errors.confirmPassword && errors.password && <p style={{ color: 'red', float: 'left' }}>Error!</p>}
              </div>

              <div className={style.error_message}>
                {errors.password && errors.password.type === 'value' && <p>Passwords doesn't match</p>}
                {errors.password && errors.confirmPassword && <p>{errors.password.message}</p>}
              </div>
              <MainButton onClick={() => onSubmit} title='Create New Password' disabled={false} style={{ width: '100%', marginTop: '30px' }} />
            </form>
          </div>
        </div>
        : isRecoverLoading ? <div>Loading</div> : <div style={{backgroundColor: 'red'}}>invalid</div>}
    </>
  )
}

export default NewPassword