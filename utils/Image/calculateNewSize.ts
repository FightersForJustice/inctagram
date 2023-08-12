/**
 * Уменьшаем изображения до maxDimension по высоте и ширине с сохранением пропорций
 * @param {number} originalWidth - Ширина изображения
 * @param {number} originalHeight - Высота изображения
 * @param {number} maxDimension - Максимальный размер нового изображения по вертикали или горизонтали
 * @returns {Object} Рассчитанные ширина и высота
 */
interface newImageType {
  width: number;
  height: number;
}

export const calculateNewSize = (originalWidth: number, originalHeight: number, maxDimension: number): newImageType => {
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