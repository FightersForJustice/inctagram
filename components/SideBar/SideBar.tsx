import style from './SideBar.module.scss'
import { Icons } from '@/@ui/ui-kit/Icon/IconsComponent'
import { useRouter } from 'next/router'

const SideBar = () => {
  const router = useRouter()
  const pathName = router.pathname

  return (
    <div className={style.sidebar_container}>
      <div className={style.main_container}>
        <Icons.Home url="/home" isActive={'/home' === pathName} />
        <Icons.Create url="/create" isActive={'/create' === pathName} />
        <Icons.Profile url="/profile" isActive={'/profile' === pathName} />
        <Icons.Messenger url="/messenger" isActive={'/messenger' === pathName} />
        <Icons.Search url="/search" isActive={'/search' === pathName} />
      </div>
      <div className={style.secondary_container}>
        <Icons.Statistics url="/statistics" isActive={'/statistics' === pathName} />
        <Icons.Favorites url="/favorites" isActive={'/favorites' === pathName} />
      </div>
      <div className={style.logout_container}>
        <Icons.Logout url="/auth/logout" isActive={'/auth/logout' === pathName} />
      </div>
    </div>
  )
}

export default SideBar
