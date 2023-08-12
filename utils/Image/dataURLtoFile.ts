/**
 * Преобразует строку с данными в формате Data URL в объект типа 'File'.
 * (для отправки изображения на сервер)
 * @param {string} dataurl - Cтроку с Data URL
 * @param {string} filename - Имя файла, которое будет присвоено 
 * @returns {Object} - Обьект с данными 
 */

export const dataURLtoFile = (dataurl: string, filename: string): any => {
  var arr = dataurl.split(',');
  var mimeMatch = arr[0].match(/:(.*?);/);

  if (!mimeMatch) {
    return null;
  }

  var mime = mimeMatch[1];
  var bstr = atob(arr[1]);
  var n = bstr.length;
  var u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
};