import browseByTypes, { type ByType as ByTypeType } from "@/data/browse-by-type"
import Link from "next/link"
import { Card, CardContent } from "../ui/card"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export async function BrowseByType() {
  // get data from API

  return <Carousel>
    <CarouselContent>
      <BrowseByTypeList browseByTypes={browseByTypes} />
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
}

type BrowseByTypeListProps = {
  browseByTypes: ByTypeType[]
}

export async function BrowseByTypeList({ browseByTypes }: BrowseByTypeListProps) {
  return browseByTypes.map((browseByType, index) => (
    <ByType key={index} {...browseByType} />
  ))
}

type ByTypeProps = ByTypeType

async function ByType({ image, heading, href }: ByTypeProps) {
  return <CarouselItem className="basis-1/3 xl:basis-1/4">
    <Link href={href} className="hover:animate-pulse">
      <Card className="shadow-md">
        <CardContent className="flex items-center p-6 gap-6">
          <Image src={image} alt={heading} width={100} height={100} className="rounded w-[64px] h-[64px]" />
          <div className="flex flex-col gap-1">
            <h4 className="text-sm font-bold">{heading}</h4>
          </div>
        </CardContent>
      </Card>
    </Link>
  </CarouselItem>
}
