import { getServerSession } from "@/libs/auth";
import Link from "next/link";

export default async function Header() {
  const session = await getServerSession()

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold"><Link href="/">Booking</Link></h1>
      <nav>
        <ul className="flex space-x-4">
        <li>
            <Link href="/api/auth/signin">Rooms</Link>
          </li>
          <li>
            <Link href="/api/auth/signin">Contact</Link>
          </li>
          {
            session ? (
              <li>
                <Link href="/api/auth/signout">Sign Out</Link>
              </li>
            ) : (
              <li>
                <Link href="/api/auth/signin">Sign In</Link>
              </li>
            )
          }
        </ul>
      </nav>
    </header>
  );
}
