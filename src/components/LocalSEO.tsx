import React from 'react'
import { ArrowUpRight, Check, MapPinned } from 'lucide-react'
import { getWhatsAppUrl } from '../data/company'

const cities = ['São José do Rio Preto', 'Mirassol', 'Bady Bassitt', 'Cedral', 'Guapiaçu', 'Nova Granada', 'Tanabi', 'Bálsamo', 'Monte Aprazível', 'Neves Paulista']
const productTypes = ['Pisos intertravados', 'Pisos para calçadas', 'Pisos externos', 'Pedras naturais', 'Revestimentos', 'Blocos de concreto']

export const LocalSEO: React.FC = () => (
  <section className="bg-[#0A3825] text-white py-15 md:py-17 overflow-hidden" aria-labelledby="regional-title">
    <div className="site-container grid lg:grid-cols-[1.05fr_.95fr] gap-9 lg:gap-14 items-center">
      <div>
        <div className="inline-flex items-center gap-2 text-[#F7D84D] text-[11px] font-bold uppercase tracking-[0.17em]"><MapPinned className="w-4 h-4" /> Atendimento na região</div>
        <h2 id="regional-title" className="text-2xl sm:text-3xl lg:text-[2.6rem] font-extrabold tracking-tight leading-[1.2] mt-4">Pisos e revestimentos em <span className="text-[#F7D84D]">Rio Preto e região.</span></h2>
        <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed max-w-xl">Precisa de materiais para sua construção ou reforma? Encontre diversas opções na Pisos Brasil, em São José do Rio Preto.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">{productTypes.map(type => <span key={type} className="flex items-center gap-2 text-white/90 text-[13px]"><Check className="w-4 h-4 text-[#F7D84D] shrink-0" />{type}</span>)}</div>
        <a href={getWhatsAppUrl('Olá! Gostaria de consultar produtos e atendimento para minha cidade na região de Rio Preto.')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-[#F7D84D] hover:underline mt-7 text-sm">Consultar disponibilidade <ArrowUpRight className="w-4 h-4" /></a>
      </div>
      <div className="rounded-[24px] bg-white/8 border border-white/15 p-6 sm:p-8 lg:p-9">
        <h3 className="text-lg font-bold mb-5">Cidades da região</h3>
        <div className="flex flex-wrap gap-2.5">{cities.map(city => <span key={city} className="px-3 py-2 rounded-full bg-white/10 border border-white/10 text-white/85 text-xs font-medium">{city}</span>)}</div>
        <p className="text-white/60 text-xs mt-5 leading-relaxed">Consulte com nossa equipe as opções de atendimento e entrega para seu endereço.</p>
      </div>
    </div>
  </section>
)
