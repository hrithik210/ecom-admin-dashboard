import AdminProductList from "@/components/admin/AdminProductList";
import { Button } from "@/components/ui/button";
import { getAllProducts } from "@/lib/Products";
import { Plus } from "lucide-react";
import Link from "next/link";


export default function AdminDashboard(){
  const products = getAllProducts();

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Product Management</h1>
        <Button asChild>
          <Link href="/admin/products/add">
            <Plus className="mr-2 h-4 w-4"/>
            Add Product
          </Link>
        </Button>
      </div>

      <AdminProductList products={products} />
    </div>
  )
}