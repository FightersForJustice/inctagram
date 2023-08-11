import { Dispatch, SetStateAction } from 'react';
import ReactCrop, { type Crop } from 'react-image-crop'

export type StatesСomponentType = 'start' | 'crop' | 'save' | ''

export interface ComponentStartProps {
  setUploadedImage: Dispatch<SetStateAction<string>>
  setStatesСomponent: (modalStates: StatesСomponentType) => void
}

export interface ComponentSaveProps {
  croppedImageUrl: string | null;
  setStatesСomponent: (modalStates: StatesСomponentType) => void
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
