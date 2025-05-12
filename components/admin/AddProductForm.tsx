"use client"
import { Product } from '@/lib/types'
import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Switch } from '../ui/switch'

const AddProductForm = () => {
  const categories = ["Apparel", "Accessories", "Footwear", "Electronics", "Home", "Beauty"]
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

  const handleChange = () => {
    console.log("Form data changed", formData)
  }
  const handleNumberChange = () =>{
    console.log("Number input changed", formData)
  }

  const 
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
      </div>
    </form>
  )
}

export default AddProductForm