import { getServerSession } from "@/lib/auth";
import Link from "next/link";
import NotificationButton from "./notification-button";
import notifications from "@/data/notifications";
import SessionButton from "./session-button";
import { cn } from "@/lib/utils";
import CurrencyButton from "./currency-button";
import ServiceNav from "./service-nav";

const buttonBg = "relative text-current before:absolute before:inset-0 before:content-[' '] before:bg-accent before:opacity-0 hover:before:opacity-[0.15] before:rounded px-3 py-2";

export default async function Header() {
  const session = await getServerSession()

  return (
    <header className="bg-gray-800 text-white">
      <div className="container flex flex-col max-w-[1174px]">
        <div className="flex justify-between items-center px-4 py-2 mx-4">
          <h1 className="text-2xl font-bold"><Link href="/">Booking</Link></h1>
          <nav className="flex space-x-3 items-center">
            <CurrencyButton className={cn(
              'hidden lg:flex',
              buttonBg
            )} />

            <NotificationButton notifications={notifications} className={buttonBg} />

            <Link href="/list-your-property" className={cn(
              "hidden lg:block leading-6 min-h-[32px] font-semibold",
              buttonBg
            )}>List your property</Link>

            {
              session ? (
                <SessionButton className={buttonBg} />
              ) : (
                <Link href="/api/auth/signin" className={buttonBg}>Sign In</Link>
              )
            }
          </nav>
        </div>

        <ServiceNav className="mx-4 mb-8 xl:mb-16" />

        <div className="mx-8 mb-12 xl:mb-20">
          <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-2">Where to next, Gabriel?</h2>
          <h3 className="text-xl lg:text-2xl">Find exclusive Member rewards in every corner of the world!</h3>
        </div>
      </div>
    </header>
  );
}
