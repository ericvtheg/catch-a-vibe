'use client'

import Slide from "./slide"
import SoundCloudPlayer from "./soundcloud"
import Image from "next/image"

export default function Page() {
  return (
    <div className="carousel carousel-center w-4/5 max-w-lg p-4 space-x-4 bg-neutral rounded-box">
      <div className="carousel-item">
        <Slide />
      </div>
      <div className="carousel-item">
        <Slide />
      </div>
      <div className="carousel-item">
        <Slide />
      </div>
    </div>
  )
}
