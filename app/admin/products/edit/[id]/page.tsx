import { EditProductForm } from "@/components/admin/EditProductForm"

interface EditProductPageProps {
  params: {
    id: string
  }
}

export default function EditProductPage({ params }: EditProductPageProps) {
  // In a real app, you would fetch the product data from your API
  // For this example, we'll use mock data
  const product = {
    id: params.id,
    name: "Premium Cotton Hoodie",
    description:
      "Our signature hoodie made from 100% organic cotton. Features a relaxed fit with a modern cut and premium details.",
    price: 89.99,
    images: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
    category: "Apparel",
    colors: ["Black", "Gray", "Navy"],
    sizes: ["S", "M", "L", "XL"],
    isMainCard: true,
    reviews: [],
    rating: 4.8,
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Edit Product: {product.name}</h1>
      <EditProductForm product={product} />
    </div>
  )
