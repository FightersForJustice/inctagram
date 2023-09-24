import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { MakeIcon } from '@/@ui/ui-kit/Icon/MakeIcon'
import icons from '@/public/sidebar-icons/icons'
import common from '@ui/design/settings/Common.module.scss'
import style from './Legal.module.scss'

type LegalType = {
  title: string
}

export const Legal: React.FC<LegalType> = ({ title }) => {
  const router = useRouter()
  const { t } = useTranslation()
  const translate = (key: string): string => t(`legalPages.${key}`)

  const handleClick = () => {
    router.back()
  }
  const sections: { title: string; content: string }[] = t('legalPages.sections', {
    returnObjects: true,
  })

  return (
    <div className={common.container}>
      <div className={style.buttonContainer}>
        <button onClick={handleClick} className={style.backButton}>
          <MakeIcon Icon={icons.ArrowBack} OutlineIcon={icons.ArrowBackOutline} />
          {translate('goBack')}
        </button>
      </div>
      <div className={common.contentContainer}>
        <h1 className={common.title}>{title}</h1>
        <section className={common.paragraph}>
          {t('legalPages.lastUpdated', { date: '09/19/2023' })}

          {sections.map((section, index) => (
            <div key={index}>
              <h4>{section.title}</h4>
              <p>{section.content}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}
