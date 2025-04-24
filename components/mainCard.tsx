import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Product } from "@/lib/types";
import { Badge } from "./ui/badge";
import { Star } from "lucide-react";

interface MainCardProps {
    product : Product
}

export default function MainCard({product}: MainCardProps) {
    return (
    <Card className="overflow-hidden border-0 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative aspect-square overflow-hidden">
            <Image 
                src={product.images[0] || '/placeholder.png'}
                alt={product.name}
                fill 
                className="object-cover transition-transform-transform hover:scale-105"
                priority
            />
          </div>
          <CardContent className="flex flex-col justify-center-6" />          
          
          <div className="mb-2 flex items-center">
            <Badge variant="outline" className="mr-2">
              {product.category}
            </Badge>

            <div className="flex items-center text-amber-500">
              <Star className="h-4 w-4 fill-current" />
              <span>{product.rating}</span>
            </div>
          </div>

          <h3 className="mb-2 text-3xl font-bold">{product.name}</h3>
        
        </div>
    </Card>
    )
}