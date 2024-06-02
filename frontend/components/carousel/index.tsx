'use client'
import {
  Carousel as UiCarousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  CarouselItem,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import { ReactNode, forwardRef, LegacyRef } from "react"
import { DelayedEnterAnimation } from "../ui/delayed-enter-animation"
import { useInView } from "react-intersection-observer"

type CarouselProps = {
  children: ReactNode
  style?: any
}

export const Carousel = forwardRef<HTMLDivElement, CarouselProps>(({ children, style }: CarouselProps, ref) => {
  return (
    <UiCarousel ref={ref} style={style}>
      <CarouselContent>
        {children}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </UiCarousel>
  )
})

interface RenderItemProps {
  [key: string]: any
}

export type CarouselListProps<D> = {
  data: D[]
  RenderItem: (props: D) => ReactNode
  carouselItemClassName?: string
  shouldAnimate?: boolean
}

export function CarouselList<D extends RenderItemProps>({ data, RenderItem, carouselItemClassName, shouldAnimate }: CarouselListProps<D>) {

  return data.map((props, index) => (
    <CarouselItem key={index} className={cn("basis-1/3 xl:basis-1/4", carouselItemClassName)}>
      <DelayedEnterAnimation index={index} totalItems={data.length} shouldAnimate={shouldAnimate}>
        <RenderItem {...props} />
      </DelayedEnterAnimation>
    </CarouselItem>
  ))
}
