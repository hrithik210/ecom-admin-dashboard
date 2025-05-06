"use client"

import { cn } from "@/lib/utils";
import { BarChart3, Package, Settings, ShoppingBag, Users } from "lucide-react"
import Link from "next/link";
import { usePathname } from "next/navigation"


const items = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: BarChart3,
  },
  {
    name: "Products",
    href: "/admin/products",
    icon: Package,
  },
  {
    name: "Orders",
    href: "/admin/orders",
    icon: ShoppingBag,
  },
  {
    name: "Customers",
    href: "/admin/customers",
    icon: Users,
  },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
]

const AdminSidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full border-r bg-muted/40">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link href="/admin" className="flex items-center gap-2 font-semibold" >
          <Package />
          <span>Admin panel</span>
        </Link>
      </div>

      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start text-sm font-medium px-2">
          {items.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link 
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}>
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
              </Link>
            )
          })}
        </nav>

      </div>
    </div>
  )
}

export default AdminSidebar