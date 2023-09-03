import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from 'react'
import style from './AddPhoto.module.scss'

type AddPhotoType = {
  setModuleNum: Dispatch<SetStateAction<number>>
}

const AddPhoto: FC<AddPhotoType> = ({ setModuleNum }) => {
  const [image, setImage] = useState<any | undefined>(undefined)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) setImage(URL.createObjectURL(e.target.files[0]))
  }

  return (
    <div className={style.container}>
      <div className={style.addPhotoContainer}>
        <img src={image} alt="" className={style.image} />
      </div>
      {!image ? (
        <input type="file" accept="image/*" onChange={(e) => handleChange(e)} />
      ) : (
        <button onClick={() => setModuleNum(1)}>Next</button>
      )}
    </div>
  )
}

export default AddPhoto
