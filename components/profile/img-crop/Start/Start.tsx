import { Button } from "@/@ui/ui-kit/Button/Button";
import style from "./start.module.scss"
import { ChangeEvent, useRef } from "react";
import { ComponentStartProps } from "../type";

const StartImg: React.FC<ComponentStartProps> = ({ setUploadedImage, setStatesСomponent }) => {
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

  const calculateNewSize = (originalWidth: number, originalHeight: number, maxDimension: number) => {
    let width = originalWidth;
    let height = originalHeight;

    if (width > maxDimension || height > maxDimension) {
      const aspectRatio = width / height;
      if (width > height) {
        width = maxDimension;
        height = width / aspectRatio;
      } else {
        height = maxDimension;
        width = height * aspectRatio;
      }
    }

    return { width, height };
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
          <Button onClick={handleButtonClick} text='Select from Computer'></Button>
        </div>
      </label>
    </>
  )
}
export default StartImg;