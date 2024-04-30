'use client'

import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group"
import { Button, ButtonProps } from "../ui/button"
import { LegacyRef, ReactNode, forwardRef, useState } from "react"
import { cn } from "@/lib/utils"
import { Carousel, CarouselList } from "../carousel"
import GalleryItem from "../gallery-item"
import tripPlannerItems from "@/data/trip-planner"

export default function TripPlanner() {
  const [vibe, setVibe] = useState("romance")

  return <div className="flex flex-col gap-4">
    <PlannerVibeSelector value={vibe} onValueChange={(v) => setVibe(v)} className="mx-[-12px]"/>
    <Carousel>
      <CarouselList data={tripPlannerItems} RenderItem={GalleryItem} carouselItemClassName="basis-1/3 sm:basis-1/4 md:basis-1/5 xl:basis-1/6" />
    </Carousel>
  </div>
}

type PlannerVibeSelectorProps = {
  value: string
  onValueChange: (value: string) => void
  className?: string
}

function PlannerVibeSelector({ value = "romance", onValueChange, className }: PlannerVibeSelectorProps) {

  return (
    <ToggleGroup value={value} onValueChange={onValueChange} type="single" className={cn("justify-start", className)}>
      <ToggleGroupItem value="romance" asChild>
        <VibeButton active={value === "romance"}>Romance</VibeButton>
      </ToggleGroupItem>
      <ToggleGroupItem value="beach" asChild>
        <VibeButton active={value === "beach"}>Beach</VibeButton>
      </ToggleGroupItem>
      <ToggleGroupItem value="outdoors" asChild>
        <VibeButton active={value === "outdoors"}>Outdoors</VibeButton>
      </ToggleGroupItem>
      <ToggleGroupItem value="city" asChild>
        <VibeButton active={value === "city"}>City</VibeButton>
      </ToggleGroupItem>
      <ToggleGroupItem value="relax" asChild>
        <VibeButton active={value === "relax"}>Relax</VibeButton>
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

PlannerVibeSelector.displayName = "PlannerVibeSelector";

interface Props extends ButtonProps {
  active?: boolean
  children: ReactNode
}

const VibeButton = forwardRef(({ active, children, ...props }: Props, ref) => {
  return <Button variant="ghost" className={cn({
    "flex items-center gap-2": true,
    'bg-accent text-accent-foreground': active
  })} {...props} ref={ref as LegacyRef<HTMLButtonElement>}>
    {children}
  </Button>
})
