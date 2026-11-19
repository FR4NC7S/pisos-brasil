import React, { useEffect } from 'react'
import { X, CheckCircle2, MapPin, Sparkles } from 'lucide-react'
import type { ProductCategory } from '../data/products'
import { getWhatsAppUrl } from '../data/company'
import { WhatsAppIcon } from './WhatsAppIcon'

interface ProductModalProps {
  product: ProductCategory | null
  onClose: () => void
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (product) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [product, onClose])

  if (!product) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[calc(100dvh-2rem)] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Image */}
        <div className="relative h-44 sm:h-56 bg-gray-900 overflow-hidden shrink-0">
          <img
            src={product.image}
            alt={product.name}
            onError={(e) => {
              ;(e.target as HTMLImageElement).src = product.fallbackImage
            }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#002C19] via-[#002C19]/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 hover:text-[#FFD600] transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title on image */}
          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFD600] text-[#002C19] mb-2">
              <Sparkles className="w-3 h-3" /> Categoria
            </span>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-white">
              {product.name}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 space-y-6 min-h-0 overflow-y-auto">
          {/* Tagline & Description */}
          <div>
            <p className="text-base sm:text-lg font-medium text-[#003D22] mb-2">
              {product.tagline}
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Highlights */}
          <div className="bg-[#F7F7F5] rounded-xl p-4 sm:p-5 border border-gray-200/60">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
              Diferenciais e Características
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#07552C] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Applications / Ideal For */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#003D22]" /> Indicado para
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.idealFor.map((app, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-[#003D22]/10 text-[#003D22]"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
            <a
              href={getWhatsAppUrl(product.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2.5 bg-[#003D22] hover:bg-[#07552C] text-white px-6 py-3.5 rounded-full font-bold text-sm sm:text-base shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <WhatsAppIcon className="w-5 h-5 text-[#FFD600]" />
              <span>Solicitar Orçamento no WhatsApp</span>
            </a>
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 text-sm font-semibold transition-colors"
            >
              Voltar ao Site
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
