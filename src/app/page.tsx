import { products } from '@/lib/products'
import ProductCard from '@/components/ProductCard'

export default function HomePage() {
  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
