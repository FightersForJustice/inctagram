import { NewPasswordParamsData, ServerErrorResponse, recoveryCodeCheckParamsData } from '@/assets/api/auth/authTypes'
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, MutationDefinition } from '@reduxjs/toolkit/dist/query'
import { MutationActionCreatorResult } from '@reduxjs/toolkit/dist/query/core/buildInitiate'
import { MutationTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks'
import { NextRouter } from 'next/router'
import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { FieldErrors, SubmitHandler, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'

export interface IFormInput {
  password: string
  confirmPassword: string
}

export interface INewPasswordProps {
  isLoaderShown: boolean
  password: string
  confirmPassword: string
  errors: FieldErrors<IFormInput>
  serverError: string
  setConfirmPassword: Dispatch<SetStateAction<string>>
  setPassword: Dispatch<SetStateAction<string>>
  handleSubmit: UseFormHandleSubmit<IFormInput, undefined>
  handleChange: (e: ChangeEvent<HTMLInputElement>, setValue: any) => void
  register: UseFormRegister<IFormInput>
  onSubmit: SubmitHandler<IFormInput>
}

export interface ICheckRecoveryCode {
  setServerError: Dispatch<SetStateAction<string>>
  recoveryCode: string | string[] | undefined
  recoveryMutation: MutationTrigger<
    MutationDefinition<
      recoveryCodeCheckParamsData,
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>,
      never,
      void | ServerErrorResponse,
      'authQueryApi'
    >
  >
  router: NextRouter
}

export interface ICreateNewPassword {
  setServerError: Dispatch<SetStateAction<string>>
  setIsSucceed: Dispatch<SetStateAction<boolean>>
  recoveryCode: string | string[] | undefined
  passwordCreateMutation: (
    arg: NewPasswordParamsData
  ) => MutationActionCreatorResult<
    MutationDefinition<
      NewPasswordParamsData,
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>,
      never,
      void | ServerErrorResponse,
      'authQueryApi'
    >
  >
  router: NextRouter
  password: string
}
