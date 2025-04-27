import ProductDetail from "@/components/ProductDetail"
import { getProductById } from "@/lib/Products"
import { notFound } from "next/navigation"


interface ProductPageProps{
  params:{
    id: string
  }
}

export default function ProductPage({params} : ProductPageProps){
  const product = getProductById(params.id)

  if(!product){
    notFound()
  }

  return(
    <div className="container mx-auto px-4 py-8">
      <ProductDetail product={product} />
    </div>
  )
}