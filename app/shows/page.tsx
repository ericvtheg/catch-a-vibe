"use client";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./slide";
import { EffectCards } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import data from "../../public/data.json";
import { useState } from "react";

const colors = ["bg-secondary", "bg-accent", "bg-neutral"];

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  const updateIndex = (swiperInstance: any) => {
    if (swiperInstance === null) return;
    const currentIndex = swiperInstance?.activeIndex;
    setCurrentIndex(currentIndex);

    if (currentIndex > maxIndex) {
      setMaxIndex(currentIndex);
    }
  };

  return (
    <Swiper
      modules={[EffectCards]}
      effect={"cards"}
      cardsEffect={{
        slideShadows: false,
      }}
      grabCursor={true}
      initialSlide={currentIndex}
      onActiveIndexChange={updateIndex}
    >
      {data.slice(0, maxIndex + 2).map((data, idx) => {
        return (
          <SwiperSlide key={idx} className="w-[22rem]">
            <Slide
              backgroundColor={colors[idx % colors.length]}
              idx={idx}
              data={{
                soundCloudLink: data.song.link,
                artist: {
                  stageName: data.artist,
                  genres: [data.genre],
                  imageUrl: data.pic,
                },
                show: {
                  price: data.show.price,
                  minAge: data.show.minAge as any,
                  time: data.show.time,
                  date: data.show.date,
                  dateTime: new Date(),
                  ticketsLink: data.show.link,
                  venue: {
                    coords: data.show.location.coords as [number, number],
                    name: data.show.location.name,
                    area: data.show.location.area,
                  },
                },
              }}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
