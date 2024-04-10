import trendingDestinations, { type TrendingDestination as TrendingDestinationType } from "@/data/trending-destinations"
import Image from "next/image"
import Link from "next/link"

export default async function TrendingDestinations() {

  return <TrendingDestinationGrid trendingDestinations={trendingDestinations} />
}

function TrendingDestinationGrid({ trendingDestinations }: { trendingDestinations: TrendingDestinationType[] }) {
  const firstTwoDestinations = trendingDestinations.slice(0, 2)
  const nextThreeDestinations = trendingDestinations.slice(2, 5)

  return <div className="flex flex-col gap-3">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {firstTwoDestinations.map(destination => (
        <TrendingDestinationCard key={destination.heading} destination={destination} />
      ))}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {nextThreeDestinations.map(destination => (
        <TrendingDestinationCard key={destination.heading} destination={destination} />
      ))}
    </div>
  </div>
}

function TrendingDestinationCard({ destination }: { destination: TrendingDestinationType }) {
  return <Link href={destination.href} className="relative flex flex-col text-white px-4 py-6 min-h-[200px] xl:min-h-[270px]">
    <div className="absolute inset-0">
      <Image fill={true} src={destination.image} alt={destination.heading} className="w-full h-full object-cover rounded-lg" />
    </div>
    <div className="flex items-center z-[1] gap-2">
      <p className="text-xl font-bold drop-shadow-md">{destination.heading}</p>
      <Image src={destination.flag} alt={`Flag of ${destination.heading}`} width={24} height={24} className="w-8 h-8" />
    </div>
  </Link>
}