import { useTranslation } from "react-i18next"

export enum ValidateField {
  Email = 'email',
  Password = 'password',
  Username = 'username'
}
export const Validate = (validate: ValidateField) => {
  const { t } = useTranslation()
  const translate = (key: string): string => t(`Validate.${key}`)
  const Email = {
    required: {
      value: true,
      message: translate('required'),
    },
    maxLength: {
      value: 30,
      message: translate('emailMaxLength'),
    },
    pattern: {
      value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
      message: translate('invalidEmailFormat'),
    },
    minLength: {
      value: 6,
      message: translate('emailMinLength'),
    },
  }
  const Password = {
    required: {
      value: true,
      message: translate('required'),
    },
    pattern: {
      value: /^(?!.*\s)/,
      message: translate('passwordNoSpaces'),
    },
    maxLength: {
      value: 20,
      message: translate('passwordMaxLength'),
    },
    minLength: {
      value: 6,
      message: translate('passwordMinLength'),
    },
  }
  const Username = {
    required: {
      value: true,
      message: translate('required'),
    },
    maxLength: {
      value: 30,
      message: translate('usernameMaxLength'),
    },
    minLength: {
      value: 6,
      message: translate('usernameMinLength'),
    },
    pattern: {
      value: /^[a-zA-Z0-9_-]*$/i,
      message: translate('invalidUsernameFormat')
    },
  }
  switch (validate) {
    case ValidateField.Email:
      return Email
    case ValidateField.Password:
      return Password
    case ValidateField.Username:
      return Username
    default:

  }

}

export const confirmPassword = (value: string, watch: (val: string) => string) => {
  if (watch('password') !== value) {
    return "Your passwords do not match";
  }
};
