export const ValidateEmail = {
  required: {
    value: true,
    message: 'email_is_empty',
  },
  pattern: {
    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    message: 'email_invalid',
  },
}
