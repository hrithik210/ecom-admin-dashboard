import AddProductForm from "@/components/admin/AddProductForm";


export default function AddProductPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Add New Product</h1>
      <AddProductForm />
    </div>
  )
}