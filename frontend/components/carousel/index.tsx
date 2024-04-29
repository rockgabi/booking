import {
  Carousel as UiCarousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  CarouselItem,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import { ReactNode, HTMLAttributes } from "react"

export async function Carousel({ children }: { children: ReactNode }) {

  return <UiCarousel>
    <CarouselContent>
      { children }
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </UiCarousel>
}

interface RenderItemProps {
  [key: string]: any
}

export type CarouselProps<D> = {
  data: D[]
  RenderItem: (props: D) => ReactNode
  carouselItemClassName?: string
}

export async function CarouselList<D extends RenderItemProps>({ data, RenderItem, carouselItemClassName }: CarouselProps<D>) {
  return data.map((props, index) => (
    <CarouselItem key={index} className={cn("basis-1/3 xl:basis-1/4", carouselItemClassName)}>
      <RenderItem {...props} />
    </CarouselItem>
  ))
}
