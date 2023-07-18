import classNames from "classnames"
import s from "./modal.module.scss"

type ModalType = {
    active: boolean
    setActive: any
    title: string
    children: any
  }

const Modal: React.FC<ModalType> = ({active, setActive, title, children}) => {
    const open = active ? classNames(s.modal, s.effect, s.show) : classNames(s.modal, s.effect)  
    return (
    <>
        <div className={open} >
            <div className={s.content}>
                <div className={s.item}>
                    <div className={s.title}>{title}t</div>
                    <button className={s.buttonClose} onClick={() => {setActive(false)}}>
                        <img src="/icons/close.svg" alt="" />
                    </button>
                </div>
                <div className={s.contents}>{children}</div>
            </div>
        </div>
        <div className={s.overlay}></div>
    </>
    )
}
export default Modal;