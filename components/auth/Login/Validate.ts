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
  pattern: {
    value: /^[a-zA-Z0-9_-]*$/i,
    message: '* Invalid username format',
  },
}
export const ValidateEmail = {
  required: {
    value: true,
    message: '* Required field to fill in',
  },
  maxLength: {
    value: 30,
    message: '* Username must be shorter than or equal to 30 characters',
  },
  pattern: {
    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
    message: '* Invalid email format',
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
  pattern: {
    value:  /^(?!.*\s)/,
    message: ' Don`t use spaces in password',
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
