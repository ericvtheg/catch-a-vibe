'use client'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide from './slide';
import { EffectCards } from "swiper";

// Import Swiper styles
import "swiper/css/effect-cards";
import 'swiper/css'

const colors = ["bg-primary", "bg-secondary", "bg-accent", "bg-neutral"];

export default function Page() {
  return (
    <Swiper
      // install Swiper modules
      effect={"cards"}
      cardsEffect={{
        slideShadows: false
      }}
      grabCursor={true}
      modules={[EffectCards]}
    >
      {
        Array(4).fill(0).map((_, idx) => {
          return (<SwiperSlide key={idx}><Slide backgroundColor={colors[idx % colors.length]} /></SwiperSlide>);
        })
      }

    </Swiper>
  )
}
