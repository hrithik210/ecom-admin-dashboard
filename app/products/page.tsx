import ProductGrid from '@/components/ProductGrid';
import { getProductById } from '@/lib/Products';
import React from 'react'

const AllProductsRender = () => {

const product =  getProductById("1")
  
if(!product){
    return <div>Product not found</div>
}

  return (
    <div>
        <ProductGrid products={[product]} />
    </div>
  )
}

export default AllProductsRender;