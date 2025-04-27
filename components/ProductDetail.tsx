"use client"
import { Product } from "@/lib/types"
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
        </div>
      </div>

      {/* right side */}

      <div className="space y-4">
        <div className="">
          <h1>Product Name</h1>
          <div>Product Ratings and reviews</div>
        </div>
      </div>

    </div>
  )
}