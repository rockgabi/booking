import {
  Carousel as UiCarousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  CarouselItem,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

export async function Carousel({ children }: { children: React.ReactNode }) {

  return <UiCarousel>
    <CarouselContent>
      { children }
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </UiCarousel>
}

export type CarouselData<D> = {
  data: D[]
  RenderItem: (props: D) => React.ReactNode
  carouselItemClassName?: string
}

export async function CarouselList<D>({ data, RenderItem, carouselItemClassName }: CarouselData<D>) {
  return data.map((props, index) => (
    <CarouselItem className={cn("basis-1/3 xl:basis-1/4", carouselItemClassName)}>
      <RenderItem key={index} {...props} />
    </CarouselItem>
  ))
}
