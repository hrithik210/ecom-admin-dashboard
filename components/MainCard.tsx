import { Product } from "@/lib/types";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Star } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

interface MainCardProps{
    product : Product
}

export default function MainCard({product} : MainCardProps){

    return(
     <Card className="overflow-hidden border-0 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative aspect-square overflow-hidden">
            <Image 
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover transition-transform hover:scale-105"
                priority
            />
        </div>
        
        <CardContent className="flex flex-col justify-center p-6">
            <div className="mb-2 flex items-center ">
                <Badge variant="outline" className="mr-2">
                    {product.category}
                </Badge>

                <div className="flex items-center text-amber-500">
                    <Star className="h-4 w-4 fill-current"/>
                    <span className="ml-1 text-sm font-medium">{product.rating}</span>
                </div>
            </div>

            <h3 className="mb-2 text-3xl font-bold">{product.name}</h3>
            <p className="mb-4 text-2xl font-semibold">${product.price.toFixed(2)}</p>
            <p className="mb-6 text-muted-foreground">{product.description}</p>

            <div className="mb-6">
                <h4>Available colors</h4>
                <div>
                    {product.colors?.map( (color) => (
                        <Badge key={color} variant="outline">
                            {color}
                        </Badge>
                    ))}
                </div>
            </div>

            <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                <Button className="flex-1"> Add to Cart </Button>
                <Button className="flex-1" variant="outline">
                    <Link href={`/products/${product.id}`} className="w-full">
                        View Details
                    </Link>
                </Button>
            </div>

        </CardContent>



      </div>

     </Card>
    )
}