import Image from 'next/image'
import { ProfileType } from '../Profile-Settings/profileSettingsTypes'
import s from './style.module.scss'
import { Button } from '@/@ui/ui-kit/Button/Button'
import { BUTTON_COLORS } from '@/@ui/ui-kit/Button/constants'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { userRouts } from '@/app/routes/userRouts'
const MyProfile = ({ userProfile }: ProfileType) => {
  const router = useRouter()

  const handleProfileSettings = () => {
    router.push(userRouts.profileSettings)
  }

  console.log(userProfile)

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
            <p className={s.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco{' '}
              <Link href="#" className={s.link}>
                laboris nisi ut aliquip ex ea commodo consequat.
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className={s.post}></div>
    </div>
  )
}

export default MyProfile
