import React from 'react'
import { MapPin, Phone, MessageCircle } from 'lucide-react'
import { COMPANY_INFO, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/company'
import { InstagramIcon } from './InstagramIcon'

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#002C19] text-white text-xs py-2 px-3 sm:px-4 border-b border-[#07552C]/40 overflow-hidden w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-1.5 sm:gap-2 min-w-0 w-full overflow-hidden">
        {/* Address */}
        <a
          href={COMPANY_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center md:justify-start gap-1.5 text-gray-200 hover:text-[#FFD600] transition-colors w-full md:w-auto min-w-0 overflow-hidden text-[11px] sm:text-xs text-center md:text-left"
          title="Ver localização no Google Maps"
        >
          <MapPin className="w-3.5 h-3.5 text-[#FFD600] shrink-0" />
          <span className="truncate max-w-[290px] sm:max-w-md md:max-w-xl block">
            {COMPANY_INFO.fullAddress}
          </span>
        </a>

        {/* Contacts */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 shrink-0 font-medium text-[11px] sm:text-xs">
          {/* Phone */}
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="flex items-center gap-1 text-gray-200 hover:text-[#FFD600] transition-colors"
            title="Ligar para a loja"
          >
            <Phone className="w-3.5 h-3.5 text-[#FFD600]" />
            <span>{COMPANY_INFO.phoneDisplay}</span>
          </a>

          {/* WhatsApp */}
          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.header)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-200 hover:text-[#FFD600] transition-colors"
            title="Conversar pelo WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>{COMPANY_INFO.whatsappDisplay}</span>
          </a>

          {/* Instagram (conditional if configured) */}
          {COMPANY_INFO.instagram && (
            <a
              href={COMPANY_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded-full text-gray-200 hover:text-[#FFD600] hover:bg-[#07552C] transition-colors"
              aria-label="Instagram da Pisos Brasil"
              title="Siga a Pisos Brasil no Instagram"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
