
export interface Product{
  id: string
  name: string
  description?: string
  price: number
  images: string[]
  category?: string
  colors?: string[]
  sizes?: string[]
  isMainCard?: boolean
  reviews?: Review[]
  rating?: number
}