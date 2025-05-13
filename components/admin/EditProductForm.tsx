"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import type { Product } from "@/lib/types"
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"
import { GripVertical } from "lucide-react"

interface EditProductFormProps {
  product: Product
}

export function EditProductForm({ product }: EditProductFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<Product>(product)

  // Available options
  const categories = ["Apparel", "Accessories", "Footwear", "Electronics", "Home", "Beauty"]
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
  const availableSizes = ["XS", "S", "M", "L", "XL", "XXL", "One Size", "5", "6", "7", "8", "9", "10", "11", "12"]

  const handleColorToggle = (color: string) => {
    setFormData((prev) => {
      const currentColors = prev.colors
      return {
        ...prev,
        colors: currentColors.includes(color) ? currentColors.filter((c) => c !== color) : [...currentColors, color],
      }
    })
  }

  const handleSizeToggle = (size: string) => {
    setFormData((prev) => {
      const currentSizes = prev.sizes
      return {
        ...prev,
        sizes: currentSizes.includes(size) ? currentSizes.filter((s) => s !== size) : [...currentSizes, size],
      }
    })
  }

  const handleDragEnd = (result: any) => {
    if (!result.destination) return

    const items = Array.from(formData.images)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    setFormData((prev) => ({ ...prev, images: items }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
            <CardDescription>Edit the basic details of your product.</CardDescription>
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
                value={formData.price}
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
                value={formData.rating}
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
            <CardTitle>Product Images</CardTitle>
            <CardDescription>
              Drag and drop to reorder images. The first image will be used as the main image.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <DragDropContext onDragEnd={handleDragEnd}>
              <Droppable droppableId="images">
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-2">
                    {formData.images.map((image, index) => (
                      <Draggable key={index} draggableId={`image-${index}`} index={index}>
                        {(provided) => (
                          <div ref={provided.innerRef} {...provided.draggableProps} className="flex items-center gap-2">
                            <div {...provided.dragHandleProps} className="cursor-move">
                              <GripVertical className="h-5 w-5 text-muted-foreground" />
                            </div>
                            <Input
                              placeholder={`Image URL ${index + 1}`}
                              value={image}
                              onChange={(e) => handleImageChange(index, e.target.value)}
                              required={index === 0}
                            />
                            {index > 0 && (
                              <Button
                                type="button"
                                variant="destructive"
                                size="icon"
                                onClick={() => removeImageField(index)}
                              >
                                &times;
                              </Button>
                            )}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
            <Button type="button" variant="outline" onClick={addImageField}>
              Add Another Image
            </Button>
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
                        checked={formData.colors.includes(color)}
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
                        checked={formData.sizes.includes(size)}
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
          {isSubmitting ? "Saving..." : "Save Changes"}
        </Button>
      </div>
    </form>
  )
}
