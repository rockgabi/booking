'use client'

import { Bell } from "lucide-react";
import { Button } from "./ui/button";
import { DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose, Drawer } from "./ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
import { useMediaQuery } from "@/hooks/use-media-query"
import { Notification } from "@/data/notifications"

type Props = {
  notifications: Notification[],
  className?: string
}

export default function NotificationButton({ notifications, className }: Props) {

  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) return (
    <DropdownMenu>
      <DropdownMenuTrigger className={className} asChild>
        <Button variant="ghost">
          <IconWithNotificationNumber>{notifications.length}</IconWithNotificationNumber>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-w-[360px]">
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {notifications.map(notification => (
          <DropdownNotificationItem key={notification.id} {...notification} />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )

  return <>
    <Drawer direction="top">
      <DrawerTrigger className={className}>
        <IconWithNotificationNumber>{notifications.length}</IconWithNotificationNumber>
      </DrawerTrigger>
      <DrawerContent className="top-0 bottom-auto rounded-t-none rounded-b-[10px]">
        <DrawerHeader>
          <DrawerTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Notifications</DrawerTitle>
          <DrawerDescription>See what&apos;s going on</DrawerDescription>
        </DrawerHeader>
        {notifications.map(notification => (
          <DrawerNotificationItem key={notification.id} {...notification} />
        ))}
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  </>
}

type NotificationItemProps = {
  content: string
  keepReadingLink?: string
}

function DrawerNotificationItem({ content, keepReadingLink }: NotificationItemProps) {
  return <div className="flex items-center text-left gap-4 mt-6 px-4">
    <Bell className="w-[24px] h-[24px] flex-shrink-0" />
    <p className="leading-7">
      <span>
        {content}
        {keepReadingLink && <Link href={keepReadingLink}> Learn more</Link>}.
      </span>
    </p>
  </div>
}

function DropdownNotificationItem({ content, keepReadingLink }: NotificationItemProps) {
  return <DropdownMenuItem>
    <span>
      {content}
      {keepReadingLink && <Link href={keepReadingLink}> Learn more</Link>}.
    </span>
  </DropdownMenuItem>
}

function IconWithNotificationNumber({ children }: { children: React.ReactNode }) {
  return <div className="relative">
    <Bell />
    { children && <div className="absolute top-0 right-0 w-4 h-4 flex items-center justify-center text-xs font-semibold bg-primary text-white rounded-full">
      {children}
    </div>}
  </div>
}