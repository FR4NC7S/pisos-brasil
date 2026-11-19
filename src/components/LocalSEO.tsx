import React from 'react'
import { MapPin, CheckCircle, Navigation, MessageCircle } from 'lucide-react'
import { getWhatsAppUrl } from '../data/company'

export const LocalSEO: React.FC = () => {
  const cities = [
    'São José do Rio Preto',
    'Mirassol',
    'Bady Bassitt',
    'Cedral',
    'Guapiaçu',
    'Nova Granada',
    'Engenheiro Schmitt',
    'Ipiguá',
    'Tanabi',
    'Bálsamo',
    'Neves Paulista',
    'Monte Aprazível',
  ]

  const highlights = [
    'Pisos Intertravados para Calçadas e Estacionamentos',
    'Pisos Atérmicos e Antiderrapantes para Piscina',
    'Pedras Naturais Decorativas (Canjiquinha, Mosaicos)',
    'Revestimentos de Alto Padrão para Muros e Fachadas',
    'Blocos e Elementos Estruturais de Concreto',
    'Entrega Rápida com Logística Própria em Toda a Região',
  ]

  return (
    <section className="bg-[#F7F7F5] py-12 sm:py-14 border-t border-gray-200/80 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full max-w-full min-w-0 overflow-hidden">
        <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm border border-gray-200 w-full min-w-0">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#07552C] flex items-center gap-1.5">
              <Navigation className="w-3.5 h-3.5 text-[#003D22]" />
              PRESENÇA REGIONAL
            </span>
            <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-extrabold text-[#151515] tracking-tight">
              Pisos e Revestimentos em São José do Rio Preto e Região
            </h2>
            <p className="mt-3 text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
              A <strong>Pisos Brasil</strong> é a referência em qualidade para quem busca <strong>pisos intertravados em Rio Preto</strong>, pisos para calçadas, pedras decorativas e soluções em concreto. Atendemos construtoras, condomínios, arquitetos e clientes residenciais com pontualidade, excelente acabamento e atendimento técnico.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-100 min-w-0">
            {/* Highlights */}
            <div className="min-w-0">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">
                Soluções Mais Buscadas na Região
              </h3>
              <ul className="space-y-2.5">
                {highlights.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#07552C] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cities Served */}
            <div className="min-w-0">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#003D22]" /> Cidades com Atendimento e Entrega
              </h3>
              <div className="flex flex-wrap gap-2">
                {cities.map((city, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 hover:bg-[#003D22]/10 hover:text-[#003D22] text-gray-700 transition-colors"
                  >
                    <span>{city}</span>
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={getWhatsAppUrl('Olá! Gostaria de cotar a entrega de pisos para a minha cidade na região de São José do Rio Preto.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#003D22] hover:bg-[#07552C] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-[#FFD600]" />
                  <span>Consultar Frete para Minha Cidade</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
