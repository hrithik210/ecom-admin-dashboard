"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Heart, Share2, Star, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useSwipeable } from "react-swipeable"
import type { Product } from "@/lib/types"

interface ProductDetailProps {
  product: Product
  relatedProducts: Product[]
}

export function ProductDetail({ product, relatedProducts }: ProductDetailProps) {
  // State for product options
  const [selectedColor, setSelectedColor] = useState(product.colors[0] || "")
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || "")
  const [quantity, setQuantity] = useState("1")

  // State for image slider
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Image slider navigation functions
  const goToNext = useCallback(() => {
    if (!isAnimating && product.images.length > 1) {
      setIsAnimating(true)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % product.images.length)
      setTimeout(() => setIsAnimating(false), 300)
    }
  }, [product.images.length, isAnimating])

  const goToPrevious = useCallback(() => {
    if (!isAnimating && product.images.length > 1) {
      setIsAnimating(true)
      setCurrentIndex((prevIndex) => (prevIndex - 1 + product.images.length) % product.images.length)
      setTimeout(() => setIsAnimating(false), 300)
    }
  }, [product.images.length, isAnimating])

  const goToSlide = (index: number) => {
    if (!isAnimating && index !== currentIndex) {
      setIsAnimating(true)
      setCurrentIndex(index)
      setTimeout(() => setIsAnimating(false), 300)
    }
  }

  // Keyboard navigation for image slider
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevious()
      } else if (e.key === "ArrowRight") {
        goToNext()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [goToNext, goToPrevious])

  // Swipe handlers for touch devices
  const swipeHandlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrevious,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  })

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(goToNext, 5000)
    return () => clearInterval(interval)
  }, [goToNext])

  // Add to cart handler
  const handleAddToCart = () => {
    alert(`Added to cart: ${product.name} (${selectedColor}, ${selectedSize}) x${quantity}`)
    // In a real app, this would dispatch to a cart state manager or API
  }

  // Add to wishlist handler
  const handleAddToWishlist = () => {
    alert(`Added to wishlist: ${product.name}`)
    // In a real app, this would dispatch to a wishlist state manager or API
  }

  return (
    <>
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        {/* Product Image Slider */}
        <div className="relative">
          <div
            className="relative aspect-square overflow-hidden rounded-lg border"
            {...swipeHandlers}
            aria-live="polite"
          >
            {product.images.map((image, index) => (
              <div
                key={index}
                className={cn(
                  "absolute inset-0 transition-opacity duration-300",
                  index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none",
                )}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}

            {/* Navigation buttons */}
            {product.images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 top-1/2 z-10 h-9 w-9 -translate-y-1/2 rounded-full bg-background/80 opacity-80 shadow-sm backdrop-blur-sm hover:opacity-100"
                  onClick={goToPrevious}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 z-10 h-9 w-9 -translate-y-1/2 rounded-full bg-background/80 opacity-80 shadow-sm backdrop-blur-sm hover:opacity-100"
                  onClick={goToNext}
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </>
            )}
          </div>

          {/* Dots indicator */}
          {product.images.length > 1 && (
            <div className="mt-4 flex justify-center space-x-2">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "h-2 w-2 rounded-full transition-all",
                    index === currentIndex ? "bg-primary w-4" : "bg-muted hover:bg-primary/50",
                  )}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to image ${index + 1}`}
                  aria-current={index === currentIndex ? "true" : "false"}
                />
              ))}
            </div>
          )}

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="mt-4 flex space-x-2 overflow-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={cn(
                    "relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border",
                    index === currentIndex ? "ring-2 ring-primary" : "",
                  )}
                  onClick={() => goToSlide(index)}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="mt-2 flex items-center gap-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating) ? "fill-primary" : "fill-muted stroke-muted-foreground"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">{product.rating} out of 5</span>
              </div>
              <Separator orientation="vertical" className="h-5" />
              <span className="text-sm text-muted-foreground">{product.reviews?.length} reviews</span>
            </div>
          </div>

          <div className="text-3xl font-bold">${product.price.toFixed(2)}</div>

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
                {product.colors.map((color) => (
                  <div key={color}>
                    <RadioGroupItem value={color} id={`color-${color}`} className="peer sr-only" />
                    <Label
                      htmlFor={`color-${color}`}
                      className="flex cursor-pointer items-center justify-center rounded-md border border-muted bg-background px-3 py-2 text-sm font-medium ring-offset-background peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10"
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
                {product.sizes.map((size) => (
                  <div key={size}>
                    <RadioGroupItem value={size} id={`size-${size}`} className="peer sr-only" />
                    <Label
                      htmlFor={`size-${size}`}
                      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-muted bg-background text-sm font-medium ring-offset-background peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10"
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
              <Button size="lg" className="flex-1" onClick={handleAddToCart}>
                Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="flex-1" onClick={handleAddToWishlist}>
                <Heart className="mr-2 h-4 w-4" />
                Add to Wishlist
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Truck className="h-4 w-4" />
            <span>Free shipping on orders over $50</span>
          </div>

          <Separator />

          <Tabs defaultValue="description">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="pt-4">
              <div className="space-y-4">
                <p>{product.description}</p>
                <p>
                  Our products are crafted with the highest quality materials to ensure durability and comfort. Each
                  item is carefully inspected before shipping to guarantee customer satisfaction.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="details" className="pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium">Materials</h4>
                  <p className="text-sm text-muted-foreground">Premium quality, ethically sourced</p>
                </div>
                <div>
                  <h4 className="font-medium">Category</h4>
                  <p className="text-sm text-muted-foreground">{product.category}</p>
                </div>
                <div>
                  <h4 className="font-medium">Care Instructions</h4>
                  <p className="text-sm text-muted-foreground">Machine wash cold, tumble dry low</p>
                </div>
                <div>
                  <h4 className="font-medium">Shipping</h4>
                  <p className="text-sm text-muted-foreground">2-3 business days</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="pt-4">
              {product.reviews.length > 0 ? (
                <div className="space-y-4">
                  {product.reviews.map((review) => (
                    <div key={review.id} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{review.userName}</div>
                        <div className="text-sm text-muted-foreground">{review.date}</div>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? "fill-primary" : "fill-muted stroke-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-sm">{review.comment}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No reviews yet. Be the first to review this product!</p>
              )}
            </TabsContent>
          </Tabs>

          <div className="flex items-center justify-between">
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

    </>
  )
}
