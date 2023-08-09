import { getLayout } from "@/components/Layout/Layout"
import { NextPageWithLayout } from "../_app"

const TestPage: NextPageWithLayout = () => {
    return <h1>Hello World</h1>
  }
  
  TestPage.getLayout = getLayout
  
  export default TestPage