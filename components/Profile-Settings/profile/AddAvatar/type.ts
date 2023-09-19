import { Dispatch, SetStateAction } from 'react'

export type StatesComponentType = 'start' | 'crop' | 'save' | ''

export interface ComponentSaveProps {
  croppedImageUrl: string | null
  setStatesComponent: (modalStates: StatesComponentType) => void
  setCroppedImageUrl: Dispatch<SetStateAction<string | null>>
  setAvatar: Dispatch<SetStateAction<string>>
  setModalActive: Dispatch<SetStateAction<boolean>>
  setIsLoading: (isLoading: boolean) => void
}

export interface ImageInfo {
  fileSize: number
  height: number
  url: string
  width: number
}

export type ComponentMainProps = {
  avatarUrl: ImageInfo[]
  setIsLoading: (isLoading: boolean) => void
}
