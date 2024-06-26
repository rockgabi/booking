import { cn } from "@/lib/utils"

type Props = {
  children: React.ReactNode
  className?: string
  heading?: string
  subheading?: string
}

export default async function Section({ children, className, heading, subheading }: Props) {
  return <section className={cn('mb-12 w-full', className)}>
    <div className="flex flex-col gap-2 mb-2">
      <h3 className="text-xl lg:text-2xl font-extrabold tracking-tight">{heading}</h3>
      <h4 className="text-subtitle">{subheading}</h4>
    </div>

    {children}
  </section>
}
