import { Crop } from "react-image-crop";
/**
 * Преобразует строку с данными в формате Data URL в объект типа 'File'.
 * (для отправки изображения на сервер)
 * @param {HTMLImageElement} image - Изображения 
 * @param {Сrop} crop - Принимает обьект в виде 
 * { x: 152, y: 34, width: 192, height: 192, unit: 'px' }
 */

export const getCroppedImage = (image: HTMLImageElement, crop: Crop): string => {
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