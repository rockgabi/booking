'use client'

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import recentSearches, { type RecentSearch as RecentSearchType } from "@/data/recent-search"
import Image from "next/image"
import Link from "next/link"
import { DelayedEnterAnimation } from "../ui/delayed-enter-animation"

export default async function RecentSearches() {
  // get data from API

  return <RecentSearchList recentSearches={recentSearches} />
}

type RecentSearchListProps = {
  recentSearches: RecentSearchType[]
}

export async function RecentSearchList({ recentSearches }: RecentSearchListProps) {
  return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {recentSearches.map((recentSearch, index) => (
      <DelayedEnterAnimation key={index} index={index} totalItems={recentSearches.length}>
        <RecentSearch {...recentSearch} />
      </DelayedEnterAnimation>
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
  return <Link href={href} className="">
    <Card className="shadow-md">
      <CardContent className="flex items-center p-6 gap-6">
        <Image src={image} alt={heading} width={100} height={100} className="rounded w-[64px] h-[64px]" />
        <div className="flex flex-col gap-1">
          <h4 className="text-sm font-bold">{heading}</h4>
          <p className="text-xs">{date}, {numberOfPeople} people </p>
        </div>
      </CardContent>
    </Card>
  </Link>
}