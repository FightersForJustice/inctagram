import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ButtonFirst, Dot } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import s from './style.module.scss'

const MyCarousel = () => {
  return (
    <CarouselProvider className={s.carouselProvider} naturalSlideWidth={100} naturalSlideHeight={125} totalSlides={3}>
      <Slider>
        <Slide index={0} className={s.slide}>
          <img src="https://i1.sndcdn.com/artworks-L4zirmqEKN10GCkz-xIegBw-t500x500.jpg" alt="" />
        </Slide>
        <Slide index={1} className={s.slide}>
          <img src="https://avatars.mds.yandex.net/get-mpic/1521939/img_id5930763131513667029.jpeg/9" alt="" />
        </Slide>
        <Slide index={2} className={s.slide}>
          <img src="https://geo-media.beatport.com/image_size/500x500/f5a100ee-a9dd-4546-bf0a-01439ebb20c3.jpg" alt="" />
        </Slide>
      </Slider>
      <Dot slide={0} className={s.dot} />
      <ButtonBack className={s.buttonBack}>Back</ButtonBack>
      <ButtonNext className={s.buttonNext}>Next</ButtonNext>
    </CarouselProvider>
  )
}
export default MyCarousel
