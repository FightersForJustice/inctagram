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
import { useTranslation } from 'react-i18next'
import { ImageInfo, StatesСomponentType } from './type'
import { Loading } from '@/components/common/Loaders/Loading'
import Image from 'next/image'

type Props = {
  avatarUrl: ImageInfo[]
}

export const ImgCrop: React.FC<Props> = (props) => {

  const { t } = useTranslation()
  const translate = (key: string): string => t(`add_profile_photo.${key}`)

  const [avatarDelete] = useAvatarDeleteMutation()

  const [ModalActive, setModalActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [crop, setCrop] = useState<Crop>({ unit: 'px', x: 25, y: 25, width: 192, height: 192 })
  const [croppedImageUrl, setCroppedImageUrl] = useState<string | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string>('');
  const [statesСomponent, setStatesСomponent] = useState<StatesСomponentType>('')
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    props.avatarUrl.length == 2 ? setAvatar(props.avatarUrl[0].url) : ''
  }, []);


  const handlerDeleteAvatar = () => {
    setIsLoading(true)
    avatarDelete({})
      .then(() => {
        setAvatar('')
        setIsLoading(false)
      })
  }
  const hendlerOpenModal = () => {
    setModalActive(true)
    setStatesСomponent("start")
  }

  return (
    <>
      {isLoading && <Loading />}
      <Modal active={ModalActive} setActive={setModalActive} title={translate('add_profile_photo')} close={true}>
        {statesСomponent == "start" ?
          <StartImg
            setUploadedImage={setUploadedImage}
            setStatesСomponent={setStatesСomponent}
          /> : ""}
        {statesСomponent == "crop" ?
          <CropImg
            crop={crop}
            uploadedImage={uploadedImage}
            setCrop={setCrop}
            setCroppedImageUrl={setCroppedImageUrl}
            setStatesСomponent={setStatesСomponent}
          /> : ""}
        {statesСomponent == "save" ?
          <ImgSave
            croppedImageUrl={croppedImageUrl}
            setStatesСomponent={setStatesСomponent}
            setCroppedImageUrl={setCroppedImageUrl}
            setModalActive={setModalActive}
            setAvatar={setAvatar}
            setIsLoading={setIsLoading}
          /> : ""}
      </Modal>
      <div className={s.avatarBloc}>
        {avatar === "" ?
          <div className={s.avatar}>
            <Image className={s.icon} width={30} height={30} src="/../icons/image-outline.svg" alt="img" />
          </div>
          :
          <>
            <div className={s.close} >
              <Image width={17} height={17} onClick={handlerDeleteAvatar} src="/../icons/close.svg" alt="Close" />
            </div>
            <div className={s.avatar}>
              <img className={s.img} src={avatar} alt="img" />
            </div>
          </>
        }
        <div className={s.blocButton}>
          <Button color={BUTTON_COLORS.OUTLINED} text={translate('add_profile_photo')} onClick={hendlerOpenModal}></Button>
        </div>
      </div>
    </>
  )
}
