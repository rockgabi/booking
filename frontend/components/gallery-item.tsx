import Link from "next/link"
import Image from "next/image"

type Props = {
  image: string
  heading: string
  subheading?: string
  href: string
}

export default function GalleryItem({ image, heading, subheading, href }: Props) {
  return (
    <Link href={href} className="flex flex-col gap-4 hover:animate-pulse">
      <Image src={image} alt={heading} className="w-full h-auto object-cover rounded-lg" width={170} height={136} />
      <div className="flex flex-col gap-1">
        <h4 className="text-sm font-bold">{heading}</h4>
        {subheading && <h5 className="text-sm text-muted-foreground">{subheading}</h5>}
      </div>
    </Link>
  )
}
