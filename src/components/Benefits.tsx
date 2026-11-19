import React from 'react'
import { Headset, Layers3, MapPinned, ShieldCheck } from 'lucide-react'

const benefits = [
  { icon: ShieldCheck, title: 'Qualidade que permanece', text: 'Materiais selecionados para valorizar cada espaço.' },
  { icon: Layers3, title: 'Variedade de soluções', text: 'Diferentes estilos, texturas e aplicações.' },
  { icon: Headset, title: 'Atendimento próximo', text: 'Orientação para escolher a melhor opção.' },
  { icon: MapPinned, title: 'Rio Preto e região', text: 'Uma loja perto de você e do seu projeto.' },
]

export const Benefits: React.FC = () => (
  <section className="bg-white border-b border-[#E7ECE8] relative z-10" aria-label="Diferenciais da Pisos Brasil">
    <div className="site-container grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-0 py-7 lg:py-9">
      {benefits.map((item,index) => { const Icon = item.icon; return <div key={item.title} className={`flex items-start gap-3.5 lg:px-6 xl:px-8 ${index === 0 ? 'lg:pl-0' : ''} ${index !== benefits.length - 1 ? 'lg:border-r lg:border-[#E4EAE5]' : ''}`}>
        <span className="h-11 w-11 shrink-0 rounded-2xl bg-[#EDF5EF] text-[#0B7342] flex items-center justify-center"><Icon className="w-[21px] h-[21px]" /></span>
        <div><h2 className="font-bold text-[#123C27] text-xs sm:text-sm lg:text-[13px] xl:text-sm leading-snug">{item.title}</h2><p className="hidden sm:block text-[11px] xl:text-xs text-[#718078] leading-relaxed mt-1">{item.text}</p></div>
      </div> })}
    </div>
  </section>
)
