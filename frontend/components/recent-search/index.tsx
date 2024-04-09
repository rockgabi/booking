import {
  Card,
  CardContent,
} from "@/components/ui/card"
import recentSearches, { type RecentSearches } from "@/data/recent-search"
import Image from "next/image"
import Link from "next/link"

export default async function RecentSearches() {
  // get data from API

  return <RecentSearchList recentSearches={recentSearches} />
}

type RecentSearchListProps = {
  recentSearches: RecentSearches[]
}

export async function RecentSearchList({ recentSearches }: RecentSearchListProps) {
  return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {recentSearches.map((recentSearch, index) => (
      <RecentSearch key={index} {...recentSearch} />
    ))}
  </div>
}

type RecentSearchProps = {
  image: string
  heading: string
  date: string
  numberOfPeople: number
  href: string
}

export async function RecentSearch({ image, heading, date, numberOfPeople, href }: RecentSearchProps) {
  return <Link href={href} className="hover:animate-pulse">
    <Card className="shadow-md">
      <CardContent className="flex items-center p-6 gap-6">
        <Image src={image} alt={heading} width={100} height={100} />
        <div className="flex flex-col gap-2">
          <h4 className="font-bold">{heading}</h4>
          <p className="">{date}, {numberOfPeople} people </p>
        </div>
      </CardContent>
    </Card>
  </Link>
}