import { SubmitHandler } from 'react-hook-form'
export type FormValuesType = {
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
  onSubmit: SubmitHandler<FormValuesType>
  isLoading: boolean
  errorMessageEmail: any
  errorMessageName: any
  errorMessagePassword: any
  ArrayErrorMessager: any
}
