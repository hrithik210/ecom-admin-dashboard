"use client"

import { Product } from '@/lib/types'
import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
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
            <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-md">
                Featured
            </div>

          </div>

          <CardHeader className='p-4'>
            <CardTitle className='line-clamp-1'>{product.name}</CardTitle>
           \
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="font-semibold">${product.price.toFixed(2)}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default AdminProductList