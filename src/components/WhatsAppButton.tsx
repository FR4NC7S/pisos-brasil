import React from 'react'
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/company'
import { WhatsAppIcon } from './WhatsAppIcon'

export const WhatsAppButton: React.FC = () => (
  <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.hero)} target="_blank" rel="noopener noreferrer" aria-label="Fale com a Pisos Brasil pelo WhatsApp" title="Solicite seu orçamento no WhatsApp" className="fixed right-4 bottom-4 md:right-7 md:bottom-7 z-40 flex items-center gap-2.5 rounded-full bg-[#20BD5A] hover:bg-[#179C47] text-white shadow-[0_14px_35px_rgba(16,114,54,0.32)] p-3.5 md:px-5 md:py-3.5 hover:-translate-y-1 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#087344]">
    <WhatsAppIcon className="w-6 h-6" /> <span className="hidden md:block text-sm font-bold">Orçamento rápido</span>
  </a>
)
