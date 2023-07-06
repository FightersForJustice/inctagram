import { ICreateNewPassword } from "./NewPasswordTypes"

export const CreateNewPassword = async (props: ICreateNewPassword) => {
  const { recoveryCode, router, password, passwordCreateMutation, setServerError } = props

  if (typeof recoveryCode !== 'string') return;
  const response = await passwordCreateMutation({ recoveryCode, newPassword: password })
    .unwrap()
    .then(() => {
      router.push('/auth/success')
    })
    .catch((error: any) => {
      switch (error.status) {
        case 400: setServerError(error.data.messages[0].message);
        case 429: setServerError(error.data.messages[0].message);
        case 'FETCH_ERROR': setServerError(error.error);
        default: setServerError('A server error has occurred. Please try again');
      }
    })
}