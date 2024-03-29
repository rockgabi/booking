import { getServerSession } from "@/lib/auth";
import { Bell } from 'lucide-react'
import Link from "next/link";
import Avatar from "./avatar";
import { Button } from "./ui/button";
import NotificationButton from "./notification-button";

export default async function Header() {
  const session = await getServerSession()

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold"><Link href="/">Booking</Link></h1>
      <nav className="flex space-x-4">
        <NotificationButton />
        {
          session ? (
            <Avatar src={session.user?.image as string} />
          ) : (
            <li>
              <Link href="/api/auth/signin">Sign In</Link>
            </li>
          )
        }
      </nav>
    </header>
  );
}
