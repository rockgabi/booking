
export type Offer = {
  thumbnail?: string
  bgImage?: string
  heading: string
  subheading: string
  href: string
  cta: string
}

const offers: Offer[] = [
  {
    bgImage: "https://q-xx.bstatic.com/xdata/images/xphoto/714x300/316455553.jpeg?k=33c0362560b6aa7ff9ba2afc3ef8d120728107cf56cd1c006fcf0da8c1821735&o=",
    heading: "Seize the moment",
    subheading: "Save 15% or more when you book and stay before 1 October 2024",
    href: "/offers/seize-the-moment",
    cta: "Find getaway deals"
  },
  {
    thumbnail: "https://q-xx.bstatic.com/xdata/images/xphoto/500x500/320647664.png?k=698a838d781fe6952e506a3856a7fa5c22056d98e571eb3cf9e448afa98eba81&o=",
    heading: "Planning a trip to the 2024 Summer Games?",
    subheading: "Brussels is a quick train ride from all the action",
    href: "/offers/explore-brussels",
    cta: "Explore Brussels"
  },
]

export default offers
