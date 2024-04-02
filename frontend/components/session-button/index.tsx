import Link from "next/link";
import AvatarIcon from "./avatar-icon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowDownToLine, MessageCircle, Plane, User2, UserRoundX, Wallet } from "lucide-react";

export default async function SessionButton() {
  return <DropdownMenu>
  <DropdownMenuTrigger>
    <AvatarIcon />
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

