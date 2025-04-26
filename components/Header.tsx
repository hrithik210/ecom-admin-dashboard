"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { ShoppingCart, User } from "lucide-react";


export default function Header(){
    const pathname = usePathname();
    const isAdmin = pathname.startsWith("/admin")

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
  <div className="container flex h-16 items-center justify-between">
    
    
    <Link href='/' className="flex items-center space-x-2">
      <span className="text-xl font-bold p-4">NiggaByte</span>
    </Link>

    
    <nav className="hidden md:flex gap-6 justify-center flex-1">
      <Link href='/' className="text-sm font-medium transition-colors hover:text-primary">
        Home
      </Link>
      <Link href='/' className="text-sm font-medium transition-colors hover:text-primary">
        Products 
      </Link>
      <Link href='/' className="text-sm font-medium transition-colors hover:text-primary">
        Categories
      </Link>
      <Link href='/' className="text-sm font-medium transition-colors hover:text-primary">
        About
      </Link>
    </nav>

    
    {!isAdmin && (
      <div className="flex items-center gap-6">
        <Button variant='ghost'>
          <ShoppingCart className="h-5 w-6" size='icon' />
          <span className="sr-only">Cart</span>
        </Button>
        <Button variant='ghost'>
          <User className="h-6 w-6" size='icon' />
          <span className="sr-only">User Account</span>
        </Button>
      </div>
    )}

    {isAdmin && (
      <div className="flex items-center gap-6">
        <Link href='/admin'>
          <Button variant='outline' size='sm'>
            Admin Dashboard
          </Button>
        </Link>
      </div>
    )}

  </div>
</header>

    )
}