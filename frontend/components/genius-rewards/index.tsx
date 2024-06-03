'use client'

import geniusRewards from "@/data/genius-rewards";
import { Carousel, CarouselList } from "../carousel";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";
import LucideIconLazy from "../ui/lucide-icon-lazy";
import { DelayedEnterAnimation } from "../ui/delayed-enter-animation";
import dynamicIconImports from "lucide-react/dynamicIconImports";

export default function GeniusRewards() {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return <Carousel ref={ref}>
    <CarouselList data={geniusRewards} RenderItem={geniusRewardsItem} carouselItemClassName="basis-1/1 md:basis-1/2 lg:basis-1/3 xl:basis-1/3" shouldAnimate={inView} />
  </Carousel>
}

interface GeniusRewardsItem extends React.HTMLAttributes<HTMLAnchorElement>, VariantProps<typeof geniusRewardsItemVariants> {
  heading: string
  subHeading: string
  href: string
  icon?: keyof typeof dynamicIconImports
}

const geniusRewardsItemVariants = cva("", {
  variants: {
    variant: {
      primary: "bg-primary text-primary-foreground hover:bg-primary/90",
      outline:
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      secondary:
        "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
}
)

function geniusRewardsItem({ heading, subHeading, href, variant, icon, className }: GeniusRewardsItem) {
  return <Link href={href} className="flex h-full">
    <Card className={cn("shadow-md", geniusRewardsItemVariants({ variant, className }))}>
      <CardContent className="flex flex-col items-center p-6 gap-6">
        <div className="flex w-full">
          <h3 className="text-lg font-bold">{heading}</h3>
          {/* This slows a lot the local env server, waiting for fix:  https://github.com/lucide-icons/lucide/pull/2030
          {icon && <div className="ml-auto">
            <DelayedEnterAnimation index={0} totalItems={1} shouldAnimate={true} stagger={0.6}>
              <LucideIconLazy name={icon} />
            </DelayedEnterAnimation>
          </div>} */}
        </div>
        <p dangerouslySetInnerHTML={{ __html: subHeading }} />
      </CardContent>
    </Card>
  </Link>
}
