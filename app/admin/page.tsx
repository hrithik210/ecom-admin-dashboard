import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";


export default function AdminDashboard(){
  return (
    <div>
      <div>
        <h1>Product Management</h1>
        <Button>
          <Link href="/admin/products/add">
            <Plus className="mr-2 h-4 w-4"/>
            Add Product
          </Link>
        </Button>
      </div>
    </div>
  )
}