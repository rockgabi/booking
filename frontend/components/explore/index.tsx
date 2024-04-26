import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

type Props = {

}

export default async function BrowseByType() {
  // get data from API

  return <Carousel>
    <CarouselContent>
      <BrowseByTypeList browseByTypes={browseByTypes} />
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
}