import ReactCrop, { centerCrop, makeAspectCrop, type Crop } from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import s from "./modal.module.scss"
import { ChangeEvent, useEffect, useState } from 'react'
import Modal from '@/@ui/ui-kit/Modal/Modal'
import StartImg from './Start/Start'
import CropImg from './Crop/Crop'
import ImgSave from './Save/Save'

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


  return (
    <>
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
      <br />
      <button onClick={() => { setModalActive(true), setStatesСomponent("start") }}>Modal open</button>
    </>
  )
}
export default ImgCrop;