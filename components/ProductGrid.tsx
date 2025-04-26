import { Product } from "@/lib/types";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "./ui/card";
import Image from "next/image";


interface ProductGridProps{
  products : Product[]
}

export default function ProductGrid({products} : ProductGridProps){
  return(
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <Link href={`/products/${product.id}`} className="group" key={product.id}>
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <div className="relative aspect-square overflow-hidden">
              <Image 
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
                priority
              />
            </div>
            <CardContent className="p-2 items-center text-center">
              <h3 className="font-medium">{product.name}</h3>
            </CardContent>

            <CardFooter className="items-center text-center mx-auto mt">
              <p className="font-semibold">₹ {product.price}</p>
            </CardFooter>
          </Card>
        </Link>
      ))}

    </div>
  )
}