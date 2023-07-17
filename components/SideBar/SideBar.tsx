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
        <Icons.Home url='/home' />
        <Icons.Create url='/create' />
        <Icons.Profile url='/Profile' />
        <Icons.Messenger url='/messenger' />
        <Icons.Search url='/search' />
      </div>
      <div className={style.secondary_container}>
        <Icons.Statistics url='/statistics' />
        <Icons.Favorites url='/favorites' />
      </div>
      <div className={style.logout_container}>
        <Icons.Logout url='/auth/logout' />
      </div>
    </div>
  )
}

export default SideBar
