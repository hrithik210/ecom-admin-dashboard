"use client"
import { Product } from "@/lib/types"
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react"
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";


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
            {product.images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 opacity-80 shadow-sm backdrop-blur-sm hover:opacity-100"
            
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 z-10 h-9 w-9 -translate-y-1/2 rounded-full bg-background/80 opacity-80 shadow-sm backdrop-blur-sm hover:opacity-100"
            
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </>
            )}
        </div>
        {/* dot indicator will come here */}

        {product.images.length >1 && (
          <div className="mt-4 flex space-x-2 overflow-auto pb-2">
            {product.images.map((image,index) => (
              <button 
                key={index}
                className={cn()}
              >
                
              </button>
            ))}
          </div>  
        )}
      </div>

      {/* right side */}

      <div className="space y-4">
        <div className="">
          <h1>{product.name}</h1>
          <div>Product Ratings and reviews</div>
        </div>

        <div>{product.price}</div>
        <p>{product.description}</p>

      </div>

    </div>
  )
}