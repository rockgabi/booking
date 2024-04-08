import { Bed, Car, CarTaxiFront, LucideIcon, Plane, RollerCoaster } from "lucide-react"
import { cn } from "@/lib/utils"
import ServiceButton from "./service-button"
import { ScrollArea, ScrollBar } from "../ui/scroll-area"

type Service = {
  icon: LucideIcon
  title: string
  href: string
}

const services = [
  {
    icon: Bed,
    title: 'Stays',
    href: '/stays'
  }, {
    icon: Plane,
    title: 'Flights',
    href: '/'
  }, {
    icon: Car,
    title: 'Car rentals',
    href: '/cars'
  }, {
    icon: RollerCoaster,
    title: 'Attractions',
    href: '/attractions'
  }, {
    icon: CarTaxiFront,
    title: 'Taxis',
    href: '/taxis'
  }
]

type Props = {
  className?: string
}

export default async function ServiceNav({ className }: Props) {

  return <ScrollArea className={className}>
    <ScrollBar orientation="horizontal" />
    <div className="flex gap-3 py-4">
    {services.map((service) =>
      <ServiceButton key={service.title} title={service.title} href={service.href}>
        <service.icon />
        <span>{service.title}</span>
      </ServiceButton>
    )}
    </div>
  </ScrollArea>
}