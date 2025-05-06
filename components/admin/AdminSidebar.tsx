"use client"

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
    </div>
  )
}

export default AdminSidebar