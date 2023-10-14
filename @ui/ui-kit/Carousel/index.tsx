import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ButtonFirst, Dot, DotGroup } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import s from './style.module.scss'
import classNames from 'classnames'

type PropsType = {
  items: string[]
  naturalHeight?: number
}

const MyCarousel: React.FC<PropsType> = ({ items, naturalHeight = 504 }) => {
  const listItems = items.map((item: string, index) => (
    <Slide index={0} innerClassName={s.slideInner} key={index}>
      <img src={item} alt="" />
    </Slide>
  ))
  const styleCarouselProvider = { height: naturalHeight }
  return (
    <CarouselProvider
      className={classNames(s.carouselProvider, styleCarouselProvider)}
      naturalSlideWidth={491}
      naturalSlideHeight={naturalHeight}
      totalSlides={items.length}
    >
      <Slider>{listItems}</Slider>
      <DotGroup className={s.dot} />
      <ButtonBack className={classNames(s.buttonBack, s.button)}>
        <img src="/sidebar-icons/arrow-ios-back-outline.svg" alt="Back" />
      </ButtonBack>
      <ButtonNext className={classNames(s.buttonNext, s.button)}>
        <img src="/sidebar-icons/arrow-ios-forward-outline.svg" alt="Next" />
      </ButtonNext>
    </CarouselProvider>
  )
}
export default MyCarousel
