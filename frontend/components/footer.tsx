import Link from "next/link";

export default function Footer() {

  // It should be a 3-column list of links footer. Above the columns there should be a logo with a link to the home
  return <footer className="flex justify-center p-4 bg-gray-800 text-white">
    <div className="flex flex-col container mx-auto gap-8">
      <h1 className="text-2xl font-bold"><Link href="/">Booking</Link></h1>
      <div className="flex flex-wrap flex-col sm:flex-row gap-8 sm:gap-0">
        <div className="flex-1 flex flex-col gap-2">
          <p>Bs.As Argentina</p>
          <p>Rockgabi</p>
          <p>2236697076</p>
          <p>Rockgabi</p>
        </div>

        <ul className="flex-1 flex flex-col gap-2">
          <li>
            <Link href="#">Our Story</Link>
          </li>
          <li>
            <Link href="#">Get in Touch</Link>
          </li>
          <li>
            <Link href="#">Our Privacy Commitment</Link>
          </li>
          <li>
            <Link href="#">Terms of Service</Link>
          </li>
          <li>
            <Link href="#">Customer Assistence</Link>
          </li>
        </ul>

        <ul className="flex-1 flex flex-col gap-2">
          <li>
            <Link href="#">Dining Experience</Link>
          </li>
          <li>
            <Link href="#">Wellness</Link>
          </li>
          <li>
            <Link href="#">Fitness</Link>
          </li>
          <li>
            <Link href="#">Sports</Link>
          </li>
          <li>
            <Link href="#">Events</Link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
}
