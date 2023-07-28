import RegistrationForm from './RegistrationForm'
import { ErrorMessagerType, FormValuesType, PrintModalType } from './type'
import { useRegistrationMutation } from '@/assets/api/auth/authApi'
import { useState } from 'react'
import { Modal } from '@/components/common/Modal/Modal'

const RegistrationFormContainer = () => {
  const ModalNull = () => {
    setPrintModal({ title: 'null', content: 'null' })
  }
  const [printModal, setPrintModal] = useState<PrintModalType>({ title: 'null', content: 'null' })
  const [arrayErrorMessager, setArrayErrorMessager] = useState<ErrorMessagerType[]>([])
  const [registers, { isLoading }] = useRegistrationMutation()
  const ArrayErrorMessager = () => setArrayErrorMessager([])
  const errorMessageEmail = arrayErrorMessager.find((obj) => obj.field === 'email')
  const errorMessageName = arrayErrorMessager.find((obj) => obj.field === 'name')
  const errorMessagePassword = arrayErrorMessager.find((obj) => obj.field === 'password')
  const onSubmit = async (data: FormValuesType) => {

    registers(data)
      .unwrap()
      .then(() => {
        setPrintModal({ title: 'Email sent', content: 'We have sent a link to confirm your email to ' + data.email })
      })
      .catch((error) => {
        if (error.status == 'FETCH_ERROR') {
          setPrintModal({ title: 'Error', content: 'error' })
        }
        if (typeof error.data != 'undefined') {
          setArrayErrorMessager(error.data.messages)
        }
      })
  }
  return (
    <div>
      {printModal.title != 'null' ? <Modal title={printModal.title} content={printModal.content} onClick={ModalNull} /> : ''}
      <RegistrationForm
        onSubmit={onSubmit}
        isLoading={isLoading}
        errorMessageEmail={errorMessageEmail}
        errorMessageName={errorMessageName}
        errorMessagePassword={errorMessagePassword}
        ArrayErrorMessager={ArrayErrorMessager}
      />
    </div>
  )
}

export default RegistrationFormContainer
