import { ChangeEvent, Dispatch, SetStateAction } from "react"
import { FieldErrors, SubmitHandler, UseFormHandleSubmit, UseFormRegister } from "react-hook-form"

export interface IFormInput {
  password: string
  confirmPassword: string
}

export interface INewPasswordProps {
  isRecoveryCodeValid: boolean
  isRecoverLoading: boolean
  isCreatePasswordLoading: boolean
  password: string
  confirmPassword: string
  errors: FieldErrors<IFormInput>
  setConfirmPassword: Dispatch<SetStateAction<string>>
  setPassword: Dispatch<SetStateAction<string>>
  handleSubmit: UseFormHandleSubmit<IFormInput, undefined>
  handleChange: (e: ChangeEvent<HTMLInputElement>, setValue: any) => void
  register: UseFormRegister<IFormInput>
  onSubmit: SubmitHandler<IFormInput>
}
