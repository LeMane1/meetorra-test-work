'use client'

import {AnimatePresence, motion} from "framer-motion";
import Link from "next/link";
import {IProduct} from "@/lib/products";

interface IDetailProductProps{
  product: IProduct;
}

export default function DetailProduct({product}: IDetailProductProps){
  return (
    <div className="relative p-6">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-neutral-300 z-0"
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        />
      </AnimatePresence>
      
      
      <motion.img
        layoutId={`product-image-${product.id}`}
        src={product.image}
        alt={product.name}
        className="rounded-lg object-cover w-full max-w-md relative z-10"
      />
      
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 mt-4"
      >
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-lg">{product.price} ₽</p>
        <p className="text-neutral-500">{product.description}</p>
        <Link href="/" className="inline-block mt-4 text-blue-500">Назад</Link>
      </motion.div>
    </div>
  )
}