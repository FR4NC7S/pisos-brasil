import React, { useState } from 'react'
import { ArrowUpRight, ZoomIn } from 'lucide-react'
import { GALLERY_ITEMS } from '../data/gallery'
import { Lightbox } from './Lightbox'
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/company'

export const Gallery: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  return (
    <section id="galeria" className="section-padding bg-[#FBFCFA]">
      <div className="site-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
          <div className="max-w-2xl">
            <span className="section-eyebrow">IDEIAS QUE INSPIRAM</span>
            <h2 className="section-heading mt-3">Inspiração para <span className="text-[#147544]">cada ambiente.</span></h2>
            <p className="section-description mt-4">Explore diferentes aplicações de pisos e revestimentos e encontre referências para o seu próximo projeto.</p>
          </div>
          <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#0B6840] text-sm font-bold hover:underline shrink-0">Converse sobre seu projeto <ArrowUpRight className="w-4 h-4" /></a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {GALLERY_ITEMS.map((item,index) => <button type="button" key={item.id} onClick={() => setLightboxIndex(index)} aria-label={`Ampliar imagem: ${item.title}`} className="text-left relative isolate group overflow-hidden rounded-[20px] aspect-[1.25] bg-[#DDE8DB] shadow-sm focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0B6840]">
            <img src={item.image} onError={(e) => { (e.currentTarget as HTMLImageElement).src = item.fallbackImage }} alt={item.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover -z-20 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#05291A]/90 via-[#05291A]/5 to-transparent" />
            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/95 flex items-center justify-center text-[#0D6F40] opacity-80 group-hover:opacity-100 group-hover:bg-[#F7D84D] transition-colors"><ZoomIn className="w-4 h-4" /></div>
            <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white"><span className="block uppercase tracking-wider text-[#F7D84D] text-[10px] font-bold mb-1.5">{item.category}</span><h3 className="text-base sm:text-lg font-bold leading-snug">{item.title}</h3></div>
          </button>)}
        </div>
      </div>
      <Lightbox items={GALLERY_ITEMS} currentIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} onPrev={() => setLightboxIndex(prev => prev === null ? null : (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length)} onNext={() => setLightboxIndex(prev => prev === null ? null : (prev + 1) % GALLERY_ITEMS.length)} />
    </section>
  )
}
