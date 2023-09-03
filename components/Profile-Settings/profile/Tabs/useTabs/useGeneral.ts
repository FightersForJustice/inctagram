import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { axiosAPI } from '@/assets/api/api'
import { useProfileSettingsSSRSelector } from '@/core/selectors/profileSettingsSSR '
import { useUpdateProfileMutation } from '@/assets/api/user/profileQueryApi'

type ChangedFields = {
  [field: string]: string
}

export const useGeneral = () => {
  const userProfile = useProfileSettingsSSRSelector()
  const [validationError, setValidationError] = useState(false)
  const [updateProfile] = useUpdateProfileMutation()
  const [updatedUserProfile, setUpdatedUserProfile] = useState(userProfile)
  const [changedFields, setChangedFields] = useState<ChangedFields>({})
  const [isLoading, setIsLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setUpdatedUserProfile(userProfile)
  }, [userProfile])

  const { t } = useTranslation()
  const translate = (key: string): string => t(`profile_settings__general.${key}`)

  const disabled =
    Object.values(changedFields).some((value) => value.length < 1) ||
    changedFields.userName?.length < 6 ||
    validationError === true

  const handleSave = async () => {
    try {
      setIsLoading(true)

      if (Object.keys(changedFields).length > 0) {
        await updateProfile(changedFields).unwrap()
        const updatedProfileData: any = await axiosAPI.profile.getProfile()
        setUpdatedUserProfile(updatedProfileData)

        setChangedFields({})
      }

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

  return {
    updatedUserProfile,
    handleInputChange,
    handleSave,
    isLoading,
    isModalOpen,
    validationError,
    changedFields,
    translate,
    setChangedFields,
    disabled,
    setIsModalOpen
  }
}
