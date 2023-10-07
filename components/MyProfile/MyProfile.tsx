import Image from 'next/image'
import { ProfileType } from '../Profile-Settings/profileSettingsTypes'
import s from './style.module.scss'
import { Button } from '@/@ui/ui-kit/Button/Button'
import { BUTTON_COLORS } from '@/@ui/ui-kit/Button/constants'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { userRouts } from '@/app/routes/userRouts'
import { usePostsUserMutation } from '@/assets/api/myProfile/PostUserQueryApi'
import { setPostUser, setPostsUserLast } from '@/core/slices/postUserSlice'
import { useDispatch } from 'react-redux'
import { usePostUserSelector } from '@/core/selectors/postUser'
import { useScrollEffect } from '@/hooks/useScrollEffect'
import { useEffect, useState } from 'react'

const MyProfile = ({ userProfile }: ProfileType) => {
  const router = useRouter()

  const [fetching, setFetching] = useState(false)

  const dispatch = useDispatch()

  const handleProfileSettings = () => {
    router.push(userRouts.profileSettings)
  }

  const [postsUserMutation, { isLoading }] = usePostsUserMutation()
  const postUserData = usePostUserSelector()
  const postLast: number = Math.min(...postUserData.items.map((item) => item.id))
  useEffect(() => {
    dispatch(setPostsUserLast({ postLast }))
  }, [postLast])
  const handleScroll = () => {
    postsUserMutation(postUserData.postLast)
      .unwrap()
      .then((data) => {
        console.log(data)
        dispatch(setPostUser(data))
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setFetching(false)
      })
  }
  useScrollEffect(handleScroll, fetching, setFetching)
  return (
    <div className={s.main}>
      <div className={s.header}>
        <Image className={s.avatar} width={204} height={204} src={userProfile.avatars[0].url} alt="Avatar" />
        <div className={s.info}>
          <div className={s.blockTop}>
            <div className={s.name}>{userProfile.userName}</div>
            <div className={s.settings}>
              <Button color={BUTTON_COLORS.BASIC} onClick={handleProfileSettings} text="Profile Settings"></Button>
            </div>
          </div>
          <div className={s.centre}>
            <div className={s.item}>
              <span>2 218</span>
              <span>Following</span>
            </div>
            <div className={s.item}>
              <span>2 358</span>
              <span>Followers</span>
            </div>
            <div className={s.item}>
              <span>2 764</span>
              <span>Publications</span>
            </div>
          </div>
          <div className={s.blockBottom}>
            <p className={s.text}>{userProfile.aboutMe}</p>
          </div>
        </div>
      </div>
      <div className={s.post}>
        {postUserData.items.map((img, index) => (
          <Image width={234} height={228} src={img.images[1].url} alt="Post" />
        ))}
      </div>
    </div>
  )
}

export default MyProfile
