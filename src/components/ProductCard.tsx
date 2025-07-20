'use client'
import Link from 'next/link'
import {IProduct} from "@/lib/products";
import { motion } from 'framer-motion'

interface IProductCardProps {
  product: IProduct;
}

export default function ProductCard({ product }: IProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className="p-4 hover:shadow-lg rounded-md transition-shadow duration-300">
      <motion.img
        layoutId={`product-image-${product.id}`}
        src={product.image}
        alt={product.name}
        className="object-cover w-full h-60 rounded-lg mb-2"
      />
      <h4 className="text-lg text-gray-600">{product.name}</h4>
      <h3 className="text-lg font-bold">{product.price} ₽</h3>
    </Link>
  )
}