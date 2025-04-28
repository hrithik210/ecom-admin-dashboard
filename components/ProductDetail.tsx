"use client"
import { Product } from "@/lib/types"
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react"


interface ProductDetailProps{
  product : Product
}

export default function ProductDetail({product} : ProductDetailProps){
  const [currentIndex , setCurrentIndex] = useState(0);
  return (
    <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
      
      {/* left side */}
      <div className="relative">
        <div className="relative aspect-square overflow-hidden rounded-lg border"
          // {...swipeHandlers}
          aria-live="polite">
            {product.images.map((image, index) => (
              <div 
              key={index}
              className={cn(
                "absolute inset-0 transition-opacity duration-300",
                index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
              )}>
                <Image 
                  src={image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />

              </div>
            ))}
        </div>
      </div>

      {/* right side */}

      <div className="space y-4">
        <div className="">
          <h1>Product Name</h1>
          <div>Product Ratings and reviews</div>
        </div>

        <div>{product.price}</div>
        <p>{product.description}</p>

      </div>

    </div>
  )
}