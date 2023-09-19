import classNames from 'classnames'
import s from './modal.module.scss'
import { CLOSE_MODAL_TEST_ID } from './constants'

type ModalType = {
  active: boolean
  setActive: (isActive: boolean) => void
  title: string
  children: React.ReactNode
  close?: boolean
  isPaddingDisabled?: boolean
}

const Modal: React.FC<ModalType> = ({ active, setActive, title, children, close, isPaddingDisabled = false }) => {
  const open = active
    ? classNames(s.modal, s.effect, s.show, { [s[`disabledPadding`]]: Boolean(isPaddingDisabled) })
    : classNames(s.modal, s.effect)
  return (
    <>
      <div className={open}>
        <div className={s.content}>
          <div className={s.item}>
            <div className={s.title}>{title}</div>
            {close ? (
              <button
                className={s.buttonClose}
                data-testid={CLOSE_MODAL_TEST_ID}
                onClick={() => {
                  setActive(false)
                }}
              >
                <img src="/icons/close.svg" alt="" />
              </button>
            ) : (
              ''
            )}
          </div>
          <div className={s.contents}>{children}</div>
        </div>
      </div>
      <div className={s.overlay}></div>
    </>
  )
}
export default Modal
