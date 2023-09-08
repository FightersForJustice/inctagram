import React from 'react'
import style from './ProfileTabs.module.scss'
import { FormInput } from '@/@ui/ui-kit/Inputs/Inputs'
import { Loading } from '@/components/common/Loaders/Loading'
import { Button } from '@/@ui/ui-kit/Button/Button'
import Modal from '@/@ui/ui-kit/Modal/Modal'
import { TextArea } from '@/@ui/ui-kit/Textareas/Textarea'
import { MainDatePicker, saveToArray } from '@/@ui/ui-kit/DatePicker/DatePicker'
import { ImgCrop } from '../AddAvatar'
import { TEXTAEREA_COLORS } from '@/@ui/ui-kit/Textareas/constants'
import { useGeneral } from './useTabs/useGeneral'

const General: React.FC = () => {
  const {
    updatedUserProfile,
    handleInputChange,
    handleSave,
    isLoading,
    isModalOpen,
    validationError,
    changedFields,
    translate,
    disabled,
    setChangedFields,
    setIsModalOpen,
  } = useGeneral()

  return (
    <>
      {isLoading && <Loading />}
      <div className={style.content}>
        <ImgCrop avatarUrl={updatedUserProfile.avatars} />
        <form className={style.form}>
          <FormInput
            label={translate('username')}
            id="username"
            name={'userName'}
            value={updatedUserProfile.userName || ''}
            onChange={handleInputChange}
            validation={{ minLength: 6 }}
          />
          <FormInput
            label={translate('firstName')}
            id="first-name"
            name="firstName"
            value={updatedUserProfile.firstName || ''}
            onChange={handleInputChange}
          />
          <FormInput
            label={translate('lastName')}
            id="last-name"
            name="lastName"
            value={updatedUserProfile.lastName || ''}
            onChange={handleInputChange}
          />
          <fieldset className={style.Fieldset}>
            <MainDatePicker
              id="date"
              value={updatedUserProfile.dateOfBirth}
              setValue={saveToArray(setChangedFields, 'dateOfBirth')}
              disableFuture
              label={translate('dateOfBirth')}
            />
          </fieldset>

          <FormInput
            label={translate('city')}
            id="city"
            name="city"
            value={updatedUserProfile.city || ''}
            onChange={handleInputChange}
          />
          <TextArea
            label={translate('aboutMe')}
            id="aboutMe"
            name="aboutMe"
            onChange={handleInputChange}
            color={validationError ? TEXTAEREA_COLORS.ERROR : undefined}
            hasError={validationError}
            errorMessage={translate('textareaLengthValidationError')}
            value={updatedUserProfile.aboutMe}
          />
          <Button text={translate('save_changes')} onClick={handleSave} disabled={disabled} />
        </form>
      </div>
      {isModalOpen && (
        <Modal
          title={translate('modal_error_title')}
          children={translate('modal_error_content')}
          setActive={() => setIsModalOpen(false)}
          active={isModalOpen}
          close
        />
      )}
    </>
  )
}

export default General
