import React from 'react'
import { ArrowDownRight, ArrowUpRight, MapPin, ShieldCheck } from 'lucide-react'
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/company'
import { WhatsAppIcon } from './WhatsAppIcon'

export const Hero: React.FC = () => (
  <section id="inicio" className="relative isolate overflow-hidden bg-[#082C1E] text-white min-h-[610px] md:min-h-[690px] flex items-center">
    <div className="absolute inset-0 -z-20">
      <picture>
        <source srcSet="/images/hero_layout.webp" type="image/webp" />
        <img src="/images/hero_layout.jpg" alt="Área externa com revestimento e pisos de concreto" className="w-full h-full object-cover object-[63%_center]" fetchPriority="high" />
      </picture>
    </div>
    <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,39,25,0.99)_0%,rgba(5,39,25,0.96)_28%,rgba(5,39,25,0.73)_55%,rgba(5,39,25,0.10)_100%)]" />
    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#072B1D]/80 via-transparent to-transparent" />
    <div className="site-container w-full py-20 md:py-24 relative">
      <div className="max-w-[750px]">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-white/90">
          <span className="w-2 h-2 rounded-full bg-[#F6D54A]" /> Pisos, revestimentos e soluções para sua obra
        </div>
        <h1 className="mt-7 text-[clamp(2.55rem,5.8vw,5.25rem)] font-extrabold leading-[1.08] tracking-[-0.045em] max-w-[760px]">
          A base de um <span className="text-[#F8D644]">grande projeto</span> começa aqui.
        </h1>
        <p className="mt-6 text-[15px] sm:text-lg text-white/80 leading-relaxed max-w-[595px]">
          Pisos intertravados, calçadas, revestimentos, pedras naturais e muito mais. Escolha os materiais ideais para transformar seus espaços.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
          <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.hero)} target="_blank" rel="noopener noreferrer" className="btn-yellow"><WhatsAppIcon className="w-5 h-5" /> Peça seu orçamento <ArrowUpRight className="w-4 h-4" /></a>
          <a href="#produtos" className="btn-outline-light">Explorar produtos <ArrowDownRight className="w-4 h-4" /></a>
        </div>
        <div className="mt-11 flex flex-wrap gap-x-7 gap-y-3 text-white/80 text-xs sm:text-sm font-medium">
          <span className="flex items-center gap-2"><ShieldCheck className="w-4.5 h-4.5 text-[#F8D644]" /> Qualidade em cada detalhe</span>
          <span className="flex items-center gap-2"><MapPin className="w-4.5 h-4.5 text-[#F8D644]" /> São José do Rio Preto e região</span>
        </div>
      </div>
    </div>
    <div className="absolute right-0 bottom-0 hidden xl:flex items-center gap-4 px-8 py-5 bg-white/95 backdrop-blur-sm text-[#0C3925] rounded-tl-3xl shadow-2xl">
      <span className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#E7F2EB]"><ShieldCheck className="w-5 h-5 text-[#0D7545]" /></span>
      <div><strong className="block font-bold text-sm">Escolhas para cada ambiente</strong><span className="block text-xs text-[#5B7062] mt-0.5">Residencial · Comercial · Áreas externas</span></div>
    </div>
  </section>
)
