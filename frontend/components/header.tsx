import { getServerSession } from "@/lib/auth";
import Link from "next/link";
import NotificationButton from "./notification-button";
import notifications from "@/data/notifications";
import SessionButton from "./session-button";
import { cn } from "@/lib/utils";

const buttonBg = "relative text-current before:absolute before:inset-0 before:content-[' '] before:bg-accent before:opacity-0 hover:before:opacity-[0.15] before:rounded px-3 py-2";

export default async function Header() {
  const session = await getServerSession()

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold"><Link href="/">Booking</Link></h1>
      <nav className="flex space-x-4 items-center">
        <NotificationButton notifications={notifications} className={buttonBg} />
        <Link href="/list-your-property" className={cn(
          "leading-6 min-h-[32px]",
          buttonBg
        )}>List your property</Link>
        {
          session ? (
            <SessionButton className={buttonBg} />
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
