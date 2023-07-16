import { PageWrapper } from 'components/PageWrapper/PageWrapper'
import style from '@/@ui/ui-kit/Icon/IconsComponent.module.scss'
import { Icons } from '@/@ui/ui-kit/Icon/IconsComponent'

export const getStaticProps = async () => {
  return {
    props: {},
  }
}

const IconsDev = () => {
  return (
    <PageWrapper>
      <div style={{ display: 'flex', textAlign: 'center', color: 'white' }}>
        <div className={style.SideBar}>
          <h2>Default</h2>
          <Icons.Home />
          <Icons.Create />
          <Icons.Profile />
          <Icons.Messenger />
          <Icons.Search />
          <Icons.Statistics />
          <Icons.Logout />
        </div>
        <div className={style.SideBar}>
          <h2>Active</h2>
          <Icons.Home isActive />
          <Icons.Create />
          <Icons.Profile />
          <Icons.Messenger />
          <Icons.Search />
          <Icons.Statistics />
          <Icons.Logout />
        </div>
        <div className={style.SideBar}>
          <h2>Disabled</h2>
          <Icons.Home isDisabled />
          <Icons.Create />
          <Icons.Profile />
          <Icons.Messenger />
          <Icons.Search />
          <Icons.Statistics />
          <Icons.Logout />
        </div>
      </div>
    </PageWrapper>
  )
}

export default IconsDev
