import { PageWrapper } from 'components/PageWrapper/PageWrapper'
import { getLayout } from '@/components/Layout/Layout'
import Modal from '@/ui/ui-kit/Modal/Modal'
import { useState } from 'react'
import style from './index.module.scss'

export const getStaticProps = async () => {
  return {
    props: {},
  }
}

const Modals = () => {
    const [ModalActive, setModalActive] = useState(false);
  return (
    <PageWrapper>
        <button className={style.openModal} onClick={() => {setModalActive(true)}}>Modal open</button>
        <Modal active={ModalActive} setActive={setModalActive} title="Email sent">
          <div className={style.text}>We have sent a link to confirm your email to epam@epam.com</div>
          <div className={style.buttonBloc}>
            <button className={style.button}>
              OK
            </button>
          </div>
        </Modal>
    </PageWrapper>
  )
}

Modals.getLayout = getLayout
export default Modals