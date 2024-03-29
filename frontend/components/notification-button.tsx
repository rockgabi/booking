import { Bell } from "lucide-react";
import { Button } from "./ui/button";
import { DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose, Drawer } from "./ui/drawer";
import Link from "next/link";

export default function NotificationButton() {

  return <>
    <Drawer direction="top">
      <DrawerTrigger>
        <Bell />
      </DrawerTrigger>
      <DrawerContent className="top-0 bottom-auto rounded-t-none rounded-b-[10px]">
        <DrawerHeader>
          <DrawerTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Notifications</DrawerTitle>
          <DrawerDescription>See what&apos;s going on</DrawerDescription>
        </DrawerHeader>

        <NotificationItem content="There are new home listings in your area." keepReadingLink="/listings" />
        <NotificationItem content="Looking for low prices? We&apos;ve got an entire page dedicated to finding you fantastic deals in your favourite places." />

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

function NotificationItem({ content, keepReadingLink }: NotificationItemProps) {
  return <div className="flex items-center text-left gap-4 mt-6 px-4">
    <Bell className="w-[24px] h-[24px] flex-shrink-0" />
    <p className="leading-7">
      {content}
      {keepReadingLink && <Link href={keepReadingLink}>Learn more</Link>}.
    </p>
  </div>
}