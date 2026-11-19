import React, { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight, ZoomIn, ArrowRight } from 'lucide-react'
import { GALLERY_ITEMS } from '../data/gallery'
import { Lightbox } from './Lightbox'
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/company'

export const Gallery: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="galeria" className="bg-white py-14 sm:py-16 md:py-24 relative w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full max-w-full min-w-0 overflow-hidden">
        {/* Section Header matching mockup */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8 sm:mb-10 w-full min-w-0">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#07552C] block">
              NOSSOS
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#151515] tracking-tight leading-tight">
              Ambientes e Projetos
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-600 max-w-xl">
              Veja como nossos produtos fazem a diferença em diversos tipos de ambientes.
            </p>
          </div>

          {/* Controls matching mockup */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#003D22] text-[#003D22] hover:bg-[#003D22] hover:text-white px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200"
            >
              <span>Ver Galeria</span>
              <ArrowRight className="w-4 h-4 text-[#FFD600]" />
            </a>

            {/* Circular navigation arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleScroll('left')}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#003D22] hover:bg-[#07552C] text-white flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-sm"
                aria-label="Rolar para a esquerda"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#003D22] hover:bg-[#07552C] text-white flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-sm"
                aria-label="Rolar para a direita"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Container with robust overflow boundaries */}
        <div className="w-full max-w-full min-w-0 overflow-hidden">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory scroll-smooth w-full"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {GALLERY_ITEMS.map((item, index) => (
              <div
                key={item.id}
                className="w-[240px] sm:w-[280px] md:w-[310px] flex-shrink-0 snap-start group cursor-pointer"
                onClick={() => setLightboxIndex(index)}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1.5 border border-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    onError={(e) => {
                      ;(e.target as HTMLImageElement).src = item.fallbackImage
                    }}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Hover overlay with zoom icon and details */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#FFD600] block">
                          {item.category}
                        </span>
                        <h3 className="text-xs sm:text-sm font-bold text-white line-clamp-1">
                          {item.title}
                        </h3>
                      </div>
                      <span className="p-2 rounded-full bg-[#FFD600] text-[#002C19] shrink-0">
                        <ZoomIn className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        items={GALLERY_ITEMS}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={() =>
          setLightboxIndex((prev) =>
            prev === null ? null : (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
          )
        }
        onNext={() =>
          setLightboxIndex((prev) =>
            prev === null ? null : (prev + 1) % GALLERY_ITEMS.length
          )
        }
      />
    </section>
  )
}
