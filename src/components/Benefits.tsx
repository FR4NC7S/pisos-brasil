import React from 'react'
import { ShieldCheck, Truck, Headphones, CreditCard } from 'lucide-react'

export const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: ShieldCheck,
      title: 'Produtos de',
      subtitle: 'Alta Qualidade',
      description: 'Materiais duráveis e resistentes',
    },
    {
      icon: Truck,
      title: 'Entrega Rápida',
      subtitle: 'e Segura',
      description: 'Logística com pontualidade para toda a região',
    },
    {
      icon: Headphones,
      title: 'Atendimento',
      subtitle: 'Especializado',
      description: 'Consultoria técnica para o seu projeto',
    },
    {
      icon: CreditCard,
      title: 'Diversas Formas',
      subtitle: 'de Pagamento',
      description: 'Condições facilitadas no pagamento',
    },
  ]

  return (
    <section className="bg-white border-b border-gray-100 shadow-sm relative z-20 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 sm:py-7 md:py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-0">
          {benefits.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className={`flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-2.5 sm:gap-4 px-2 sm:px-6 py-2 transition-all duration-200 group ${
                  index !== benefits.length - 1 ? 'lg:border-r lg:border-gray-200' : ''
                }`}
              >
                {/* Green Icon Container */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#003D22]/10 group-hover:bg-[#003D22] flex items-center justify-center shrink-0 transition-colors duration-200">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#003D22] group-hover:text-[#FFD600] transition-colors duration-200" />
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="text-xs sm:text-sm lg:text-base font-bold text-gray-900 leading-tight sm:leading-snug group-hover:text-[#003D22] transition-colors">
                    {item.title}
                    <br className="hidden sm:inline" /> {item.subtitle}
                  </h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
