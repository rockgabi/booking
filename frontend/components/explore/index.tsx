import { Carousel, CarouselList } from "../carousel"
import GalleryItem from "../gallery-item"
import exploreItems from "@/data/explore"

type Props = {

}

export default async function Explore() {
  // get data from API

  return <Carousel>
    <CarouselList data={exploreItems} RenderItem={GalleryItem} carouselItemClassName="basis-1/5 xl:basis-1/6" />
  </Carousel>
}
