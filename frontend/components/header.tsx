import { getServerSession } from "@/lib/auth";
import Link from "next/link";
import NotificationButton from "./notification-button";
import notifications from "@/data/notifications";
import SessionButton from "./session-button";
import { cn } from "@/lib/utils";
import CurrencyButton from "./currency-button";
import ServiceNav from "./service-nav";
import { ModeToggle } from "./theme-mode-toggle";
import { Button } from "./ui/button";

export default async function Header() {
  const session = await getServerSession()

  return (
    <header className="bg-alt text-alt-foreground">
      <div className="container flex flex-col max-w-[1174px]">
        <div className="flex justify-between items-center px-4 py-2 mx-4">
          <h1 className="text-2xl font-bold"><Link href="/">Booking</Link></h1>
          <nav className="flex gap-2 items-center">
            <CurrencyButton className={cn(
              'hidden lg:flex'
            )} />

            <NotificationButton notifications={notifications} />

            <Link href="/list-your-property" className={cn(
              "hidden lg:block leading-6 min-h-[32px]"
            )} passHref legacyBehavior><Button variant="ghost">List your property</Button></Link>

            {
              session ? (
                <SessionButton  />
              ) : (
                <Link href="/api/auth/signin" passHref legacyBehavior><Button variant="ghost">Sign In</Button></Link>
              )
            }

            <ModeToggle />
          </nav>
        </div>

        <ServiceNav className="mx-4 mb-8 xl:mb-16" />

        <div className="mx-8 mb-12 xl:mb-20">
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-2">Where to next, Gabriel?</h2>
          <h3 className="text-xl lg:text-2xl">Find exclusive Member rewards in every corner of the world!</h3>
        </div>
      </div>
    </header>
  );
}
