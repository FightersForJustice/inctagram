import { Dispatch, SetStateAction } from 'react';
import ReactCrop, { type Crop } from 'react-image-crop'

export interface ComponentCropProps {
  crop: Crop;
  uploadedImage: string
  setCrop: Dispatch<SetStateAction<Crop>>
  setCroppedImageUrl: Dispatch<SetStateAction<string | null>>
  setStatesСomponent: Dispatch<SetStateAction<string>>
}
export interface ComponentStartProps {
  setUploadedImage: Dispatch<SetStateAction<string>>
  setStatesСomponent: (modalStates: string) => void
}
export interface ComponentSaveProps {
  croppedImageUrl: string | null;
  setStatesСomponent: (modalStates: string) => void
  setCroppedImageUrl: Dispatch<SetStateAction<string | null>>
  setAvatar: Dispatch<SetStateAction<string>>
  setModalActive: Dispatch<SetStateAction<boolean>>
  setIsLoading: (isLoading: boolean) => void
}
export interface ImageInfo {
  fileSize: number;
  height: number;
  url: string;
  width: number;
}
export type ComponentMainProps = {
  avatarUrl: ImageInfo[]
  setIsLoading: (isLoading: boolean) => void
}
