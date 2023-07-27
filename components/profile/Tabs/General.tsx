import React, { useState } from 'react'
import { User } from '@/assets/api/auth/userSlice'
import style from './ProfileTabs.module.scss'
import commonStyle from '../../common/Inputs/Inputs.module.scss'
import { FormInput, FormTextarea } from '@/components/common/Inputs/Inputs'
import { UserProfile } from '@/assets/api/user/userTypes'
import { useUpdateProfileMutation } from '@/assets/api/user/profileQueryApi'
import { Loading } from '@/components/common/Loaders/Loading'
import { serverAPI } from '@/assets/api/api'

type GeneralType = {
  userProfile: UserProfile
}

const General: React.FC<GeneralType> = ({ userProfile }) => {
  const [updatedUserData, setUpdatedUserData] = useState<UserProfile>(userProfile)
  const [updateProfile] = useUpdateProfileMutation()
  const [changedFields, setChangedFields] = useState<any>({})
  const [isLoading, setIsLoading] = useState(false)

  const handleSave = async () => {
    try {
      setIsLoading(true)
      // Send separate requests for each changed field
      const promises = Object.keys(changedFields).map(async (field) => {
        const data: any = { [field]: changedFields[field] }
        return updateProfile(data).unwrap()
      })

      await Promise.allSettled(promises)
      await serverAPI.profile.getProfile()
      setIsLoading(false)

      // Update the local state with the new profile data
      // (assuming serverAPI.profile.getProfile() returns the updated user profile data)
      const updatedProfileData: any = await serverAPI.profile.getProfile()
      setUpdatedUserData(updatedProfileData)

      // Optionally, you can also reset the changedFields state here
      setChangedFields({})
    } catch (error) {
      setIsLoading(false)
      alert('Sorry! Your data was not changed. Please reload the page')
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setUpdatedUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }))

    // Add the changed data to the corresponding field in changedFields
    setChangedFields((prevFields: any) => ({
      ...prevFields,
      [name]: value,
    }))
  }

  return (
    <>
      {isLoading && <Loading />}

      <form className={style.form}>
        <FormInput label="Username" id="username" name="userName" value={updatedUserData.userName} onChange={handleInputChange} />
        <FormInput
          label="First Name"
          id="first-name"
          name="firstName"
          value={updatedUserData.firstName}
          onChange={handleInputChange}
        />
        <FormInput
          label="Last Name"
          id="last-name"
          name="lastName"
          value={updatedUserData.lastName}
          onChange={handleInputChange}
        />

        <fieldset className={style.Fieldset}>
          <label className={commonStyle.Label} htmlFor="date">
            Date of Birth
          </label>
          <input className={commonStyle.Input} id="date" type="date" />
        </fieldset>

        <FormInput label="City" id="city" name="city" value={updatedUserData.city} onChange={handleInputChange} />
        <FormTextarea
          label=" About Me"
          id="aboutMe"
          name="aboutMe"
          value={updatedUserData.aboutMe}
          onChange={handleInputChange}
        />

        <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
          <button type="button" onClick={handleSave} className="Button green">
            Save changes
          </button>
        </div>
      </form>
    </>
  )
}

export default General
