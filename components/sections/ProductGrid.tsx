import ProductCard from '@/components/ui/ProductCard'
import productsData from '@/data/products.json'
import { Product } from '@/types/product'

export default function ProductGrid() {
  const products = productsData.products as Product[]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
