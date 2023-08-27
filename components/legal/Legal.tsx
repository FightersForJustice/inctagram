import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { MakeIcon } from '@/@ui/ui-kit/Icon/MakeIcon'
import icons from '@/public/sidebar-icons/icons'
import common from '@ui/design/settings/common.module.scss'
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim viverra nunc id pellentesque. Sed ultrices
            dignissim ex luctus facilisis. Donec eu massa sed felis varius scelerisque in id quam. Morbi porta dui et pretium
            bibendum. Curabitur pulvinar tortor eget enim finibus, vitae rutrum arcu convallis. Praesent et lobortis elit, id
            pulvinar odio. Aliquam sagittis id augue id maximus. Suspendisse pulvinar porttitor dapibus. Nam rutrum justo et dui
            dignissim, quis elementum nisl venenatis. Praesent vel lectus sem. Phasellus placerat, libero eget varius vestibulum,
            magna nisl pretium nibh, sed varius lectus mi sit amet lorem. Phasellus vulputate nulla suscipit neque vehicula,
            placerat laoreet metus fringilla.
          </p>
          <p>
            Curabitur rutrum feugiat justo, at ultricies ante vulputate a. Vivamus at tortor enim. Vivamus dui nibh, lacinia a
            elementum sit amet, luctus ac nulla. Vestibulum quis massa lectus. Suspendisse pellentesque lectus massa, vitae
            consequat mi porttitor sit amet. Mauris quis magna et dui tempus sodales. Sed viverra risus et nisl consequat
            accumsan. Sed quam nulla, pellentesque a lacus quis, hendrerit aliquam turpis. Etiam tincidunt sapien at sapien
            fringilla, sit amet imperdiet ipsum egestas. Sed non ullamcorper orci.
          </p>
          <p>
            Vivamus dictum venenatis ipsum quis egestas. Pellentesque purus nibh, lacinia vitae scelerisque et, tempus in lacus.
            Cras auctor lorem non nulla auctor molestie. Nullam a dui ut quam ullamcorper condimentum a non risus. Proin
            pellentesque volutpat sodales. Quisque at rhoncus ipsum. Sed viverra auctor libero eget venenatis. Praesent et massa
            nibh. Aliquam sagittis porta enim, sed fermentum magna suscipit at.
          </p>
          <p>
            Cras placerat tincidunt pulvinar. Quisque a tortor rutrum, hendrerit velit id, rhoncus diam. Praesent convallis orci
            eget nunc lacinia euismod eget accumsan neque. In hac habitasse platea dictumst. Cras nibh tellus, ornare vitae
            molestie id, vehicula eget ex. Fusce tempus velit diam, eu faucibus dui aliquam eget. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Integer feugiat, sapien vitae ornare consequat, massa magna laoreet lorem, nec pulvinar
            ante ex non purus. Cras mattis justo eget urna congue, quis sodales augue porttitor. In at lobortis orci. Maecenas
            semper congue lorem, ac fringilla enim euismod ut.
          </p>
          <p>
            Curabitur rutrum feugiat justo, at ultricies ante vulputate a. Vivamus at tortor enim. Vivamus dui nibh, lacinia a
            elementum sit amet, luctus ac nulla. Vestibulum quis massa lectus. Suspendisse pellentesque lectus massa, vitae
            consequat mi porttitor sit amet. Mauris quis magna et dui tempus sodales. Sed viverra risus et nisl consequat
            accumsan. Sed quam nulla, pellentesque a lacus quis, hendrerit aliquam turpis. Etiam tincidunt sapien at sapien
            fringilla, sit amet imperdiet ipsum egestas. Sed non ullamcorper orci.
          </p>
          <p>
            Cras placerat tincidunt pulvinar. Quisque a tortor rutrum, hendrerit velit id, rhoncus diam. Praesent convallis orci
            eget nunc lacinia euismod eget accumsan neque. In hac habitasse platea dictumst. Cras nibh tellus, ornare vitae
            molestie id, vehicula eget ex. Fusce tempus velit diam, eu faucibus dui aliquam eget. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Integer feugiat, sapien vitae ornare consequat, massa magna laoreet lorem, nec pulvinar
            ante ex non purus. Cras mattis justo eget urna congue, quis sodales augue porttitor. In at lobortis orci. Maecenas
            semper congue lorem, ac fringilla enim euismod ut.
          </p>
        </section>
      </div>
    </div>
  )
}
