import * as HeroIcons from '@heroicons/react/24/outline'
import { Product } from '@/types/product'

export default function ProductCard({ title, description, icon }: Product) {
  // Dynamically get the icon component
  const IconComponent = (HeroIcons as any)[icon] || HeroIcons.CubeIcon

  return (
    <article className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="mb-4 flex justify-center">
      
      </div>

      <h4 className="text-xl font-bold text-gray-900 mb-3">
        {title}
      </h4>

      <p className="text-gray-700 leading-relaxed">
        {description}
      </p>
    </article>
  )
}
