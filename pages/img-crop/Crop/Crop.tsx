import ReactCrop, { centerCrop, makeAspectCrop, type Crop } from 'react-image-crop'
import s from "./crop.module.scss"
import { Button } from '@/@ui/ui-kit/Button/Button'
import { BUTTON_COLORS } from '@/@ui/ui-kit/Button/constants'

type cron = {
  unit: string
  x: number
  y: number
  width: number
  height: number
}

interface ComponentProps {
  crop: Crop;
  uploadedImage: string
  setCrop: any
  setCroppedImageUrl: any
  setStatesСomponent: any
}
const getCroppedImage = (image: HTMLImageElement, crop: Crop): string => {
  const sizeImg = 192;
  const canvas = document.createElement('canvas');
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('CanvasRenderingContext2D is not available');
  }
  canvas.width = sizeImg;
  canvas.height = sizeImg;

  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    sizeImg,
    sizeImg
  );

  return canvas.toDataURL('image/jpeg');
};
const CropImg: React.FC<ComponentProps> = ({ crop, uploadedImage, setCrop, setCroppedImageUrl, setStatesСomponent }) => {
  const Crop = () => {
    const image = document.createElement('img');
    image.src = uploadedImage;
    image.onload = () => {
      const croppedImage = getCroppedImage(image, crop);
      setCroppedImageUrl(croppedImage);
      setStatesСomponent("save")
    };
  }
  const back = () => {
    setCroppedImageUrl(null)
    setStatesСomponent("start")
  }
  return (
    <>
      <div className={s.contentCrop}>
        <ReactCrop crop={crop} minHeight={192} minWidth={192} circularCrop={true} aspect={1 / 1} onChange={c => setCrop(c)}>
          <img src={uploadedImage} />
        </ReactCrop>
        <div className={s.buttons}>
          <Button color={BUTTON_COLORS.OUTLINED} text="Назад" onClick={back}></Button>
          <Button text="Обрезать" onClick={Crop}></Button>
        </div>
      </div>
    </>
  )
}
export default CropImg;