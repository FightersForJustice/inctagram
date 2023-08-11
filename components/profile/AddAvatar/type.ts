import { Dispatch, SetStateAction } from 'react';

export type StatesСomponentType = 'start' | 'crop' | 'save' | ''

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
