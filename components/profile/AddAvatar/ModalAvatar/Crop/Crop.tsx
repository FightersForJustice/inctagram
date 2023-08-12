import ReactCrop, { type Crop } from 'react-image-crop'
import s from "./crop.module.scss"
import { Button } from '@/@ui/ui-kit/Button/Button'
import { BUTTON_COLORS } from '@/@ui/ui-kit/Button/constants'
import { useTranslation } from 'react-i18next';
import { Dispatch, SetStateAction } from 'react';
import { StatesСomponentType } from '../../type'
import { getCroppedImage } from '@/utils/Image/getCroppedImage';

export interface Props {
  crop: Crop;
  uploadedImage: string
  setCrop: Dispatch<SetStateAction<Crop>>
  setCroppedImageUrl: Dispatch<SetStateAction<string | null>>
  setStatesСomponent: Dispatch<SetStateAction<StatesСomponentType>>
}

export const CropImg: React.FC<Props> = (Props) => {

  const { crop, uploadedImage, setCrop, setCroppedImageUrl, setStatesСomponent } = Props

  const { t } = useTranslation()
  const translate = (key: string): string => t(`add_profile_photo.${key}`)

  const handlerCrop = () => {
    const image = document.createElement('img');
    image.src = uploadedImage;
    image.onload = () => {
      const croppedImage = getCroppedImage(image, crop);
      setCroppedImageUrl(croppedImage);
      setStatesСomponent("save")
    };
  }

  const handlerback = () => {
    setCroppedImageUrl(null)
    setStatesСomponent("start")
  }

  const handlerSetCrop = (c: SetStateAction<Crop>) => {
    setCrop(c)
  }

  return (
    <>
      <div className={s.contentCrop}>
        <ReactCrop crop={crop} minHeight={192} minWidth={192} circularCrop={true} aspect={1 / 1} onChange={handlerSetCrop}>
          <img src={uploadedImage} />
        </ReactCrop>
        <div className={s.buttons}>
          <Button color={BUTTON_COLORS.OUTLINED} text={translate('back')} onClick={handlerback}></Button>
          <Button text={translate('crop')} onClick={handlerCrop}></Button>
        </div>
      </div>
    </>
  )
}