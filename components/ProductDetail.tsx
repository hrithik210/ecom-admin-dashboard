"use client";
import { Product } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useCallback, useState } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, Heart, Share2, Star, Truck } from "lucide-react";
import { Separator } from "./ui/separator";
import { Label } from "./ui/label";
import { RadioGroup } from "./ui/radio-group";
import { RadioGroupItem } from "@radix-ui/react-radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || "");
  const [selectedSize , setSelectedSize] = useState(product.sizes?.[0] || "");
  const [quantity , setQuantity] = useState("1");


  const goToNext = useCallback(() => {
    if (! isAnimating && product.images.length >1){
      setIsAnimating(true);
      setCurrentIndex((previousIndex) => (previousIndex + 1) % product.images.length); 
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }
  }, [isAnimating , product.images.length]);

  const handleAddToCart = () => {
    alert(`Added ${quantity} of ${product.name} to cart`);
  }
  
  const handleAddToWishlist = () => {
    alert(`Added ${product.name} to wishlist`);
  }

  return (
    <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
      {/* left side */}
      <div className="relative">
        <div
          className="relative aspect-square overflow-hidden rounded-lg border"
          // {...swipeHandlers}
          aria-live="polite"
        >
          {product.images.map((image, index) => (
            <div
              key={index}
              className={cn(
                "absolute inset-0 transition-opacity duration-300",
                index === currentIndex
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              )}
            >
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
                onClick={goToNext}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}
        </div>
        {/* dot indicator will come here */}

        {product.images.length > 1 && (
          <div className="mt-4 flex space-x-2 overflow-auto pb-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={cn(
                  "relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border"
                )}
              >
                <Image
                  src={image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* right side */}

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="mt-2 flex items-center gap-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating ?? 0)
                      ? "fill-primary"
                      : "fill-muted stroke-muted-foreground"
                  }`}
                />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">
                {product.rating}/5
              </span>
            </div>
            <Separator orientation="vertical" className="h-5" />
            <span className="text-sm text-muted-foreground">
              {product.reviews?.length} reviews
            </span>
          </div>
        </div>

        <div className="text-3xl font-bold">₹ {product.price}</div>
        <p className="text-muted-foreground">{product.description}</p>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="color">Color</Label>
            <RadioGroup
              id="color"
              value={selectedColor}
              onValueChange={setSelectedColor}
              className="flex flex-wrap gap-2"
            >
              {product.colors?.map((color) => (
                <div key={color}>
                  <RadioGroupItem
                    value={color}
                    id={`color-${color}`}
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor={`color-${color}`}
                    className="flex cursor-pointer items-center justify-center rounded-md border border-muted bg-background px-3 py-2 text-sm font-medium ring-offset-background 
                      peer-data-[state=checked]:border-primary peer-data-[state=checked]:background-primary/10"
                  >
                    {color}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          

          <div className="space-y-2">
            <Label htmlFor="size">Size</Label>
            <RadioGroup
              id="size"
              value={selectedSize}
              onValueChange={setSelectedSize}
              className="flex flex-wrap gap-2"
            >
              {product.sizes?.map((size) => (
                <div key={size}>
                  <RadioGroupItem 
                    id={`size-${size}`} 
                    value={size} 
                    className="peer sr-only" />
                  <Label
                    htmlFor={`size-${size}`}
                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-muted
                    bg-background text-sm font-medium ring-offset-background peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10"
                  >
                    {size}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="space-y-2">
              <Label htmlFor="quantity">Quantity</Label>
              <Select value={quantity} onValueChange={setQuantity}>
                <SelectTrigger className="w-24">
                  <SelectValue placeholder="Quantity" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Button className="flex-1" size="lg" onClick={handleAddToCart}>
              Add to cart
            </Button>
            <Button className="flex-1" size="lg" variant="outline" onClick={handleAddToWishlist}>
              <Heart className="mr-2 h-4 w-4" />
              Add to Wishlist
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Truck />
          <span>Free shipping on orders above 399</span>
        </div>

        <Separator />
        
        <Tabs defaultValue="description" >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="pt-4">  
            <div className="space-y-4">
              <p>{product.description}</p>
            </div>
          </TabsContent>

          <TabsContent value="details" className="pt-4">  
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium">Materials</h4>
                <p className="text-sm text-muted-foreground">Premium quality, ethically sourced</p>
              </div>

              <div>
                <h4  className="font-medium">Category</h4>
                <h4 className="text-sm text-muted-foreground">{product.category}</h4>
              </div>
              <div>
                  <h4 className="font-medium">Care Instructions</h4>
                  <p className="text-sm text-muted-foreground">Machine wash cold, tumble dry low</p>
              </div>
              <div>
                <h4 className="font-medium">Shipping</h4>
                <p className="text-sm text-muted-foreground">5-7 business days</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="pt-4">
            { (product.reviews && product.reviews.length > 0) ? (
              <div className="space-y-4">
                {product.reviews.map((review) => (
                  <div key={review.id}>
                      <p>{review}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <p>no reviews yet</p>
              </div>
            )}
          </TabsContent>
        </Tabs>

        <div className="flex items-center justify-around">
          <div className="flex items-center gap-4">
            <Badge variant="outline">New Arrival</Badge>
            <Badge variant="outline">{product.category}</Badge>
          </div>

          <Button variant="ghost" size="icon">
            <Share2 className="h-4 w-4" />
            <span className="sr-only">Share</span>
          </Button>
        </div>

      </div>
    </div>
  );
}
