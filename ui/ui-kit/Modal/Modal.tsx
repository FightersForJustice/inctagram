import s from "./modal.module.scss"

type ModalType = {
    active: boolean
    setActive: any
    title: string
    children: any
  }

const Modal: React.FC<ModalType> = ({active, setActive, title, children}) => {
    const classs = `${s.modal} ${s.effect}`
    const open = active ? `${s.modal} ${s.effect} ${s.show}` : classs  
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