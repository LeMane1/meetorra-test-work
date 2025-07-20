'use client'

import {motion} from "framer-motion";
import Link from "next/link";
import {IProduct} from "@/lib/products";

interface IDetailProductProps{
  product: IProduct;
}

export default function DetailProduct({product}: IDetailProductProps){
  return (
    <div className="relative p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black z-0"
      />
      
      <motion.div layoutId={`product-image-${product.id}`} className="relative z-10">
        <img src={product.image} alt={product.name} className="w-full max-w-md" />
      </motion.div>
      
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 mt-4"
      >
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-lg">{product.price} ₽</p>
        <p className="text-gray-700">{product.description}</p>
        <Link href="/" className="inline-block mt-4 text-blue-500">← Назад</Link>
      </motion.div>
    </div>
  )
}