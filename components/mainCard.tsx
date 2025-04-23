import Image from "next/image";
import { Card } from "./ui/card";
import { Product } from "@/lib/types";

interface MainCardProps {
    product : Product
}

export default function MainCard({product}: MainCardProps) {
    return (
        <Card className="overflow-hidden border-0 shadow-lg">
            <div className="grid grid-cols-1 gap-6">
                <div>
                    <Image
                        src={product.images[0] || '/placeholder.svg'}
                        alt={product.name}
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>
            </div>
        </Card>
    )
}