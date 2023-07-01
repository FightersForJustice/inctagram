import s from './modal.module.scss'

type ModalType = {
  title: string
  content: string
}

export const Modal: React.FC<ModalType> = ({ title, content}) => {
  return (
    <div className={s.modal}>
      <div className={s.modalBody}>
        <div className={s.item}>
          <div className={s.title}>{title}</div>
          <img src="/icons/close.svg" alt="" />
        </div>
        <div className={s.content}>
          <div className={s.text}>{content}</div>
          <div className={s.buttonBloc}>
            <button className={s.button}>OK</button>
          </div>
        </div>

      </div>
    </div>
  )
}


