'use client'

import { cn } from "@/lib/utils";
import { Button } from "../ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation";

type Service = {
  children: React.ReactNode
  title: string
  href: string
}

export default function ServiceButton({ children, title, href }: Service) {
  const pathname = usePathname()

  return <Link key={title} href={href}>
  <Button variant="ghost" className={cn({
    "flex items-center gap-2": true,
    'bg-accent text-accent-foreground': pathname === href
  })}>
    { children }
  </Button>
</Link>
}
