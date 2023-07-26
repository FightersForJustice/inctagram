import ReactCrop, { centerCrop, makeAspectCrop, type Crop } from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import s from "./index.module.scss"
import { useState } from 'react'
import Modal from '@/@ui/ui-kit/Modal/Modal'
import StartImg from './Start/Start'
import CropImg from './Crop/Crop'
import ImgSave from './Save/Save'
import { Button } from '@/@ui/ui-kit/Button/Button'
import { BUTTON_COLORS } from '@/@ui/ui-kit/Button/constants'

type cron = {
  unit: string
  x: number
  y: number
  width: number
  height: number
}

const ImgCrop = () => {
  const [ModalActive, setModalActive] = useState(false);
  const [crop, setCrop] = useState<Crop>({ unit: 'px', x: 25, y: 25, width: 192, height: 192 })
  const [croppedImageUrl, setCroppedImageUrl] = useState<string | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string>('');
  const [statesСomponent, setStatesСomponent] = useState<string>('')
  const buttonOpen = () => { setModalActive(true), setStatesСomponent("start") }
  const img: string = "https://forum.rgta5.ru/data/avatars/l/72/72760.jpg?1686417549"
  return (
    <>
      <div className={s.www}>{/* потом удалить обезательно*/}
        <Modal active={ModalActive} setActive={setModalActive} title="Add a Profile Photo" close={true}>
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
          /> : ""}
        </Modal>
        <div className={s.avatarBloc}>
          {img == "" ?
            <div className={s.avatar}>
              <img className={s.icon} src="icons/image-outline.svg" alt="img" />
            </div>
            :
            <div className={s.avatar}>
              <img className={s.img} src={img} alt="img" />
            </div>
          }
          <div className={s.blocButton}>
            <Button color={BUTTON_COLORS.OUTLINED} text="Add a Profile Photo" onClick={buttonOpen}></Button>
          </div>
        </div>
      </div>
    </>
  )
}
export default ImgCrop;