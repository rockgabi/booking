
type TopUniqueProperty = {
  id: string;
  image: string;
  heading: string;
  subheading: string;
  price: number;
  numOfReviews: number;
  rating: number;
  readableRating: string;
}

const topUniqueProperties: TopUniqueProperty[] = [
  {
    id: "62gf3",
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/126764303.webp?k=46a8a949ef420510834df06d0d88e293fbaae80cd1e17883cb78c1bba3eb0366&o=",
    heading: "Agriturismo Cabrele",
    subheading: "Italy, Santorso",
    price: 653500,
    numOfReviews: 45,
    rating: 9.7,
    readableRating: "Wonderful"
  },
  {
    id: "a2fg3",
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/154543781.webp?k=847c6d1ffe92003d2d7c9cf7043c6acda1c550e6f0c7c981370a6303f12a10cf&o=",
    heading: "Carinya Park",
    subheading: "Australia, Gembrook",
    price: 1220000,
    numOfReviews: 31,
    rating: 9.2,
    readableRating: "Wonderful"
  },
  {
    id: "b2fg3",
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/210943150.webp?k=1d3cb2f9c178756981110c1d6f895a65793f0ab4e62a613ee9f7d4ae140a3bad&o=",
    heading: "Villa Taina",
    subheading: "Dominican Republic, Cabarete",
    price: 980000,
    numOfReviews: 15,
    rating: 8.3,
    readableRating: "Excellent"
  },
  {
    id: "4aqq1",
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/237686104.webp?k=3813d2af0058b6676f19e8d707977dd086b6fd873d46dd9c19a8aaba24f813ff&o=",
    heading: "Waldschenke Stendenitz Übernachten im Wald am See",
    subheading: "Germany, Neuruppin",
    price: 1025000,
    numOfReviews: 19,
    rating: 9.1,
    readableRating: "Wonderful"
  },
  {
    id: "5aqq1",
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/255854447.webp?k=f9c9d47f18b3156fdcc5596749d137f35e3cf4962a8d3d37d69be0066ec9bfc3&o=",
    heading: "Gyttja Västergårds",
    subheading: "Sweden, Västergårds",
    price: 900000,
    numOfReviews: 10,
    rating: 8.5,
    readableRating: "Excellent"
  }
]

export default topUniqueProperties
