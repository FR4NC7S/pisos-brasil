import React from 'react'
import { Clock3, MapPin, Phone } from 'lucide-react'
import { COMPANY_INFO } from '../data/company'

export const TopBar: React.FC = () => (
  <div className="bg-[#082D1F] text-white/85 text-[11px] sm:text-xs">
    <div className="site-container min-h-9 flex items-center justify-between gap-3 py-2">
      <a href={COMPANY_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 min-w-0 hover:text-[#F9D847] transition-colors">
        <MapPin className="w-3.5 h-3.5 text-[#F9D847] shrink-0" />
        <span className="truncate">Vila Sinibaldi · São José do Rio Preto, SP</span>
      </a>
      <div className="flex items-center gap-5 shrink-0">
        <span className="hidden lg:inline-flex items-center gap-2"><Clock3 className="w-3.5 h-3.5 text-[#F9D847]" /> Seg–Sex 07h30–18h · Sáb 08h–12h</span>
        <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="inline-flex items-center gap-1.5 hover:text-[#F9D847] transition-colors">
          <Phone className="w-3.5 h-3.5 text-[#F9D847]" /> <span className="hidden sm:inline">{COMPANY_INFO.phoneDisplay}</span><span className="sm:hidden">Ligar</span>
        </a>
      </div>
    </div>
  </div>
)
