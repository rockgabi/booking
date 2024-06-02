'use client'

import { useInView } from "react-intersection-observer"
import { Carousel, CarouselList } from "../carousel"
import GalleryItem from "../gallery-item"
import exploreItems from "@/data/explore"

export default function Explore() {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return <Carousel ref={ref}>
    <CarouselList data={exploreItems} RenderItem={GalleryItem} carouselItemClassName="basis-1/5 xl:basis-1/6" shouldAnimate={inView} />
  </Carousel>
}
