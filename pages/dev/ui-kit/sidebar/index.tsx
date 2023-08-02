import { getSideBarLayout } from '@/components/Layout/SideBarLayout/SideBarLayout'

export const getStaticProps = async () => {
  return {
    props: {},
  }
}

const Login = () => {
  return <div></div>
}

Login.getLayout = getSideBarLayout
export default Login
