'use client'

import items from "@/data/top-unique-properties";
import { useInView } from "react-intersection-observer";
import { Carousel, CarouselList } from "../carousel";
import PropertyItem from "./property-item";

export default function TopUniqueProperties() {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })
  
  return <div className="flex flex-col gap-4">
    <Carousel ref={ref}>
      <CarouselList data={items} RenderItem={PropertyItem} carouselItemClassName="basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4" shouldAnimate={inView} />
    </Carousel>
  </div>
}


