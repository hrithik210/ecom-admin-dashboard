import { Product } from '@/lib/types'
import React, { useState } from 'react'
import { Card } from '../ui/card'

interface AdminProductListProps {
  products : Product[]
}

const AdminProductList = ({products} : AdminProductListProps) => {
  const [productList , setProductList] = useState<Product[]>(products)
  return (
    <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
      {productList.map((product) => (
        <Card>
          
        </Card>
      ))}
    </div>
  )
}

export default AdminProductList