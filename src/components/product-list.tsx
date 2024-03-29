"use client"

import ProductCard from "@/components/product-card"
import { motion } from "framer-motion"
import Link from "next/link";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        // y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        // y: 0,
        transition: {
            delay: 0.1 * index,
        },
    }),
};

const productList = [
    {
        id: 1,
        name: "Nike Air Jordan 1 Retro OG High UNC toe University Blue Black White NEW Sz 7",
        imageList: ["s-l9602.jpg", "s-l9601.jpg", "s-l9603.jpg", "s-l960.jpg"],
        price: 250.00
    }
]

export default function ProductList() {
    return <div className="py-4 sm:py-6 flex max-w-screen-xl mx-auto flex-wrap justify-around xl:justify-between gap-y-4 sm:gap-y-6 md:gap-y-8 list-none">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (

            <motion.li
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                    once: true,
                }}
                custom={index}
                className="item w-[350px]">
                <ProductCard product={productList[0]} />
            </motion.li>

        ))}

    </div>
}