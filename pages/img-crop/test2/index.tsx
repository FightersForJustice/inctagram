import { Button } from "@/@ui/ui-kit/Button/Button";
import s from "./save.module.scss"
import { BUTTON_COLORS } from '@/@ui/ui-kit/Button/constants'
import { useAvatarAddMutation } from "@/assets/api/auth/authApi";
import { useRef } from "react";
interface ComponentProps {
  croppedImageUrl: string | null;
  setStatesСomponent: (modalStates: string) => void
  setCroppedImageUrl: any
}
const ImgSave: React.FC<ComponentProps> = ({ croppedImageUrl, setStatesСomponent, setCroppedImageUrl }) => {

  const [AvatarAdd, { isLoading }] = useAvatarAddMutation()
  const back = () => { setStatesСomponent("crop"), setCroppedImageUrl(null) }
  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }
  var file = dataURLtoFile(croppedImageUrl, 'a.png');
  console.log(file)
  const save = async (file: any) => {
    const formData = new FormData();
    formData.append('file', file);
    console.log(file)
    console.log(formData)
    try {
      const response = await fetch('https://inctagram-api.vercel.app/api/users/profile/avatar', {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjM3MSwiaWF0IjoxNjkwODE4ODUzLCJleHAiOjE2OTA4MjI0NTN9.JNr72FMIDVi2gh109JG4Dk5pQWjyh36wGSZUfkmuCBc`,
        },
      });

      // Обработайте ответ от сервера, если это необходимо
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error('Ошибка при отправке файла:', error);
    }
  };

  return (
    <div className={s.content}>
      {croppedImageUrl && <img className={s.img} src={croppedImageUrl} alt="Avatar" />}
      <div className={s.button}>
        <Button text="Сохранить" onClick={() => save(file)} ></Button>
      </div>
      <div className={s.button}>
        <Button color={BUTTON_COLORS.BASIC} text="Назад" onClick={back} ></Button>
      </div>
    </div>
  )
}
export default ImgSave;