import type { Product } from "./types"

// Mock product data
const products: Product[] = [
  {
    id: "1",
    name: "Premium Cotton Hoodie",
    description:
      "Our signature hoodie made from 100% organic cotton. Features a relaxed fit with a modern cut and premium details.",
    price: 89.99,
    images: [
      "/api/placeholder?width=800&height=800",
      "/api/placeholder?width=800&height=800&text=Front",
      "/api/placeholder?width=800&height=800&text=Back",
      "/api/placeholder?width=800&height=800&text=Detail",
    ],
    category: "Apparel",
    colors: ["Black", "Gray", "Navy"],
    sizes: ["S", "M", "L", "XL"],
    isMainCard: true,
    reviews: [
      {
        id: "1",
        userId: "u1",
        userName: "John Doe",
        rating: 5,
        comment: "Great quality and fits perfectly. Highly recommend!",
        date: "2023-04-15",
      },
      {
        id: "r2",
        userId: "u2",
        userName: "Jane Smith",
        rating: 4,
        comment: "Very comfortable and stylish. The material is soft and durable.",
        date: "2023-03-22",
      },
    ],
    rating: 4.8,
  },
  {
    id: "2",
    name: "Classic Denim Jacket",
    description: "Timeless denim jacket with a modern fit.",
    price: 129.99,
    images: [
      "/api/placeholder?width=800&height=800&text=Denim",
      "/api/placeholder?width=800&height=800&text=Front",
      "/api/placeholder?width=800&height=800&text=Back",
    ],
    category: "Apparel",
    colors: ["Blue", "Black"],
    sizes: ["S", "M", "L", "XL"],
    isMainCard: false,
    reviews: [],
    rating: 4.5,
  },
  {
    id: "3",
    name: "Minimalist Watch",
    description: "Elegant timepiece with a clean design.",
    price: 199.99,
    images: ["/api/placeholder?width=800&height=800&text=Watch"],
    category: "Accessories",
    colors: ["Silver", "Gold", "Rose Gold"],
    sizes: ["One Size"],
    isMainCard: false,
    reviews: [],
    rating: 4.9,
  },
  {
    id: "4",
    name: "Leather Wallet",
    description: "Handcrafted leather wallet with multiple card slots.",
    price: 59.99,
    images: ["/api/placeholder?width=800&height=800&text=Wallet"],
    category: "Accessories",
    colors: ["Brown", "Black"],
    sizes: ["One Size"],
    isMainCard: false,
    reviews: [],
    rating: 4.7,
  },
  {
    id: "5",
    name: "Canvas Backpack",
    description: "Durable canvas backpack for everyday use.",
    price: 79.99,
    images: ["/api/placeholder?width=800&height=800&text=Backpack"],
    category: "Bags",
    colors: ["Olive", "Black", "Navy"],
    sizes: ["One Size"],
    isMainCard: false,
    reviews: [],
    rating: 4.6,
  },
  {
    id: "6",
    name: "Wireless Earbuds",
    description: "Premium sound quality with noise cancellation.",
    price: 149.99,
    images: ["/api/placeholder?width=800&height=800&text=Earbuds"],
    category: "Electronics",
    colors: ["White", "Black"],
    sizes: ["One Size"],
    isMainCard: false,
    reviews: [],
    rating: 4.8,
  },
  {
    id: "7",
    name: "Graphic T-Shirt",
    description: "Soft cotton t-shirt with unique graphic print.",
    price: 34.99,
    images: ["/api/placeholder?width=800&height=800&text=T-Shirt"],
    category: "Apparel",
    colors: ["White", "Black", "Gray"],
    sizes: ["S", "M", "L", "XL"],
    isMainCard: false,
    reviews: [],
    rating: 4.4,
  },
  {
    id: "8",
    name: "Polarized Sunglasses",
    description: "UV protection with stylish frames.",
    price: 89.99,
    images: ["/api/placeholder?width=800&height=800&text=Sunglasses"],
    category: "Accessories",
    colors: ["Black", "Tortoise"],
    sizes: ["One Size"],
    isMainCard: false,
    reviews: [],
    rating: 4.7,
  },
]

// Get a product by ID
export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

// Get related products (same category, excluding the current product)
export function getRelatedProducts(currentId: string, category: string, limit = 4): Product[] {
  return products.filter((product) => product.id !== currentId && product.category === category).slice(0, limit)
}

// Get all products
export function getAllProducts(): Product[] {
  return products
}

// Get featured products
export function getFeaturedProducts(limit = 4): Product[] {
  return products.filter((product) => product.isMainCard).slice(0, limit)
}

// Get products by category
export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}
