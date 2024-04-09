
export type RecentSearches = {
  image: string
  heading: string
  date: string
  numberOfPeople: number
  href: string
}

const recentSearches: RecentSearches[] = [
  {
    image: 'https://picsum.photos/200/200',
    heading: 'Tokyo',
    date: '17 Sept-24 Sept',
    numberOfPeople: 2,
    href: '/tokyo',
  },
  {
    image: 'https://picsum.photos/200/200',
    heading: 'Osaka',
    date: '17 Sept-24 Sept',
    numberOfPeople: 2,
    href: '/osaka',
  },
  {
    image: 'https://picsum.photos/200/200',
    heading: 'Kyoto',
    date: '17 Sept-24 Sept',
    numberOfPeople: 2,
    href: '/kyoto',
  }
]

export default recentSearches
