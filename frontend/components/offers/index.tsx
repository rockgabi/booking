import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import offers, { type Offer as OfferType } from "@/data/offers"



export default async function Offers() {

  return <OfferList offers={offers} />
}

async function OfferList({ offers }: { offers: OfferType[] }) {
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {offers.map((offers, index) => (
      <Offer key={index} {...offers} />
    ))}
  </div>
}

type OfferProps = OfferType

async function Offer({ thumbnail, bgImage, heading, subheading, href, cta }: OfferProps) {

  const bgStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  return <Card className="shadow">
    <CardContent className="relative flex items-center p-6 gap-6 h-full" style={bgImage ? bgStyle : {}}>
      { thumbnail && <Image src={thumbnail} alt={heading} width={500} height={500} className="rounded w-[124px] h-[124px]" /> }
      <div className={cn({
        "flex flex-col gap-2": true,
        "text-white": bgImage
      })}>
        <h4 className="text-lg font-bold">{heading}</h4>
        <p className="text-sm">{subheading}</p>
        <Link href={href}>
          <Button className="">
            {cta}
          </Button>
        </Link>
      </div>
    </CardContent>
  </Card>
}