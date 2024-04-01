
export type Notification = {
  id: number
  content: string
  keepReadingLink?: string
  viewed: boolean
}

const notifications = [
  { 
    id: 1,
    content: "There are new home listings in your area.",
    keepReadingLink: "/listings",
    viewed: false
  },
  { 
    id: 2,
    content: "Looking for low prices? We've got an entire page dedicated to finding you fantastic deals in your favourite places.",
    viewed: false
  }
]

export default notifications
