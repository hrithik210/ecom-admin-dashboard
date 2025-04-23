import Link from "next/link"
import { Button } from "./ui/button"


interface HeroProps{
    title : string
    description : string
}

export default function Hero({title , description}: HeroProps){
    return (
    <div className="relative w-full bg-black px-4 py-16 md:py-26">
        <div className="container mx-auto text-center">
            <h1 className="text-white text-4xl font-bold">
                {title}
            </h1>
            <p className="text-gray-300 mt-4 max-w-[700px] mx-auto">
                {description}
            </p>

            <div className="mt-6 space-x-4">
                <Link href='/products'>
                    <Button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200">
                        Shop now
                    </Button>
                </Link>

                <Link href='/products'>
                    <Button className="border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-black">
                        View Lookbook
                    </Button>
                </Link>
            </div>
        </div>
        
    </div>
    )
}