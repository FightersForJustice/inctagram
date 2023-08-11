import RegistrationForm from './RegistrationForm'
import { ErrorMessagerType, FormValuesTypeRegister, PrintModalType } from './type'
import { useRegistrationMutation } from '@/assets/api/auth/authQueryApi'
import { useState } from 'react'
import { Modal } from '@/components/common/Modal/Modal'
import { useTranslation } from 'react-i18next'

const RegistrationFormContainer = () => {
  const ModalNull = () => {
    setPrintModal({ title: 'null', content: 'null' })
  }
  const [printModal, setPrintModal] = useState<PrintModalType>({ title: 'null', content: 'null' })
  const [arrayErrorMessager, setArrayErrorMessager] = useState<ErrorMessagerType[]>([])
  const [registers, { isLoading }] = useRegistrationMutation()
  const ArrayErrorMessager = () => {
    arrayErrorMessager.length == 0 ? "" : setArrayErrorMessager([])
  }
  const errorMessageEmail = arrayErrorMessager.find((obj) => obj.field === 'email')
  const errorMessageName = arrayErrorMessager.find((obj) => obj.field === 'name')
  const errorMessagePassword = arrayErrorMessager.find((obj) => obj.field === 'password')


  const { t } = useTranslation()
  const translate = (key: string, replacements: object = {}): string => {
    let translation = t(`merge_accounts.${key}`);
    for (const [placeholder, value] of Object.entries(replacements)) {
      translation = translation.replace(new RegExp(`{${placeholder}}`, "g"), value);
    }
    return translation;
  };
  const onSubmit = async (data: FormValuesTypeRegister) => {
    registers(data)
      .unwrap()
      .then(() => {
        setPrintModal({
          title: translate('Email_sent'), content: translate('confirm_message', { email: data.email })
        })
      })
      .catch((error: any) => {
        if (error.status == 'FETCH_ERROR') {
          setPrintModal({ title: translate('error_title'), content: translate('error_message') })
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
