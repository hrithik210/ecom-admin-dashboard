import Hero from "@/components/Hero";
import MainCard from "@/components/MainCard";
import ProductGrid from "@/components/ProductGrid";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Hero 
        title="Dress Like Your Favorite Anime Characters" 
        description="Transform your wardrobe with DressMate's exclusive anime-inspired fashion collection." 
      />

      <div className="container mx-auto px-4 py-12">
        <MainCard
         product={{
          id: "1",
          name: "Gojo's Fit",
          description:
            "Shining like a star in this stylish outfit inspired by Gojo Satoru from Jujutsu Kaisen. Perfect for casual outings or anime conventions.",
          price: 89.99,
          images: ["/gojo.jpeg"],
          category: "Apparel",
          colors: ["Black", "Gray", "Navy"],
          sizes: ["S", "M", "L", "XL"],
          isMainCard: true,
          reviews: [],
          rating: 4.8,
        }}
        />

        <div className="flex items-center justify-between mt-16 mb-8">
          <h2 className="text-3xl font-bold">
            Our Collection
          </h2>

          <Button>
            <Link href="/products">
              View All Products
            </Link>
          </Button>
        </div>
        <ProductGrid 
          products={[
            {
              id: "1",
              name: "Gojo's Fit",
              description:
                "Shining like a star in this stylish outfit inspired by Gojo Satoru from Jujutsu Kaisen. Perfect for casual outings or anime conventions.",
              price: 89.99,
              images: ["/gojo.jpeg"],
              category: "Apparel",
              colors: ["Black", "Gray", "Navy"],
              sizes: ["S", "M", "L", "XL"],
              reviews: [],
              rating: 4.8,
            },
            {
              id: "2",
              name: "Classic Denim Jacket",
              description: "Timeless denim jacket with a modern fit.",
              price: 129.99,
              images: ["/1360490.jpeg"],
              category: "Apparel",
              colors: ["Blue", "Black"],
              sizes: ["S", "M", "L", "XL"],
              isMainCard: false,
              reviews: [],
              rating: 4.5,
            },
            {
              id: "3",
              name: "Minimalist Watch",
              description: "Elegant timepiece with a clean design.",
              price: 199.99,
              images: ["/1383331.jpg"],
              category: "Accessories",
              colors: ["Silver", "Gold", "Rose Gold"],
              sizes: ["One Size"],
              isMainCard: false,
              reviews: [],
              rating: 4.9,
            },
            {
              id: "4",
              name: "Leather Wallet",
              description: "Handcrafted leather wallet with multiple card slots.",
              price: 59.99,
              images: ["/gojo_vs_mahoraga_and_sukuna_coloring_by_itzzazure_dgo46yy.png"],
              category: "Accessories",
              colors: ["Brown", "Black"],
              sizes: ["One Size"],
              isMainCard: false,
              reviews: [],
              rating: 4.7,
            },
            {
              id: "5",
              name: "Canvas Backpack",
              description: "Durable canvas backpack for everyday use.",
              price: 79.99,
              images: ["/maki.jpg"],
              category: "Bags",
              colors: ["Olive", "Black", "Navy"],
              sizes: ["One Size"],
              isMainCard: false,
              reviews: [],
              rating: 4.6,
            },
            {
              id: "6",
              name: "Wireless Earbuds",
              description: "Premium sound quality with noise cancellation.",
              price: 149.99,
              images: ["/makima.jpeg"],
              category: "Electronics",
              colors: ["White", "Black"],
              sizes: ["One Size"],
              isMainCard: false,
              reviews: [],
              rating: 4.8,
            },
            {
              id: "7",
              name: "Graphic T-Shirt",
              description: "Soft cotton t-shirt with unique graphic print.",
              price: 34.99,
              images: ["/Satoru Gojo.jpeg"],
              category: "Apparel",
              colors: ["White", "Black", "Gray"],
              sizes: ["S", "M", "L", "XL"],
              isMainCard: false,
              reviews: [],
              rating: 4.4,
            },
            {
              id: "8",
              name: "Polarized Sunglasses",
              description: "UV protection with stylish frames.",
              price: 89.99,
              images: ["/wallpaperflare.com_wallpaper.jpg"],
              category: "Accessories",
              colors: ["Black", "Tortoise"],
              sizes: ["One Size"],
              isMainCard: false,
              reviews: [],
              rating: 4.7,
            },
        
          ]}
        />
      </div>

      <div>

      </div>
    </div>
  );
}
