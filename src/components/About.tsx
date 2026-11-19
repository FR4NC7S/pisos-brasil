import React from 'react'
import { ArrowUpRight, BadgeCheck, MessageCircleMore, PanelsTopLeft } from 'lucide-react'
import { COMPANY_INFO, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/company'

const points = [
  { icon: BadgeCheck, title: 'Materiais bem selecionados', text: 'Acabamentos para projetos que exigem qualidade e durabilidade.' },
  { icon: PanelsTopLeft, title: 'Opções para cada estilo', text: 'Do clássico ao contemporâneo, para dentro e fora de casa.' },
  { icon: MessageCircleMore, title: 'Atendimento personalizado', text: 'Converse com nossa equipe e encontre a solução ideal.' },
]

export const About: React.FC = () => (
  <section id="sobre" className="section-padding bg-white">
    <div className="site-container grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <div className="relative">
        <div className="overflow-hidden rounded-[28px] bg-[#EAF0E9] aspect-[4/4.1] sm:aspect-[5/4.3] lg:aspect-[4/4.4]">
          <img src="/images/about_store.webp" alt="Fachada da loja Pisos Brasil em São José do Rio Preto" loading="lazy" className="w-full h-full object-cover object-center" />
        </div>
        <a href={COMPANY_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="absolute bottom-4 left-4 right-4 sm:right-auto sm:bottom-7 sm:left-7 inline-flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur-md px-4 py-3.5 sm:pr-6 shadow-xl text-[#17432C] hover:translate-y-[-3px] transition-transform">
          <span className="w-11 h-11 rounded-xl bg-[#F7D84D] inline-flex items-center justify-center"><ArrowUpRight className="w-5 h-5" /></span>
          <span><strong className="block text-sm">Conheça nossa loja</strong><small className="block text-xs text-[#647466] mt-1">São José do Rio Preto · SP</small></span>
        </a>
      </div>
      <div className="lg:py-4">
        <span className="section-eyebrow">QUEM SOMOS</span>
        <h2 className="section-heading mt-3">Cada detalhe faz a <span className="text-[#147544]">diferença.</span></h2>
        <p className="section-description mt-5">Na Pisos Brasil, ajudamos a transformar ideias em ambientes mais bonitos, funcionais e duráveis. Reunimos uma seleção de pisos, revestimentos, pedras e materiais para sua construção ou reforma.</p>
        <p className="text-sm sm:text-[15px] text-[#66756D] leading-[1.85] mt-4">Estamos em São José do Rio Preto, com atendimento dedicado para quem busca boas opções e orientação na hora de escolher.</p>
        <div className="mt-8 space-y-5">
          {points.map(point => { const Icon = point.icon; return <div key={point.title} className="flex gap-4 items-start">
            <span className="w-11 h-11 rounded-xl bg-[#EEF6F0] text-[#0D7545] flex items-center justify-center shrink-0"><Icon className="w-5 h-5" /></span>
            <div><h3 className="font-bold text-[#153C28] text-sm sm:text-base">{point.title}</h3><p className="mt-1 text-sm leading-relaxed text-[#718078]">{point.text}</p></div>
          </div>})}
        </div>
        <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="btn-primary mt-9">Fale com nossa equipe <ArrowUpRight className="w-4 h-4" /></a>
      </div>
    </div>
  </section>
)
