export const ValidateEmail = {
  required: {
    value: true,
    message: 'Email field is empty',
  },
  pattern: {
    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    message: 'Email is invalid',
  },
}
