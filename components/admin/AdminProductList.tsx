"use client"

import { Product } from '@/lib/types'
import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Edit, Trash } from 'lucide-react'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../ui/alert-dialog'
import { AlertDialogContent } from '@radix-ui/react-alert-dialog'

interface AdminProductListProps {
  products : Product[]
}

const AdminProductList = ({products} : AdminProductListProps) => {
  const [productList , setProductList] = useState<Product[]>(products)

  const handleDelete = (id : string) => {
    alert(`Deleting product with id: ${id}`)
  }

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
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="font-semibold">${product.price.toFixed(2)}</p>
          </CardContent>

          <CardFooter className='p-4 flex justify-between'>
            <Button asChild variant="outline" size="sm">
              <Link href={`/admin/products/edit/${product.id}`}>
                <Edit className="mr-2 h-4 w-4" /> Customize
              </Link>
            </Button>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant='destructive' size='sm'>
                  <Trash className='mr-2 sh-4 w-4' /> Delete
                </Button>
              </AlertDialogTrigger>

              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>U sure?</AlertDialogTitle> 
                  
                  <AlertDialogDescription>
                      This will permanently delete the product "{product.name}". This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={() => handleDelete(product.id)}>Delete</AlertDialogAction>
                </AlertDialogFooter>
                
              </AlertDialogContent>

            </AlertDialog>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default AdminProductList