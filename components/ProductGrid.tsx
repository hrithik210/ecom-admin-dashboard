import { Product } from "@/lib/types";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "./ui/card";
import Image from "next/image";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <Link href={`/products/${product.id}`} className="group" key={product.id}>
          <Card className="overflow-hidden border-0 rounded-lg transition-all duration-300 hover:shadow-lg">
            <div className="relative aspect-square overflow-hidden bg-gray-50">
              <Image 
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              {product.discount && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  Sale
                </span>
              )}
            </div>
            <CardContent className="pt-4 pb-2 px-4">
              <h3 className="font-medium text-gray-800 line-clamp-1">{product.name}</h3>
              <p className="text-sm text-gray-500 mt-1 line-clamp-1">{product.category}</p>
            </CardContent>
            <CardFooter className="pb-4 px-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <p className="font-semibold text-gray-900">₹{product.price}</p>
                {product.originalPrice && (
                  <p className="text-sm text-gray-500 line-through">₹{product.originalPrice}</p>
                )}
              </div>
              <div className="text-sm text-gray-500 flex items-center">
                {product.rating && (
                  <span className="flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    {product.rating}
                  </span>
                )}
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}