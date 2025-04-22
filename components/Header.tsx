"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Header(){
    const pathname = usePathname();
    const isAdmin = pathname.startsWith("/admin")

    return (
        <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur
        supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap0-6 md:gap-6">
                    <Link href='/' className="flex items-center space-x-2 ">
                        <span className="text-xl font-bold p-4">NiggaByte</span>
                    </Link>
                </div>

            </div>
        </div>
    )
}