import styles from './buttons.module.scss'

type MainButtonType = {
  title: string
  onClick: () => void
}

export const MainButton: React.FC<MainButtonType> = ({ title, onClick }) => {
  return (
    <button className={styles.mainButton} onClick={onClick}>
      {title}
    </button>
  )
}

//other buttons
