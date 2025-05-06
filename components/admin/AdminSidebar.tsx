import { BarChart3, Package, Settings, ShoppingBag, Users } from "lucide-react"
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
    <div>AdminSidebar</div>
  )
}

export default AdminSidebar