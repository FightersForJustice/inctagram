import s from './Modal.module.scss'

interface ModalType extends React.HTMLAttributes<HTMLButtonElement> {
  title?: string
  content?: string
  onClose?: () => void
}
export const Modal: React.FC<ModalType> = ({ title, content, onClose, ...props }) => {
  console.log(props)
  return (
    <div className={s.modal}>
      <div className={s.modalBody}>
        <div className={s.item}>
          <div className={s.title}>{title}</div>
          <button className={s.buttonClose} {...props} onClick={onClose}>
            <img src="/icons/close.svg" alt="" />
          </button>
        </div>
        <div className={s.content}>
          <div className={s.text}>{content}</div>
          <div className={s.buttonBloc}>
            <button className={s.button} onClick={onClose} {...props}>
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
