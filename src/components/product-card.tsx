import * as React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { Label } from "./ui/label"

export default function ProductCard({ product }: { product: any }) {

    const handleClick = (event: { stopPropagation: () => void }) => {
        event.stopPropagation();
        setHovered(s => !s)
    };

    const [hovered, setHovered] = useState<Boolean>(false);
    return <div onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="h-full w-full">
        <Card className="w-[350px] relative -z-10"
        >
            <CardHeader className="p-6 pb-0 absolute">
                <CardTitle className="text-center">{product.name.slice(0, 37)}{product.name.length > 40 && "..."}</CardTitle>
            </CardHeader>
            <CardContent className="p-0 flex items-center justify-center">
                <Image src={`/images/` + product.imageList[hovered ? 1 : 0]} width={320} height={320} alt="image alt text" />
            </CardContent>
            {/* <CardFooter className="flex justify-between">
                <Label>{product.price}</Label>
                <Button onClick={handleClick}>Add To Card</Button>
            </CardFooter> */}
        </Card>
    </div>
}