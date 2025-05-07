"use client"

import { Product } from '@/lib/types'
import React, { useState } from 'react'
import { Card } from '../ui/card'
import Image from 'next/image'

interface AdminProductListProps {
  products : Product[]
}

const AdminProductList = ({products} : AdminProductListProps) => {
  const [productList , setProductList] = useState<Product[]>(products)
  return (
    <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
      {productList.map((product) => (
        <Card key={product.id} className='overflow-hidden'>
          <div className='relative aspect-video overflow-hidden'>
            <Image src={product.images[0]} alt={product.name} className='object-cover' fill/>

          </div>
        </Card>
      ))}
    </div>
  )
}

export default AdminProductList