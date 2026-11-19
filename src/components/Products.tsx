import React, { useState } from 'react'
import {
  Grid,
  Footprints,
  Layers,
  Gem,
  Sun,
  Boxes,
  ChevronRight,
  ExternalLink,
} from 'lucide-react'
import { PRODUCT_CATEGORIES } from '../data/products'
import type { ProductCategory } from '../data/products'
import { ProductModal } from './ProductModal'
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/company'

export const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductCategory | null>(null)

  const getProductIcon = (icon: ProductCategory['icon']) => {
    switch (icon) {
      case 'grid':
        return <Grid className="w-4 h-4 text-[#FFD600]" />
      case 'footprints':
        return <Footprints className="w-4 h-4 text-[#FFD600]" />
      case 'layers':
        return <Layers className="w-4 h-4 text-[#FFD600]" />
      case 'gem':
        return <Gem className="w-4 h-4 text-[#FFD600]" />
      case 'sun':
        return <Sun className="w-4 h-4 text-[#FFD600]" />
      case 'cubes':
        return <Boxes className="w-4 h-4 text-[#FFD600]" />
      default:
        return <Grid className="w-4 h-4 text-[#FFD600]" />
    }
  }

  return (
    <section id="produtos" className="bg-white py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Heading and Intro matching mockup */}
          <div className="lg:col-span-4 max-w-lg">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#07552C] block">
                CONHEÇA
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#151515] tracking-tight leading-tight">
                Nossos Produtos
              </h2>
              <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                Trabalhamos com uma grande variedade de pisos, revestimentos e materiais para sua obra ou reforma. Qualidade, durabilidade e o melhor atendimento para você!
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#003D22] hover:bg-[#07552C] text-white font-semibold text-sm px-6 py-3.5 rounded-full shadow-md transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
                >
                  <span>Ver Todos os Produtos</span>
                  <ChevronRight className="w-4 h-4 text-[#FFD600]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Product Cards Grid (3 columns x 2 rows) matching mockup */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
              {PRODUCT_CATEGORIES.map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => setSelectedProduct(cat)}
                  className="group relative cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1.5"
                >
                  {/* Image Container with zoom */}
                  <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      onError={(e) => {
                        ;(e.target as HTMLImageElement).src = cat.fallbackImage
                      }}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      loading="lazy"
                    />

                    {/* Subtle hover overlay badge */}
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-[#FFD600] text-[#002C19] text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 scale-90 group-hover:scale-100 transition-transform">
                        <span>Ver detalhes</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  {/* Dark Green Bottom Strip with Icon and Title matching mockup */}
                  <div className="bg-[#002C19] group-hover:bg-[#003D22] text-white px-3.5 py-3 flex items-center gap-2.5 transition-colors duration-200">
                    <div className="p-1 rounded bg-[#07552C]/60 group-hover:bg-[#07552C] shrink-0">
                      {getProductIcon(cat.icon)}
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-white tracking-wide truncate">
                      {cat.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  )
}
