import { Button } from "@/@ui/ui-kit/Button/Button";
import s from "./save.module.scss"
import { BUTTON_COLORS } from '@/@ui/ui-kit/Button/constants'
interface ComponentProps {
  croppedImageUrl: string | null;
  setStatesСomponent: any
  setCroppedImageUrl: any
}
const ImgSave: React.FC<ComponentProps> = ({ croppedImageUrl, setStatesСomponent, setCroppedImageUrl }) => {
  const back = () => {
    setStatesСomponent("crop")
    setCroppedImageUrl(null)
  }
  return (
    <div className={s.content}>
      {croppedImageUrl && <img className={s.img} src={croppedImageUrl} alt="Avatar" />}
      <div className={s.button}>
        <Button text="Сохранить" ></Button>
      </div>
      <div className={s.button}>
        <Button color={BUTTON_COLORS.BASIC} text="Назад" onClick={back} ></Button>
      </div>
    </div>
  )
}
export default ImgSave;