import { InputHTMLAttributes, useState } from 'react'
import s from './checkBox.module.scss'

type CheckBoxType = {
  children?: React.ReactNode
  checked?: boolean
  disabled?: boolean
}

export const CheckBox: React.FC<CheckBoxType> = ({ children, checked, disabled }) => {
  return (
    <label className={s.label}>
      <input type="checkbox" className={s.input} defaultChecked={checked} disabled={disabled} />
      {disabled ? (
        <div className={s.blockDisabled}>
          <span className={s.checkbox}></span>
          <span className={s.checkboxOn}>
            <span className={s.check}></span>
          </span>
        </div>
      ) : (
        <div className={s.block}>
          <span className={s.checkbox}>
            <span className={s.checkboxOn}>
              <span className={s.check}></span>
            </span>
          </span>
        </div>
      )}

      <span className={s.text}>{children}</span>
    </label>
  )
}
