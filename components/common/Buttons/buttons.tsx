import styles from './buttons.module.scss'

type MainButtonType = {
  title: string
  onClick: () => void
  disabled: boolean
}

export const MainButton: React.FC<MainButtonType> = ({ title, onClick, disabled }) => {
  return (
    <button className={styles.mainButton} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  )
}

//other buttons
