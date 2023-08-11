import { Button } from "@/@ui/ui-kit/Button/Button";
import style from "./start.module.scss"
import { ChangeEvent, useRef } from "react";
import { ComponentStartProps } from "../../type";
import { useTranslation } from "react-i18next";
import { calculateNewSize } from "../../utils/calculateNewSize";

export const StartImg: React.FC<ComponentStartProps> = ({ setUploadedImage, setStatesСomponent }) => {

  const { t } = useTranslation()
  const translate = (key: string): string => t(`add_profile_photo.${key}`)

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.onload = () => {
          const { width, height } = calculateNewSize(img.width, img.height, 500);
          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(img, 0, 0, width, height);
            const resizedDataUrl = canvas.toDataURL('image/jpeg');
            setUploadedImage(resizedDataUrl);
          }
        };
        img.src = reader.result as string;
      };
      reader.readAsDataURL(file);
      setStatesСomponent("crop");
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <>
      <label className={style.form}>
        <input ref={fileInputRef} className={style.input} type="file" name="file" onChange={handleImageUpload} />
        <div className={style.img}>
          <img src="/../icons/image-outline.svg" alt="img" />
        </div>
        <div className={style.button}>
          <Button onClick={handleButtonClick} text={translate('select_from_computer')}></Button>
        </div>
      </label>
    </>
  )
}
