import { useState } from 'react'
import MyPost from '../MyPost/MyPost'
import { ProfileType } from '../Profile-Settings/profileSettingsTypes'
import MyProfile from './MyProfile'

const MyProfileContainer = ({ userProfile }: ProfileType) => {
  return (
    <>
      <MyProfile userProfile={userProfile} />
    </>
  )
}

export default MyProfileContainer
