import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import s from './style.module.scss'

interface ItemProps {
  item: string
}
interface ItemsProps {
  items: string[]
}
export function Example(props: ItemsProps) {
  return (
    <Carousel
      autoPlay={false}
      className={s.main}
      navButtonsWrapperProps={{ className: s.navButtonsWrapper }}
      navButtonsProps={{ className: s.navButtons }}
      indicatorContainerProps={{ className: s.indicatorContainer }}
      indicatorIconButtonProps={{ className: s.indicatorIcon }}
      activeIndicatorIconButtonProps={{ className: s.activeIndicatorIconButton }}
    >
      {props.items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  )
}

function Item(props: ItemProps) {
  return (
    <Paper>
      <img src={props.item} alt="img" style={{width: '491px', height: '504px', objectFit: 'contain'}} />
    </Paper>
  )
}
