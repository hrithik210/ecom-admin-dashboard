import { EditProductForm } from "@/components/admin/EditProductForm"
import { getProductById } from "@/lib/Products"
import { get } from "http"

interface EditProductPageProps {
  params: {
    id: string
  }
}

export default function EditProductPage({ params }: EditProductPageProps) {
  // In a real app, you would fetch the product data from your API
  // For this example, we'll use mock data
  const product = getProductById(params.id)

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Edit Product: {product.name}</h1>
      <EditProductForm product={product} />
    </div>
  )}
