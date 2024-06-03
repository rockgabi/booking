import { LucideIcon } from "lucide-react"
import dynamicIconImports from "lucide-react/dynamicIconImports"

export type GeniusRewards = {
  heading: string
  subHeading: string
  href: string
  variant: 'primary' | 'outline' | 'secondary' 
  icon?: keyof typeof dynamicIconImports;
}

const geniusRewards: GeniusRewards[] = [
  {
    heading: 'Genius',
    subHeading: `Gabriel, you're at <strong>Genius Level 1</strong> in our loyalty program`,
    href: '/genius-rewards',
    variant: 'primary',
    icon: 'car'
  },
  {
    heading: '10% discounts on stays',
    subHeading: `Enjoy discounts at participating properties worldwide`,
    href: '/10-stay-discounts',
    variant: 'outline',
    icon: 'home'
  },
  {
    heading: 'Genius perks',
    subHeading: `Get free breakfast, room upgrades, and more at select properties`,
    href: '/genius-perks',
    variant: 'secondary',
    icon: 'lamp'
  },
  {
    heading: 'Genius discounts',
    subHeading: `Save on attractions, tours, and more with Genius discounts`,
    href: '/genius-discounts',
    variant: 'secondary',
    icon: 'dollar-sign'
  }
]

export default geniusRewards
