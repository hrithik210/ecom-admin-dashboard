import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero 
        title="Dress Like Your Favorite Anime Characters" 
        description="Transform your wardrobe with DressMate's exclusive anime-inspired fashion collection." 
      />
    </div>
  );
}
