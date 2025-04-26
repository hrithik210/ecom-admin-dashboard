import Hero from "@/components/Hero";
import MainCard from "@/components/MainCard";
import ProductGrid from "@/components/ProductGrid";

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

        <h2 className="text-3xl font-bold mt-16 mb-8">Our Collection</h2>
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
        
          ]}
        />
      </div>

      <div>

      </div>
    </div>
  );
}
