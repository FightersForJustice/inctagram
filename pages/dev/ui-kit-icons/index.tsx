import { PageWrapper } from 'components/PageWrapper/PageWrapper'
import { getLayout } from '@/components/Layout/Layout'
import { Icons } from '@/ui/ui-kit/Icon/IconsComponent'
import style from '@/ui/ui-kit/Icon/IconsComponent.module.scss'

export const getStaticProps = async () => {
  return {
    props: {},
  }
}

const Failed = () => {
  return (
    <PageWrapper>
      <div style={{ display: 'flex', textAlign: 'center', color: 'white' }}>
        <div>
          <h2>Default</h2>
          <Icons.Home className={style.SideBar__Item} />
          <Icons.Create className={style.SideBar__Item} />
          <Icons.Profile className={style.SideBar__Item} />
          <Icons.Messenger className={style.SideBar__Item} />
          <Icons.Search className={style.SideBar__Item} />
          <Icons.Statistics className={style.SideBar__Item} />
          <Icons.Logout className={style.SideBar__Item} />
        </div>
        <div>
          <h2>Active</h2>
          <Icons.Home className={style.SideBar__Item} isActive />
          <Icons.Create className={style.SideBar__Item} />
          <Icons.Profile className={style.SideBar__Item} />
          <Icons.Messenger className={style.SideBar__Item} />
          <Icons.Search className={style.SideBar__Item} />
          <Icons.Statistics className={style.SideBar__Item} />
          <Icons.Logout className={style.SideBar__Item} />
        </div>
        <div>
          <h2>Disabled</h2>
          <Icons.Home className={style.SideBar__Item} isDisabled />
          <Icons.Create className={style.SideBar__Item} />
          <Icons.Profile className={style.SideBar__Item} />
          <Icons.Messenger className={style.SideBar__Item} />
          <Icons.Search className={style.SideBar__Item} />
          <Icons.Statistics className={style.SideBar__Item} />
          <Icons.Logout className={style.SideBar__Item} />
        </div>
      </div>
    </PageWrapper>
  )
}

Failed.getLayout = getLayout
export default Failed
