import React from 'react'
import Link from 'next/link'
import { Button, ButtonType } from '../Button/Button'

type ButtonLinkProps = {
  url: string
  text: ButtonType['text']
  color?: ButtonType['color']
  disabled?: ButtonType['disabled']
  onClick?: ButtonType['onClick']
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({ url, text, color, disabled, onClick }) => {
  const isInternal = url.startsWith('/')

  if (!isInternal) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer nofollow">
        <Button disabled={disabled} onClick={onClick} text={text} color={color} />
      </a>
    )
  }

  return (
    <Link href={url}>
      <Button disabled={disabled} onClick={onClick} text={text} color={color} />
    </Link>
  )
}
