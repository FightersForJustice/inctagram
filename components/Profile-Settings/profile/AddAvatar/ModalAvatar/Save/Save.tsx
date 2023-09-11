import { Button } from '@/@ui/ui-kit/Button/Button'
import s from './save.module.scss'
import { BUTTON_COLORS } from '@/@ui/ui-kit/Button/constants'
import { useAvatarAddMutation } from '@/assets/api/user/profileQueryApi'
import { Loading } from '@/components/common/Loaders/Loading'
import { useState } from 'react'
import { ComponentSaveProps } from '../../type'
import { useTranslation } from 'react-i18next'
import { dataURLtoFile } from '@/utils/Image/dataURLtoFile'
import { ServerErrorResponse } from '@/assets/api/auth/authTypes'
import { useDispatch } from 'react-redux'
import { setUserProfileSSR } from '@/core/slices/userSlice'
import { useProfileSettingsSSRSelector } from '@/core/selectors/profileSettingsSSR '

export const ImgSave: React.FC<ComponentSaveProps> = (Props) => {
  const { croppedImageUrl, setModalActive, setAvatar, setStatesComponent, setCroppedImageUrl } = Props

  const { t } = useTranslation()
  const translate = (key: string): string => t(`add_profile_photo.${key}`)
  const dispatch = useDispatch()
  const userProfile = useProfileSettingsSSRSelector()

  const [AvatarAdd] = useAvatarAddMutation()
  const [loading, setIsLoading] = useState(false)

  const handlerBack = () => {
    setStatesComponent('crop')
    setCroppedImageUrl(null)
  }
  const handlerSave = () => {
    if (croppedImageUrl) {
      var file = dataURLtoFile(croppedImageUrl, 'a.png')
      const formData = new FormData()
      formData.append('file', file)
      setIsLoading(true)
      AvatarAdd(formData)
        .unwrap()
        .then((data) => {
          setAvatar(data.avatars[0].url)
          dispatch(
            setUserProfileSSR({
              ...userProfile,
              avatars: data.avatars,
            })
          )
          setModalActive(false)
        })
        .catch((error: ServerErrorResponse) => {
          console.log(error)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }

  return (
    <div className={s.content}>
      {loading ? <Loading /> : ''}
      {croppedImageUrl && <img className={s.img} src={croppedImageUrl} alt="Avatar" />}
      <div className={s.buttons}>
        <Button color={BUTTON_COLORS.OUTLINED} text={translate('back')} onClick={handlerBack}></Button>
        <Button text={translate('Save')} onClick={handlerSave}></Button>
      </div>
    </div>
  )
}
