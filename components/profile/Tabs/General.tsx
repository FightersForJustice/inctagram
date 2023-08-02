import React, { useState } from 'react'
import style from './ProfileTabs.module.scss'
import commonStyle from '../../common/Inputs/Inputs.module.scss'
import { FormInput, FormTextarea } from '@/components/common/Inputs/Inputs'
import { UserProfile } from '@/assets/api/user/userTypes'
import { useUpdateProfileMutation } from '@/assets/api/user/profileQueryApi'
import { Loading } from '@/components/common/Loaders/Loading'
import { axiosAPI } from '@/assets/api/api'
import { Button } from '@/@ui/ui-kit/Button/Button'
import { Modal } from '@/components/common/Modal/Modal'

type GeneralType = {
  userProfile: UserProfile
}

type ChangedFields = {
  [field: string]: string
}

const General: React.FC<GeneralType> = ({ userProfile }) => {
  const [updateProfile] = useUpdateProfileMutation()
  const [updatedUserProfile, setUpdatedUserProfile] = useState<UserProfile>(userProfile)
  const [changedFields, setChangedFields] = useState<ChangedFields>({})
  const [isLoading, setIsLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

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
    const { name, value } = event.target
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

      <form className={style.form}>
        <FormInput
          label="Username"
          id="username"
          name="userName"
          value={updatedUserProfile.userName}
          onChange={handleInputChange}
        />
        <FormInput
          label="First Name"
          id="first-name"
          name="firstName"
          value={updatedUserProfile.firstName}
          onChange={handleInputChange}
        />
        <FormInput
          label="Last Name"
          id="last-name"
          name="lastName"
          value={updatedUserProfile.lastName}
          onChange={handleInputChange}
        />

        <fieldset className={style.Fieldset}>
          <label className={commonStyle.Label} htmlFor="date">
            Date of Birth
          </label>
          <input className={commonStyle.Input} id="date" type="date" />
        </fieldset>

        <FormInput label="City" id="city" name="city" value={updatedUserProfile.city} onChange={handleInputChange} />
        <FormTextarea
          label="About Me"
          id="aboutMe"
          name="aboutMe"
          value={updatedUserProfile.aboutMe}
          onChange={handleInputChange}
        />

        <Button text="Save changes" onClick={handleSave} disabled={isLoading} />
      </form>

      {isModalOpen && (
        <Modal
          title="Sorry!"
          content="Your data was not changed. Please reload the page."
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  )
}

export default General
