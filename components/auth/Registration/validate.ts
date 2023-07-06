export const ValidateUsername = {
  required: {
    value: true,
    message: '* Required field to fill in',
  },
  maxLength: {
    value: 30,
    message: '* Username must be shorter than or equal to 30 characters',
  },
  minLength: {
    value: 6,
    message: '* Username must be longer than or equal to 6 characters',
  },
}
export const ValidateImail = {
  required: {
    value: true,
    message: '* Required field to fill in',
  },
  maxLength: {
    value: 30,
    message: '* Username must be shorter than or equal to 30 characters',
  },
  minLength: {
    value: 6,
    message: '* Username must be longer than or equal to 6 characters',
  },
}
export const ValidatePassword = {
  required: {
    value: true,
    message: '* Required field to fill in',
  },
  maxLength: {
    value: 20,
    message: '* Password must be shorter than or equal to 20 characters',
  },
  minLength: {
    value: 6,
    message: '* Password must be longer than or equal to 6 characters',
  },
}
export const ValidatePassword2 = {
  required: {
    value: true,
    message: '* Required field to fill in',
  },
}
