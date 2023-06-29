import PropTypes from 'prop-types'
import React from 'react'
import s from './Header.module.css'
import Mask from './mask.svg'

interface Props {
  className: any
}

export const Logo = ({ className }: Props): JSX.Element => {
  return <div className={s.inctagram}>Instagram</div>
}

Logo.propTypes = {
  mask: PropTypes.string,
}
