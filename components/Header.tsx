"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button"
import { ShoppingCart, User } from "lucide-react"

export default function Header() {
  const pathname = usePathname()
  const isAdmin = pathname.startsWith("/admin")

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-col sm:flex-row sm:h-16 items-center justify-between py-2 sm:py-0">
        <div className="flex w-full sm:w-auto justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold py-2 sm:p-4">NiggaByte</span>
          </Link>

    
          {!isAdmin && (
            <div className="flex items-center gap-2 sm:hidden">
              <Button variant="ghost" size="sm">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Cart</span>
              </Button>
              <Button variant="ghost" size="sm">
                <User className="h-5 w-5" />
                <span className="sr-only">User Account</span>
              </Button>
            </div>
          )}

          {isAdmin && (
            <div className="sm:hidden">
              <Link href="/admin">
                <Button variant="outline" size="sm">
                  Admin
                </Button>
              </Link>
            </div>
          )}
        </div>
        <nav className="flex w-full sm:w-auto sm:flex-1 justify-center gap-4 sm:gap-6 py-2 sm:py-0 overflow-x-auto scrollbar-hide">
          <Link href="/" className="text-sm font-medium whitespace-nowrap transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/" className="text-sm font-medium whitespace-nowrap transition-colors hover:text-primary">
            Products
          </Link>
          <Link href="/" className="text-sm font-medium whitespace-nowrap transition-colors hover:text-primary">
            Categories
          </Link>
          <Link href="/" className="text-sm font-medium whitespace-nowrap transition-colors hover:text-primary">
            About
          </Link>
        </nav>

        {!isAdmin && (
          <div className="hidden sm:flex items-center gap-6">
            <Button variant="ghost">
              <ShoppingCart className="h-5 w-6" />
              <span className="sr-only">Cart</span>
            </Button>
            <Button variant="ghost">
              <User className="h-6 w-6" />
              <span className="sr-only">User Account</span>
            </Button>
          </div>
        )}

        {isAdmin && (
          <div className="hidden sm:flex items-center gap-6">
            <Link href="/admin">
              <Button variant="outline" size="sm">
                Admin Dashboard
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
