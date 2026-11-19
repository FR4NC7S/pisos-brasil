import React from 'react'
import { MessageCircle, Phone, MapPin, ExternalLink } from 'lucide-react'
import { COMPANY_INFO, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/company'
import { InstagramIcon } from './InstagramIcon'

export const Footer: React.FC = () => {
  return (
    <footer id="contato" className="relative text-white overflow-hidden w-full max-w-full">
      {/* First Area: Dark Green Background with Geometric Accents */}
      <div className="bg-[#002C19] border-t border-[#07552C]/50 py-10 sm:py-12 md:py-16 relative pattern-stripes w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full max-w-full min-w-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 min-w-0">
            {/* Block 1: Fale com a gente */}
            <div className="flex items-start gap-4 min-w-0">
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#07552C] hover:bg-[#25D366] text-[#FFD600] hover:text-white flex items-center justify-center shrink-0 transition-all duration-200 shadow-md group"
                aria-label="Falar pelo WhatsApp"
              >
                <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-current" />
              </a>
              <div className="min-w-0">
                <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  <span>Fale com a gente</span>
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Tire suas dúvidas, solicite um orçamento ou venha nos visitar!
                </p>
                <a
                  href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFD600] hover:underline mt-2"
                >
                  <span>Chamar no WhatsApp</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Block 2: Telefones */}
            <div className="flex items-start gap-4 min-w-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#07552C] text-[#FFD600] flex items-center justify-center shrink-0 shadow-md">
                <Phone className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div className="space-y-1 min-w-0">
                <h3 className="text-base sm:text-lg font-bold text-white">Telefones</h3>
                <div className="flex flex-col gap-1 text-xs sm:text-sm text-gray-200">
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="hover:text-[#FFD600] transition-colors flex items-center gap-2 truncate"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#FFD600] shrink-0" />
                    <span>{COMPANY_INFO.phoneDisplay}</span>
                  </a>
                  <a
                    href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FFD600] transition-colors flex items-center gap-2 truncate"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                    <span>{COMPANY_INFO.whatsappDisplay} (WhatsApp)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Block 3: Localização */}
            <div className="flex items-start gap-4 min-w-0">
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#07552C] hover:bg-[#FFD600] text-[#FFD600] hover:text-[#002C19] flex items-center justify-center shrink-0 transition-all duration-200 shadow-md"
                aria-label="Abrir mapa com localização"
              >
                <MapPin className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
              <div className="min-w-0">
                <h3 className="text-base sm:text-lg font-bold text-white">Localização</h3>
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 text-xs sm:text-sm text-gray-300 hover:text-[#FFD600] leading-relaxed block transition-colors"
                >
                  {COMPANY_INFO.fullAddress}
                </a>
                <span className="inline-block mt-2 text-[11px] sm:text-xs font-semibold text-gray-400">
                  Horário: Seg a Sex 07h30 às 18h | Sáb 08h às 12h
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Area: Practically Pitch Black Footer */}
      <div className="bg-[#0A120E] py-6 border-t border-white/5 w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4 w-full min-w-0">
          {/* Logo on the left */}
          <div className="flex items-center gap-3 shrink-0">
            <img
              src="/logo.png"
              alt="Pisos Brasil"
              className="h-8 sm:h-9 w-auto object-contain brightness-95"
              width={140}
              height={45}
            />
          </div>

          {/* Copyright in center */}
          <p className="text-xs text-gray-400 text-center">
            © 2026 Pisos Brasil. Todos os direitos reservados.
          </p>

          {/* Social or WhatsApp Contact on the right */}
          {COMPANY_INFO.instagram ? (
            <a
              href={COMPANY_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-medium text-gray-300 hover:text-[#FFD600] transition-colors shrink-0"
            >
              <InstagramIcon className="w-4 h-4 text-[#FFD600]" />
              <span>Siga-nos</span>
            </a>
          ) : (
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.header)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-gray-300 hover:text-[#25D366] transition-colors shrink-0"
              title="Fale conosco pelo WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>(17) 99774-6006</span>
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}
