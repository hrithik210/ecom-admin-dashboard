import { Product } from '@/lib/types'
import React, { useState } from 'react'
import { Card } from '../ui/card'

const AddProductForm = () => {
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
  return (
    <form>
      <div className='grid gap-6 mb-6'>
        <Card>
          
        </Card>
      </div>
    </form>
  )
}

export default AddProductForm