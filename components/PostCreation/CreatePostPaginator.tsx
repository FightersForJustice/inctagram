import { Dispatch, FC, SetStateAction } from 'react'
import style from './PostCreation.module.scss'
import icons from '@/public/sidebar-icons/icons'
import Icons from '@/@ui/ui-kit/Icon/IconsComponent'

type CreatePostPaginatorType = {
  moduleNum: number
  setModuleNum: Dispatch<SetStateAction<number>>
}

const CreatePostPaginator: FC<CreatePostPaginatorType> = ({ moduleNum, setModuleNum }) => {
  return (
    <div className={style.paginator}>
      <span
        onClick={() => setModuleNum((prev) => (prev -= 1))}
        style={{ visibility: moduleNum === 0 ? 'hidden' : 'visible' }}
        className={style.previous}
      >
        <icons.ArrowBack />
      </span>
      <span
        onClick={() => setModuleNum((prev) => (prev += 1))}
        style={{ visibility: moduleNum === 3 || moduleNum === 0 ? 'hidden' : 'visible' }}
        className={style.next}
      >
        Next
      </span>
    </div>
  )
}

export default CreatePostPaginator
