import { Button } from "@/@ui/ui-kit/Button/Button";
import s from "./save.module.scss"
import { BUTTON_COLORS } from '@/@ui/ui-kit/Button/constants'
import { useAvatarAddMutation, useGetProfileQuery } from "@/assets/api/user/profileQueryApi";
import { Loading } from "@/components/common/Loaders/Loading";
import { useState } from "react";
import { ComponentSaveProps } from "../type";

const ImgSave: React.FC<ComponentSaveProps> = ({ croppedImageUrl, setModalActive, setAvatar, setStatesСomponent, setCroppedImageUrl }) => {

  const [AvatarAdd, { isLoading }] = useAvatarAddMutation()
  const [loading, setIsLoading] = useState(false)
  const getProfileQuery = useGetProfileQuery()
  const back = () => { setStatesСomponent("crop"), setCroppedImageUrl(null) }
  const save = () => {
    type DataURLtoFileType =
      (
        dataurl: any,
        filename: any,
      ) => any

    const dataURLtoFile: DataURLtoFileType = (dataurl, filename) => {
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
    setIsLoading(true)
    AvatarAdd(formData)
      .unwrap()
      .then((data) => {
        setAvatar(data.avatars[0].url)
        setModalActive(false)
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
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
      {loading ? <Loading /> : ''}
    </div>

  )
}
export default ImgSave;