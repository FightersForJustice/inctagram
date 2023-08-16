import { SubmitHandler } from 'react-hook-form'
export type FormValuesTypeRegister = {
  userName: string
  email: string
  password: string
  password2: string
}
export type ErrorMessagerType = {
  field: string
  message: string
}
export type PrintModalType = {
  title: string
  content: string
}
export type RegistrationPropsType = {
  onSubmit: SubmitHandler<FormValuesTypeRegister>
  isLoading: boolean
  errorMessageEmail: ErrorMessagerType | undefined
  errorMessageName: ErrorMessagerType | undefined
  errorMessagePassword: ErrorMessagerType | undefined
  ArrayErrorMessager: () => void
}
