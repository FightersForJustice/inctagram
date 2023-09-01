import React, { useState } from 'react'
import style from './ProfileTabs.module.scss'
import commonStyle from '@/@ui/ui-kit/Inputs/Inputs.module.scss'
import { FormInput, FormTextarea } from '@/@ui/ui-kit/Inputs/Inputs'
import { UserProfile } from '@/assets/api/user/userTypes'
import { useUpdateProfileMutation } from '@/assets/api/user/profileQueryApi'
import { Loading } from '@/components/common/Loaders/Loading'
import { axiosAPI } from '@/assets/api/api'
import { Button } from '@/@ui/ui-kit/Button/Button'
import { Modal } from '@/components/common/Modal/Modal'
import { useTranslation } from 'react-i18next'
import { TextArea } from '@/@ui/ui-kit/Textareas/Textarea'
import { MainDatePicker, saveToArray } from '@/@ui/ui-kit/DatePicker/DatePicker'
import { ImgCrop } from '../AddAvatar'
import { TEXTAEREA_COLORS } from '@/@ui/ui-kit/Textareas/constants'

type GeneralType = {
  userProfile: UserProfile
}

type ChangedFields = {
  [field: string]: string
}

const General: React.FC<GeneralType> = ({ userProfile }) => {
  const [validationError, setValidationError] = useState(false)
  const [updateProfile] = useUpdateProfileMutation()
  const [updatedUserProfile, setUpdatedUserProfile] = useState<UserProfile>(userProfile)
  const [changedFields, setChangedFields] = useState<ChangedFields>({})
  const [isLoading, setIsLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { t } = useTranslation()
  const translate = (key: string): string => t(`profile_settings__general.${key}`)

  const handleSave = async () => {
    try {
      setIsLoading(true)

      // Send separate requests for each changed field
      const promises = Object.keys(changedFields).map(async (field) => {
        const data = { [field]: changedFields[field] }
        return updateProfile(data).unwrap()
      })

      await Promise.allSettled(promises)
      await axiosAPI.profile.getProfile()

      const updatedProfileData: UserProfile = await axiosAPI.profile.getProfile()
      setUpdatedUserProfile(updatedProfileData)

      setChangedFields({})
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      setIsModalOpen(true)
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newValue = event.target.value
    const { name, value } = event.target
    if (name === 'aboutMe') {
      if (value.length > 200) {
        setValidationError(true)
      } else {
        setValidationError(false)
      }
    }
    setUpdatedUserProfile((prevData) => ({
      ...prevData,
      [name]: value,
    }))

    // Add the changed data to the corresponding field in changedFields
    setChangedFields((prevFields: ChangedFields) => ({
      ...prevFields,
      [name]: value,
    }))
  }
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
            <label className={commonStyle.label} htmlFor="date">
              {translate('dateOfBirth')}
            </label>
            <MainDatePicker
              id="date"
              value={updatedUserProfile.dateOfBirth}
              setValue={saveToArray(setChangedFields, 'dateOfBirth')}
              disableFuture
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
          <Button text={translate('save_changes')} onClick={handleSave} disabled={isLoading} />
        </form>
      </div>
      {isModalOpen && (
        <Modal
          title={translate('modal_error_title')}
          content={translate('modal_error_content')}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  )
}

export default General
