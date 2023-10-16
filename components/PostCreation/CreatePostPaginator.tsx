import { Dispatch, FC, SetStateAction } from 'react'
import style from './PostCreation.module.scss'
import icons from '@/public/sidebar-icons/icons'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'

type CreatePostPaginatorType = {
  moduleNum: number
  setModuleNum: Dispatch<SetStateAction<number>>
}

const CreatePostPaginator: FC<CreatePostPaginatorType> = ({ moduleNum, setModuleNum }) => {
  const { t } = useTranslation()

  return (
    <div className={style.paginator}>
      <span
        onClick={() => setModuleNum((prev) => (prev -= 1))}
        style={{ visibility: moduleNum === 0 ? 'hidden' : 'visible' }}
        className={classNames(style.previous, { [style.previousPublicationPage]: moduleNum === 3 })}
      >
        <icons.ArrowBack />
      </span>
      <span
        onClick={() => setModuleNum((prev) => (prev += 1))}
        style={{ visibility: moduleNum === 3 || moduleNum === 0 ? 'hidden' : 'visible' }}
        className={style.next}
      >
        {t('postCreation.nextButton')}
      </span>
    </div>
  )
}

export default CreatePostPaginator