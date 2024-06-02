
export type GeniusRewards = {
  heading: string
  subHeading: string
  href: string
  variant: 'primary' | 'outline' | 'secondary' 
}

const geniusRewards: GeniusRewards[] = [
  {
    heading: 'Genius',
    subHeading: `Gabriel, you're at <strong>Genius Level 1</strong> in our loyalty program`,
    href: '/genius-rewards',
    variant: 'primary',
  },
  {
    heading: '10% discounts on stays',
    subHeading: `Enjoy discounts at participating properties worldwide`,
    href: '/10-stay-discounts',
    variant: 'outline',
  },
  {
    heading: 'Genius perks',
    subHeading: `Get free breakfast, room upgrades, and more at select properties`,
    href: '/genius-perks',
    variant: 'secondary',
  },
  {
    heading: 'Genius discounts',
    subHeading: `Save on attractions, tours, and more with Genius discounts`,
    href: '/genius-discounts',
    variant: 'secondary',
  }
]

export default geniusRewards
