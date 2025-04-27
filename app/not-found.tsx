import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex h-[50vh] flex-col items-center justify-center">
      <h2 className="mb-2 text-2xl font-bold">Product Not Found</h2>
      <p className="mb-8 text-muted-foreground">Sorry, we couldn't find the product you're looking for.</p>
      <Button asChild>
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  )
}