import ProductGrid from '@/components/ProductGrid';
import { getAllProducts, getProductById } from '@/lib/Products';
import React from 'react'

const AllProductsRender = () => {

const products =  getAllProducts()
  
if(!products){
    return <div>no products to show at the moment</div>
}

  return (
    <div>
        <ProductGrid products={products} />
    </div>
  )
}

export default AllProductsRender;