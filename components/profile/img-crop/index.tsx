import { type Crop } from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import s from "./index.module.scss"
import { useEffect, useState } from 'react'
import Modal from '@/@ui/ui-kit/Modal/Modal'
import StartImg from './Start/Start'
import CropImg from './Crop/Crop'
import ImgSave from './Save/Save'
import { Button } from '@/@ui/ui-kit/Button/Button'
import { BUTTON_COLORS } from '@/@ui/ui-kit/Button/constants'
import { useAvatarDeleteMutation } from '@/assets/api/user/profileQueryApi'
import { ComponentMainProps } from './type'
import { useTranslation } from 'react-i18next'



const ImgCrop: React.FC<ComponentMainProps> = (props) => {
  const { avatarUrl, setIsLoading } = props


  const { t } = useTranslation()
  const translate = (key: string): string => t(`add_profile_photo.${key}`)


  const [avatar, setAvatar] = useState('');
  useEffect(() => {
    avatarUrl.length == 2 ? setAvatar(avatarUrl[0].url) : ''
  }, []);
  const [avatarDelete] = useAvatarDeleteMutation()
  const Delete = () => {
    setIsLoading(true)
    avatarDelete({})
      .then(() => {
        setAvatar('')
        setIsLoading(false)
      })
  }
  const [ModalActive, setModalActive] = useState(false);
  const [crop, setCrop] = useState<Crop>({ unit: 'px', x: 25, y: 25, width: 192, height: 192 })
  const [croppedImageUrl, setCroppedImageUrl] = useState<string | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string>('');
  const [statesСomponent, setStatesСomponent] = useState<string>('')
  const buttonOpen = () => { setModalActive(true), setStatesСomponent("start") }
  return (
    <>
      <Modal active={ModalActive} setActive={setModalActive} title={translate('add_profile_photo')} close={true}>
        {statesСomponent == "start" ? <StartImg setUploadedImage={setUploadedImage} setStatesСomponent={setStatesСomponent} /> : ""}
        {statesСomponent == "crop" ? <CropImg
          crop={crop}
          uploadedImage={uploadedImage}
          setCrop={setCrop}
          setCroppedImageUrl={setCroppedImageUrl}
          setStatesСomponent={setStatesСomponent}
        /> : ""}
        {statesСomponent == "save" ? <ImgSave
          croppedImageUrl={croppedImageUrl}
          setStatesСomponent={setStatesСomponent}
          setCroppedImageUrl={setCroppedImageUrl}
          setModalActive={setModalActive}
          setAvatar={setAvatar}
          setIsLoading={setIsLoading}
        /> : ""}
      </Modal>
      <div className={s.avatarBloc}>
        {avatar === "" ? '' :
          <div className={s.close} >
            <img className={s.img} onClick={Delete} src="/../icons/close.svg" alt="Close" />
          </div>
        }
        {avatar === "" ?
          <div className={s.avatar}>
            <img className={s.icon} src="/../icons/image-outline.svg" alt="img" />
          </div>
          :
          <div className={s.avatar}>
            <img className={s.img} src={avatar} alt="img" />
          </div>
        }
        <div className={s.blocButton}>
          <Button color={BUTTON_COLORS.OUTLINED} text={translate('add_profile_photo')} onClick={buttonOpen}></Button>
        </div>
      </div>
    </>
  )
}
export default ImgCrop;