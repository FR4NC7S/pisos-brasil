import React, { useState } from 'react'
import { X } from 'lucide-react'
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/company'
import { WhatsAppIcon } from './WhatsAppIcon'

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true)

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Floating Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 mr-3 bg-white text-gray-800 text-xs font-semibold px-3 py-2 rounded-xl shadow-lg border border-gray-100 animate-in fade-in slide-in-from-right-4 duration-300">
          <span>Solicite um Orçamento</span>
          <button
            onClick={(e) => {
              e.preventDefault()
              setShowTooltip(false)
            }}
            className="text-gray-400 hover:text-gray-600 p-0.5 rounded"
            aria-label="Dispensar aviso"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Pulsing button */}
      <a
        href={getWhatsAppUrl(WHATSAPP_MESSAGES.hero)}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Abrir conversa no WhatsApp"
        title="Fale conosco no WhatsApp"
      >
        {/* Radar wave pulse */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping duration-1000 -z-10" />

        <WhatsAppIcon className="w-7 h-7 text-white" />
      </a>
    </div>
  )
}
