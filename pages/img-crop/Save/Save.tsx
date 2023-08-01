import { Button } from "@/@ui/ui-kit/Button/Button";
import s from "./save.module.scss"
import { BUTTON_COLORS } from '@/@ui/ui-kit/Button/constants'
import { useAvatarAddMutation } from "@/assets/api/auth/authApi";
interface ComponentProps {
  croppedImageUrl: string | null;
  setStatesСomponent: (modalStates: string) => void
  setCroppedImageUrl: any
}
const ImgSave: React.FC<ComponentProps> = ({ croppedImageUrl, setStatesСomponent, setCroppedImageUrl }) => {

  const [AvatarAdd, { isLoading }] = useAvatarAddMutation()
  const back = () => { setStatesСomponent("crop"), setCroppedImageUrl(null) }
  const save = () => {
    function dataURLtoFile(dataurl, filename) {
      var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, { type: mime });
    }
    //Usage example:
    var file = dataURLtoFile(croppedImageUrl, 'a.png');
    const formData = new FormData();
    formData.append('file', file);
    AvatarAdd(formData)
      .unwrap()
      .then(() => {
      })
      .catch((error) => {
      })
  };

  return (
    <div className={s.content}>
      {croppedImageUrl && <img className={s.img} src={croppedImageUrl} alt="Avatar" />}
      <div className={s.button}>
        <Button text="Сохранить" onClick={save} ></Button>
      </div>
      <div className={s.button}>
        <Button color={BUTTON_COLORS.OUTLINED} text="Назад" onClick={back} ></Button>
      </div>
    </div>
  )
}
export default ImgSave;