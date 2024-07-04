import Link from "next/link";
import { getServerSession } from "next-auth";
import AvatarIcon from "./avatar-icon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowDownToLine, MessageCircle, Plane, User2, UserRoundX, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

type Props = {
  className?: string
}

export default async function SessionButton({ className }: Props) {
  const session = await getServerSession()

  if (!session || !session.user) {
    throw new Error('No user session found. Component relias on the user session.')
  }

  return <DropdownMenu>
    <DropdownMenuTrigger className={cn(
      className
    )} asChild>
      <Button variant="ghost" className="flex items-center gap-3">
        <AvatarIcon />
        <div className="hidden lg:flex flex-col items-start">
          <span className="text-sm font-semibold">{session.user.name}</span>
          <span className="text-xs">{session.user.geniusLevel}</span>
        </div>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="max-w-[360px]">
      <DropdownLinkItem href="/manage-account"><User2 /> Manage Account</DropdownLinkItem>
      <DropdownLinkItem href="/manage-account"><Plane /> Bookings & Trips</DropdownLinkItem>
      <DropdownLinkItem href="/rewards-programme"><Wallet /> Rewards Programme</DropdownLinkItem>
      <DropdownLinkItem href="/reviews"><MessageCircle /> Reviews</DropdownLinkItem>
      <DropdownLinkItem href="/saved"><ArrowDownToLine /> Saved</DropdownLinkItem>
      <DropdownLinkItem href="/api/auth/signout"><UserRoundX /> Sign out</DropdownLinkItem>
    </DropdownMenuContent>
  </DropdownMenu>
}

type DropdownLinkItemProps = {
  href: string
  children: React.ReactNode
}

function DropdownLinkItem({ href, children }: DropdownLinkItemProps) {
  return <DropdownMenuItem>
    <Link href={href} className="flex items-center gap-2">{children}</Link>
  </DropdownMenuItem>
}

