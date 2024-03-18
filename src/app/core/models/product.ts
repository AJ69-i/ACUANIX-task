export interface response
{
  limit: number,
  products: [{}],
  total: number,
  skip: number
}

export interface product
{
  id: number,
  amount: number,
  brand: string,
  title: string,
  price :number,
  stock: number,
  images: string[],
  rating: number,
  category: string,
  thumbnail: string,
  description: string,
  discountPercentage: number
}
