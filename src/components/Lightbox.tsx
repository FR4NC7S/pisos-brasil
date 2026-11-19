import React, { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react'
import type { GalleryItem } from '../data/gallery'
import { getWhatsAppUrl } from '../data/company'

interface LightboxProps {
  items: GalleryItem[]
  currentIndex: number | null
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }

    if (currentIndex !== null) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [currentIndex, onClose, onPrev, onNext])

  if (currentIndex === null || !items[currentIndex]) return null

  const currentItem = items[currentIndex]

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Visualização ampliada da imagem"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Fechar visualizador"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
        className="absolute left-3 sm:left-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
        aria-label="Imagem anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        className="absolute right-3 sm:right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
        aria-label="Próxima imagem"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image and Info Container */}
      <div
        className="relative max-w-4xl max-h-[85vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            onError={(e) => {
              if (currentItem.fallbackImage) {
                ;(e.target as HTMLImageElement).src = currentItem.fallbackImage
              }
            }}
            className="max-h-[70vh] w-auto object-contain rounded-xl select-none"
          />
        </div>

        {/* Caption & WhatsApp Action */}
        <div className="mt-4 w-full bg-black/60 rounded-xl p-4 text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/10">
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-[#FFD600]">
              {currentItem.category}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white">
              {currentItem.title}
            </h3>
            <p className="text-xs text-gray-300 mt-0.5">
              {currentItem.description}
            </p>
          </div>

          <a
            href={getWhatsAppUrl(`Olá! Gostei muito do projeto "${currentItem.title}" visto na galeria da Pisos Brasil e gostaria de um orçamento parecido.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm shrink-0 shadow-md transition-all hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Orçar Esse Estilo</span>
          </a>
        </div>
      </div>
    </div>
  )
}
