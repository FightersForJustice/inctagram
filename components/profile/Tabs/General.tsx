import React, { useState } from 'react'
import { User } from '@/assets/api/auth/userSlice'
import style from './ProfileTabs.module.scss'
import commonStyle from '../../common/Inputs/Inputs.module.scss'
import { FormInput, FormTextarea } from '@/components/common/Inputs/Inputs'

const General = ({ profileData }: { profileData: User }) => {
  const [updatedUserData, setUpdatedUserData] = useState<User>(userData)

  const handleSave = async () => {
    const changedData: Partial<User> = {}

    if (updatedUserData.userName !== userData.userName) {
      changedData.userName = updatedUserData.userName
    }

    if (updatedUserData.firstName !== userData.firstName) {
      changedData.firstName = updatedUserData.firstName
    }

    if (updatedUserData.lastName !== userData.lastName) {
      changedData.lastName = updatedUserData.lastName
    }

    if (updatedUserData.city !== userData.city) {
      changedData.city = updatedUserData.city
    }

    if (updatedUserData.aboutMe !== userData.aboutMe) {
      changedData.aboutMe = updatedUserData.aboutMe
    }

    if (Object.keys(changedData).length > 0) {
      try {
        // await updateProfile(changedData).unwrap()
        // await refetchProfileData()
      } catch (error) {
        alert(error)
      }
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setUpdatedUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <form className={style.form}>
      <FormInput label="Username" id="username" name="userName" value={updatedUserData.userName} onChange={handleInputChange} />
      <FormInput
        label="First Name"
        id="first-name"
        name="firstName"
        value={updatedUserData.firstName}
        onChange={handleInputChange}
      />
      <FormInput label="Last Name" id="last-name" name="lastName" value={updatedUserData.lastName} onChange={handleInputChange} />

      <fieldset className={style.Fieldset}>
        <label className={commonStyle.Label} htmlFor="date">
          Date of Birth
        </label>
        <input className={commonStyle.Input} id="date" type="date" />
      </fieldset>

      <FormInput label="City" id="city" name="city" value={updatedUserData.city} onChange={handleInputChange} />
      <FormTextarea label=" About Me" id="aboutMe" name="aboutMe" value={updatedUserData.aboutMe} onChange={handleInputChange} />

      <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
        <button type="button" onClick={handleSave} className="Button green">
          Save changes
        </button>
      </div>
    </form>
  )
}

export default General
