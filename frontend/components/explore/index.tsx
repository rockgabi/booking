import { ByType } from "../browse-by-type"
import browseByTypes from "@/data/browse-by-type"
import { Carousel, CarouselList } from "../carousel"

type Props = {

}

export default async function Explore() {
  // get data from API

  return <Carousel>
    <CarouselList data={browseByTypes} RenderItem={ByType} />
  </Carousel>
}
