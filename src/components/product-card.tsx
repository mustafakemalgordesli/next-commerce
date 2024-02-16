import * as React from "react"
import { useState } from "react"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter
} from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function ProductCard({ product }: { product: any }) {

    const handleClick = (event: { stopPropagation: () => void }) => {
        // event.stopPropagation();
        console.log("tıklandı")
    };

    const [hovered, setHovered] = useState<Boolean>(false);

    return <div onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="h-full w-full">
        <Card className="w-[350px]"
        >

            <Link href="/login">
                <CardHeader className="p-6 pb-1">
                    <CardTitle className="text-center">{product.name.slice(0, 37)}{product.name.length > 40 && "..."}</CardTitle>
                </CardHeader>

                <CardContent className="p-0 flex items-center justify-center">
                    <Image src={`/images/` + product.imageList[hovered ? 1 : 0]} width={320} height={320} alt="image alt text" />
                </CardContent>
            </Link>

            <CardFooter className="flex justify-between">
                <Label className="text-base font-semibold">{product.price}$</Label>
                <Button onClick={handleClick}>Add To Card</Button>
            </CardFooter>
        </Card>
    </div>
}