import React from 'react'
import { motion } from 'framer-motion'
import { Award, ShieldCheck, Users, MessageCircle } from 'lucide-react'
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/company'

export const About: React.FC = () => {
  const differentials = [
    {
      icon: Award,
      title: 'Experiência e conhecimento do mercado',
      desc: 'Amplo domínio técnico em materiais, paginações e normas de assentamento para obras residenciais e comerciais.',
    },
    {
      icon: ShieldCheck,
      title: 'Produtos de qualidade',
      desc: 'Seleção rigorosa de matérias-primas e controle dimensional que garantem resistência superior e acabamento impecável.',
    },
    {
      icon: Users,
      title: 'Equipe qualificada e pronta para atender',
      desc: 'Consultoria dedicada e atendimento personalizado para orientar a melhor solução do seu projeto.',
    },
  ]

  return (
    <section id="sobre" className="relative overflow-hidden bg-[#F7F7F5] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-xl border border-gray-200/70">
          {/* Left Side: Architectural Photo matching mockup */}
          <div className="lg:col-span-5 relative min-h-[380px] sm:min-h-[460px] lg:min-h-full bg-gray-900 overflow-hidden">
            <picture>
              <source srcSet="/images/about_entrance.webp?v=2" type="image/webp" />
              <img
                src="/images/about_entrance.jpg?v=2"
                onError={(e) => {
                  ;(e.target as HTMLImageElement).src = '/images/mock_crops/about_img.jpg'
                }}
                alt="Entrada residencial moderna com pisos e calçada Pisos Brasil"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
          </div>

          {/* Right Side: Institutional Dark Green Box matching mockup */}
          <div className="lg:col-span-7 bg-[#002C19] p-8 sm:p-10 md:p-14 text-white relative pattern-stripes">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Tag */}
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-gray-300 block">
                SOBRE A PISOS BRASIL
              </span>

              {/* Title with yellow highlight */}
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold tracking-tight leading-[1.18]">
                <span>Tradição e confiança</span>
                <span className="block text-[#FFD600]">em cada detalhe.</span>
              </h2>

              {/* Description */}
              <p className="mt-5 text-sm sm:text-base text-gray-200/95 leading-relaxed font-normal">
                A Pisos Brasil é especializada em pisos, revestimentos, calçadas, pedras e elementos para construção, oferecendo produtos com excelente acabamento e durabilidade. Nosso compromisso é levar o melhor para o seu projeto, com atendimento personalizado e preços justos.
              </p>

              {/* 3 Differentials with circular icons */}
              <div className="mt-8 space-y-5">
                {differentials.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.12 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-11 h-11 rounded-full bg-[#07552C] group-hover:bg-[#FFD600] flex items-center justify-center shrink-0 border border-[#0F7A40]/50 transition-colors duration-200 shadow-sm">
                        <Icon className="w-5 h-5 text-[#FFD600] group-hover:text-[#002C19] transition-colors duration-200" />
                      </div>
                      <div className="pt-0.5">
                        <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#FFD600] transition-colors">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm text-gray-300/90 leading-normal">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* CTA button */}
              <div className="mt-10 pt-6 border-t border-[#07552C]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <a
                  href={getWhatsAppUrl(WHATSAPP_MESSAGES.header)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#FFD600] hover:bg-[#F0C800] text-[#002C19] font-bold px-6 py-3 rounded-full text-sm shadow-md transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Falar com Nossa Equipe</span>
                </a>

                <span className="text-xs text-gray-300">
                  São José do Rio Preto e toda a região
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
