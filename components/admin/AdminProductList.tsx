import { Product } from '@/lib/types'
import React from 'react'

interface AdminProductListProps {
  products : Product[]
}

const AdminProductList = ({products} : AdminProductListProps) => {
  return (
    <div>AdminProductList</div>
  )
}

export default AdminProductList