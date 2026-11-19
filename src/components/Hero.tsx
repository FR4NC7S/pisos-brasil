import React from 'react'
import { ArrowRight } from 'lucide-react'
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/company'
import { WhatsAppIcon } from './WhatsAppIcon'

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-[500px] sm:min-h-[580px] md:min-h-[620px] lg:min-h-[660px] flex items-center overflow-hidden bg-[#002C19] w-full max-w-full">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet="/images/hero_layout.webp?v=3" type="image/webp" />
          <img
            src="/images/hero_layout.jpg?v=3"
            onError={(e) => {
              ;(e.target as HTMLImageElement).src = '/images/hero_bg.jpg'
            }}
            alt="Área externa com pisos intertravados e piscina sofisticada"
            className="w-full h-full object-cover object-[center_right] md:object-right"
            loading="eager"
            fetchPriority="high"
          />
        </picture>

        {/* Dark Green Gradient Overlay on the Left matching reference layout */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#002C19] via-[#002C19]/90 md:via-[#002C19]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#002C19]/85 via-[#002C19]/30 to-transparent md:hidden" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-24 w-full overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 xl:col-span-7 max-w-2xl text-white">
            {/* Subtitle tag */}
            <div className="inline-block">
              <span className="text-[11px] sm:text-xs md:text-sm font-bold tracking-[0.22em] uppercase text-gray-200 drop-shadow-sm">
                PISOS E REVESTIMENTOS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-2 sm:mt-3 text-2xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold tracking-tight leading-[1.14]">
              <span className="text-white block">Qualidade e beleza</span>
              <span className="text-[#FFD600] block drop-shadow-sm">para o seu projeto!</span>
            </h1>

            {/* Paragraph Description */}
            <p className="mt-3.5 sm:mt-5 text-xs sm:text-base md:text-lg text-gray-200/95 leading-relaxed max-w-xl font-normal drop-shadow-sm">
              Aqui você encontra pisos, revestimentos e materiais de alta qualidade para deixar seu ambiente ainda mais bonito e valorizado.
            </p>

            {/* Action CTA Button */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.hero)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 sm:gap-3 bg-[#FFD600] hover:bg-[#F0C800] text-[#002C19] font-bold text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3.5 rounded-full shadow-lg shadow-black/25 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#002C19] shrink-0" />
                <span>Solicite um Orçamento</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Column: Decorative Handwritten Script */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-end">
            <div className="relative p-2 sm:p-4 select-none text-right">
              <span className="font-script text-2xl sm:text-4xl md:text-5xl text-white font-bold tracking-wide drop-shadow-[0_4px_8px_rgba(0,0,0,0.7)] leading-tight block">
                Seu projeto
                <br />
                começa aqui!
              </span>

              {/* Decorative curved brush stroke under script text */}
              <svg
                className="w-36 sm:w-52 md:w-60 h-5 sm:h-6 ml-auto mt-1"
                viewBox="0 0 240 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M6 14C55 5 160 3 234 16"
                  stroke="#FFD600"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M50 18C110 11 185 11 228 19"
                  stroke="#FFD600"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
