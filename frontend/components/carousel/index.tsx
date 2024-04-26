import {
  Carousel as UiCarousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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
}

export async function CarouselList<D>({ data, RenderItem }: CarouselData<D>) {
  return data.map((props, index) => (
    <RenderItem key={index} {...props} />
  ))
}
