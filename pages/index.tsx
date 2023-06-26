import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import { NextPageWithLayout } from "./_app";
import { getLayout } from "@/components/Layout/Layout";


const Home: NextPageWithLayout = () => (
  <PageWrapper>
    Believe you can and you're halfway there!
  </PageWrapper>
);
// это как HOC, который дает нам Layout(туда закидываем повторяющиеся компоненты)
Home.getLayout = getLayout

export default Home