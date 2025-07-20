'use client'
import Link from 'next/link'
import {IProduct} from "@/lib/products";
import { motion } from 'framer-motion'

interface IProductCardProps {
  product: IProduct;
}

export default function ProductCard({ product }: IProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className="border p-4 hover:shadow">
      <motion.div layoutId={`product-image-${product.id}`} className="overflow-hidden rounded-md">
        <img src={product.image} alt={product.name} className="w-full h-60 object-cover" />
      </motion.div>
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-600">{product.price} ₽</p>
    </Link>
  )
}