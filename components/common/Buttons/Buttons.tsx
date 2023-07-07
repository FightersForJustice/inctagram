import styles from './Buttons.module.scss'

type MainButtonType = {
  title: string
  onClick: () => void
  disabled: boolean
  style?: React.CSSProperties
}

export const MainButton: React.FC<MainButtonType> = ({ title, onClick, disabled, style }) => {
  const customStyle = { ...style, width: style?.width }

  return (
    <button className={styles.mainButton} onClick={onClick} disabled={disabled} style={customStyle}>
      {title}
    </button>
  )
}

//other buttons
