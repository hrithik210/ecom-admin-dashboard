import Hero from "@/components/Hero";
import MainCard from "@/components/mainCard";

export default function Home() {
  return (
    <div>
      <Hero 
        title="Dress Like Your Favorite Anime Characters" 
        description="Transform your wardrobe with DressMate's exclusive anime-inspired fashion collection." 
      />

      <div className="container mc-auto px-4 py-12">
        <MainCard 
         product={{
          id: "1",
          name: "Premium Cotton Hoodie",
          description:
            "Our signature hoodie made from 100% organic cotton. Features a relaxed fit with a modern cut and premium details.",
          price: 89.99,
          images: ["/placeholder.svg?height=600&width=800"],
          category: "Apparel",
          colors: ["Black", "Gray", "Navy"],
          sizes: ["S", "M", "L", "XL"],
          isMainCard: true,
          reviews: [],
          rating: 4.8,
        }}
        />
      </div>
    </div>
  );
}
