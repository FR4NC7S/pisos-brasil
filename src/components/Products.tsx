import React, { useState } from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { PRODUCT_CATEGORIES } from '../data/products'
import type { ProductCategory } from '../data/products'
import { ProductModal } from './ProductModal'
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/company'

export const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductCategory | null>(null)
  return (
    <section id="produtos" className="section-padding bg-[#F7F9F6]">
      <div className="site-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10 md:mb-12">
          <div className="max-w-2xl">
            <span className="section-eyebrow">NOSSA SELEÇÃO</span>
            <h2 className="section-heading mt-3">Encontre o material <span className="text-[#147544]">certo para sua obra.</span></h2>
            <p className="section-description mt-4">Do acabamento à área externa, conheça nossa linha de pisos, revestimentos e soluções para diferentes projetos.</p>
          </div>
          <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 text-[#075F37] font-bold text-sm hover:gap-4 transition-all shrink-0">Precisa de ajuda para escolher? <ArrowUpRight className="w-4 h-4" /></a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6">
          {PRODUCT_CATEGORIES.map((product, index) => <button type="button" key={product.id} onClick={() => setSelectedProduct(product)} className="group text-left bg-white rounded-[22px] overflow-hidden border border-[#E5EBE6] shadow-[0_3px_18px_rgba(9,47,30,0.03)] hover:shadow-[0_18px_40px_rgba(9,47,30,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087344]" aria-label={`Ver detalhes de ${product.name}`}>
            <div className="relative aspect-[1.55] overflow-hidden bg-[#EBEEEB] w-full">
              <img src={product.image} onError={(e) => { (e.currentTarget as HTMLImageElement).src = product.fallbackImage }} alt={product.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700" />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.13em] font-bold text-[#255C3A]">0{index + 1} / 06</div>
            </div>
            <div className="p-5 sm:p-6 flex flex-col flex-1 w-full">
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#153C28] group-hover:text-[#0E8047] transition-colors">{product.name}</h3>
              <p className="text-[13px] text-[#718078] leading-relaxed mt-2 flex-1 line-clamp-2">{product.tagline}</p>
              <div className="pt-5 mt-5 border-t border-[#EEF1EC] flex justify-between items-center text-[#0B6840] text-[13px] font-bold">Conhecer produto <span className="w-9 h-9 rounded-full bg-[#EFF6F0] group-hover:bg-[#0B6840] group-hover:text-white flex items-center justify-center transition-colors"><ArrowRight className="w-4 h-4" /></span></div>
            </div>
          </button>)}
        </div>
      </div>
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </section>
  )
}
