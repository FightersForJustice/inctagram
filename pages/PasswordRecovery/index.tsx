import { PageWrapper } from "components/PageWrapper/PageWrapper";
import PasswordRecoveryForm from "@/components/PasswordRecovery/PasswordRecovery";
import { getLayout } from "@/components/Layout/Layout";

export const getStaticProps = async () => {

    return {
        props: {}
    }
}


const PasswordRecovery = () => {
    
    return (
        <PageWrapper>
          <PasswordRecoveryForm></PasswordRecoveryForm>
        </PageWrapper>
    );
}

PasswordRecovery.getLayout = getLayout
export default PasswordRecovery;