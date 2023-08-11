
export const calculateNewSize = (originalWidth: number, originalHeight: number, maxDimension: number) => {
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