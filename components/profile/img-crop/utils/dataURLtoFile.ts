/**
 * Преобразует строку с данными в формате Data URL в объект типа 'File'.
 * (для отправки изображения на сервер)
 * @param {any} dataurl - Cтроку с Data URL
 * @param {any} filename - Имя файла, которое будет присвоено 
 */

export const dataURLtoFile = (dataurl: any, filename: any) => {
  var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}