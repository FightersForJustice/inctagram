import IconStyle from '@/@ui/ui-kit/Icon/IconsComponent.module.scss'
import style from './SideBar.module.scss'
import { Icons } from '@/@ui/ui-kit/Icon/IconsComponent'

export const getStaticProps = async () => {
  return {
    props: {},
  }
}

const SideBar = () => {
  return (
    <div className={style.sidebar_container}>
      <div className={style.main_container}>
        <Icons.Home className={IconStyle.SideBar__Item} Url='/home' />
        <Icons.Create className={IconStyle.SideBar__Item} Url='/create' />
        <Icons.Profile className={IconStyle.SideBar__Item} Url='/Profile' />
        <Icons.Messenger className={IconStyle.SideBar__Item} Url='/messenger' />
        <Icons.Search className={IconStyle.SideBar__Item} Url='/search' />
      </div>
      <div className={style.secondary_container}>
        <Icons.Statistics className={IconStyle.SideBar__Item} Url='/statistics' />
        <Icons.Favorites className={IconStyle.SideBar__Item} Url='/favorites' />
      </div>
      <div className={style.logout_container}>
        <Icons.Logout className={IconStyle.SideBar__Item} Url='/auth/logout' />
      </div>
    </div>
  )
}

export default SideBar
