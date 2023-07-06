import s from './modal.module.scss'

interface ModalType extends React.HTMLAttributes<HTMLButtonElement> {
  title?: string
  content?: string
}
export const Modal: React.FC<ModalType> = ({ title, content, ...props }) => {
  console.log(props)
  return (
    <div className={s.modal}>
      <div className={s.modalBody}>
        <div className={s.item}>
          <div className={s.title}>{title}</div>
          <button className={s.buttonClose} {...props}>
            <img src="/icons/close.svg" alt="" />
          </button>
        </div>
        <div className={s.content}>
          <div className={s.text}>{content}</div>
          <div className={s.buttonBloc}>
            <button className={s.button} {...props}>
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
