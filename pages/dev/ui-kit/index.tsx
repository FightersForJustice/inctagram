import { PageWrapper } from 'components/PageWrapper/PageWrapper'
import { getLayout } from '@/components/Layout/Layout'
import { Button } from '@/@ui/ui-kit/Button/Button'
import style from './index.module.scss'
import IconStyle from '@/@ui/ui-kit/Icon/IconsComponent.module.scss'
import { BUTTON_COLORS } from '@/@ui/ui-kit/Button/constants'
import IconsDev from '@/components/dev/UiKit/Icons'
import { Icons } from '@/@ui/ui-kit/Icon/IconsComponent'

export const getStaticProps = async () => {
  return {
    props: {},
  }
}

const Login = () => {
  return (
    <PageWrapper>
      <div className={style.kitContainer}>
        <h1 className={style.header}> UIKit Page</h1>

        <div className={style.kitBlock}>
          <h2 className={style.componentHeader}>Buttons</h2>
          <div className={style.components}>
            <div className={style.buttonBlock}>
              <Button text="Button"></Button>
              <Button text="Button" disabled></Button>
            </div>

            <div className={style.buttonBlock}>
              <Button color={BUTTON_COLORS.BASIC} text="Button"></Button>
              <Button color={BUTTON_COLORS.BASIC} text="Button" disabled></Button>
            </div>

            <div className={style.buttonBlock}>
              <Button color={BUTTON_COLORS.OUTLINED} text="Button"></Button>
              <Button color={BUTTON_COLORS.OUTLINED} text="Button" disabled></Button>
            </div>

            <div className={style.buttonBlock}>
              <Button color={BUTTON_COLORS.GHOST} text="Button"></Button>
              <Button color={BUTTON_COLORS.GHOST} text="Button" disabled></Button>
            </div>
          </div>
        </div>
        <div className={style.kitBlock}>
          <h2 className={style.componentHeader}>Icons</h2>
          <div className={style.components}>
            <div style={{ display: 'flex', textAlign: 'center', color: 'white' }}>
              <div className={IconStyle.SideBar}>
                <h2>Default</h2>
                <Icons.Home />
                <Icons.Create />
                <Icons.Profile />
                <Icons.Messenger />
                <Icons.Search />
                <Icons.Statistics />
                <Icons.Favorites />
                <Icons.Logout />
              </div>
              <div className={IconStyle.SideBar}>
                <h2>Active</h2>
                <Icons.Home isActive />
                <Icons.Create />
                <Icons.Profile />
                <Icons.Messenger />
                <Icons.Search />
                <Icons.Statistics />
                <Icons.Favorites />
                <Icons.Logout />
              </div>
              <div className={IconStyle.SideBar}>
                <h2>Disabled</h2>
                <Icons.Home isDisabled />
                <Icons.Create />
                <Icons.Profile />
                <Icons.Messenger />
                <Icons.Search />
                <Icons.Statistics />
                <Icons.Favorites />
                <Icons.Logout />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

Login.getLayout = getLayout
export default Login
