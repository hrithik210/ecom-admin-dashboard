"use client"
import { Product } from '@/lib/types'
import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Switch } from '../ui/switch'
import { Separator } from '@radix-ui/react-select'
import { Checkbox } from '@radix-ui/react-checkbox'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

const AddProductForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const categories = ["Apparel", "Accessories", "Footwear", "Electronics", "Home", "Beauty"]
  const availableSizes = ["XS", "S", "M", "L", "XL", "XXL", "One Size", "5", "6", "7", "8", "9", "10", "11", "12"]
  const availableColors = [
    "Black",
    "White",
    "Gray",
    "Navy",
    "Blue",
    "Red",
    "Green",
    "Brown",
    "Beige",
    "Pink",
    "Purple",
    "Orange",
    "Yellow",
    "Gold",
    "Silver",
  ]
  const [formData, setFormData] = useState<Partial<Product>>({
    name: "",
    description: "",
    price: 0,
    images: [""],
    category: "",
    colors: [],
    sizes: [],
    isMainCard: false,
    reviews: [],
    rating: 0,
  })
  const handleColorToggle = (color: string) => {
    setFormData((prev) => {
      const currentColors = prev.colors || []
      return {
        ...prev,
        colors: currentColors.includes(color) ? currentColors.filter((c) => c !== color) : [...currentColors, color],
      }
    })
  }

  const handleSizeToggle = (size: string) => {
    setFormData((prev) => {
      const currentSizes = prev.sizes || []
      return {
        ...prev,
        sizes: currentSizes.includes(size) ? currentSizes.filter((s) => s !== size) : [...currentSizes, size],
      }
    })
  }

  const handleChange = () => {
    console.log("Form data changed", formData)
  }
  const handleNumberChange = () =>{
    console.log("Number input changed", formData)
  }

  return (
    <form>
      <div className='grid gap-6 mb-6'>
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
            <CardDescription>Enter the basic details of your product.</CardDescription>
          </CardHeader>
        
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Product Name</Label>
              <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="price">Price ($)</Label>
              <Input
                id="price"
                name="price"
                type="number"
                min="0"
                step="0.01"
                value={formData.price || ""}
                onChange={handleNumberChange}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="category">Category</Label>
              <Select
                value={formData.category}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, category: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="rating">Rating (0-5)</Label>
              <Input
                id="rating"
                name="rating"
                type="number"
                min="0"
                max="5"
                step="0.1"
                value={formData.rating || ""}
                onChange={handleNumberChange}
              />
            </div>

            <div className="flex items-center gap-2">
              <Switch
                id="isMainCard"
                checked={formData.isMainCard}
                onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, isMainCard: checked }))}
              />
              <Label htmlFor="isMainCard">Feature as Main Card</Label>
            </div>
          </CardContent>
         
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Variants</CardTitle>
            <CardDescription>Select available colors and sizes for this product.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-3">Colors</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {availableColors.map((color) => (
                    <div key={color} className="flex items-center space-x-2">
                      <Checkbox
                        id={`color-${color}`}
                        checked={formData.colors?.includes(color) || false}
                        onCheckedChange={() => handleColorToggle(color)}
                      />
                      <Label htmlFor={`color-${color}`}>{color}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-sm font-medium mb-3">Sizes</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {availableSizes.map((size) => (
                    <div key={size} className="flex items-center space-x-2">
                      <Checkbox
                        id={`size-${size}`}
                        checked={formData.sizes?.includes(size) || false}
                        onCheckedChange={() => handleSizeToggle(size)}
                      />
                      <Label htmlFor={`size-${size}`}>{size}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end gap-4">
        <Button type="button" variant="outline" onClick={() => router.push("/admin")}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save Product"}
        </Button>
      </div>
    </form>
  )
}

export default AddProductForm