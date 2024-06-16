import Link from "next/link";
import Image from "next/image";
import { Badge } from "../ui/badge";

type PropertyItemProps = {
  id: string;
  image: string;
  heading: string;
  subheading: string;
  price: number;
  numOfReviews: number;
  rating: number;
  readableRating: string;
}

export default function PropertyItem({ id, image, heading, subheading, price, numOfReviews, rating, readableRating }: PropertyItemProps) {
  return (
    <Link href={`/property/${id}`} className="relative flex flex-col gap-3 hover:animate-pulse h-full pb-1/1">
      <Image src={image} alt={heading} className="inset-0 h-full w-full object-cover rounded-lg" width={170} height={136} layout="responsive" />
      <div className="flex flex-col gap-1 h-full">
        <h4 className="text-sm font-bold line-clamp-2">{heading}</h4>
        {subheading && <h5 className="text-xs text-muted-foreground">{subheading}</h5>}
        <div className="flex flex-col sm:flex-row gap-2">
          <Badge variant="default" className="justify-center">{rating}</Badge>
          <p className="text-xs">{readableRating} - {numOfReviews} reviews</p>
        </div>
        <p className="text-xs ml-auto mt-auto">Starting from: <span className="font-bold text-lg">${price}</span></p>
      </div>
    </Link>
  );
}