export const ValidateEmail = {
  required: {
    value: true,
    message: 'Email_field_empty',
  },
  pattern: {
    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    message: 'Email_invalid',
  },
}
