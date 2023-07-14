import { PageWrapper } from 'components/PageWrapper/PageWrapper'
import { getLayout } from '@/components/Layout/Layout'
import { Icons } from '@/ui/ui-kit/Icon/IconsComponent'

export const getStaticProps = async () => {
  return {
    props: {},
  }
}

const Failed = () => {
  return (
    <PageWrapper>
      <Icons.Home isActive/>
      <Icons.Create />
      <Icons.Profile />
      <Icons.Messenger />
      <Icons.Search />
      <Icons.Statistics />
      <Icons.Logout isDisabled />
    </PageWrapper>
  )
}

Failed.getLayout = getLayout
export default Failed
