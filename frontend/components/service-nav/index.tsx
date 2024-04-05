import { Bed, Car, CarTaxiFront, Plane, RollerCoaster } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Bed,
    title: 'Stays',
    href: '/stays'
  }, {
    icon: Plane,
    title: 'Flights',
    href: '/flights'
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

  return <div className={cn(
    "flex gap-3 px-4",
    className
  )}>
    {services.map((service) =>
      <Link key={service.title} href={service.href}>
        <Button variant="ghost" className="flex items-center gap-2">
          <service.icon />
          <span>{service.title}</span>
        </Button>
      </Link>
    )}
  </div>
}