import React from 'react'
import { ArrowUpRight, Clock3, MapPin, Navigation, Phone } from 'lucide-react'
import { COMPANY_INFO, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/company'
import { WhatsAppIcon } from './WhatsAppIcon'

const mapQuery = encodeURIComponent(`${COMPANY_INFO.address}, ${COMPANY_INFO.neighborhood}, ${COMPANY_INFO.city}, ${COMPANY_INFO.state}, Brasil`)

export const Location: React.FC = () => (
  <section id="localizacao" className="section-padding bg-[#F5F8F4] border-t border-[#E6ECE5]">
    <div className="site-container">
      <div className="max-w-2xl mb-9">
        <span className="section-eyebrow">ONDE ESTAMOS</span>
        <h2 className="section-heading mt-3">Venha conhecer a <span className="text-[#147544]">Pisos Brasil.</span></h2>
        <p className="section-description mt-4">Estamos em São José do Rio Preto. Veja nosso endereço, confira a localização no mapa e venha nos visitar.</p>
      </div>
      <div className="bg-white overflow-hidden rounded-[26px] border border-[#E0E9E0] shadow-[0_18px_65px_rgba(9,47,30,0.06)] grid lg:grid-cols-[.82fr_1.18fr]">
        <div className="p-6 sm:p-9 lg:p-11 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 text-[#0E7543] font-bold uppercase tracking-[0.15em] text-[11px]"><MapPin className="w-4 h-4" /> Nossa localização</div>
          <h3 className="text-2xl sm:text-[29px] leading-tight font-extrabold text-[#123C28] tracking-tight mt-4">Encontre nossa loja</h3>
          <div className="space-y-5 mt-7">
            <div className="flex items-start gap-3.5"><span className="location-icon"><MapPin className="w-5 h-5" /></span><div><strong className="text-sm text-[#1A452E]">Endereço</strong><p className="text-[13px] sm:text-sm text-[#697970] leading-relaxed mt-1">{COMPANY_INFO.address}<br/>{COMPANY_INFO.addressComplement}<br/>{COMPANY_INFO.neighborhood} · {COMPANY_INFO.city}, {COMPANY_INFO.state}</p></div></div>
            <div className="flex items-start gap-3.5"><span className="location-icon"><Clock3 className="w-5 h-5" /></span><div><strong className="text-sm text-[#1A452E]">Horário de atendimento</strong><p className="text-[13px] sm:text-sm text-[#697970] leading-relaxed mt-1">{COMPANY_INFO.workingHoursWeekday}<br/>{COMPANY_INFO.workingHoursSaturday}</p></div></div>
            <div className="flex items-start gap-3.5"><span className="location-icon"><Phone className="w-5 h-5" /></span><div><strong className="text-sm text-[#1A452E]">Fale com a gente</strong><div className="flex flex-col gap-1 mt-1"><a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-sm text-[#697970] hover:text-[#0E7543]">{COMPANY_INFO.phoneDisplay}</a><a href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="text-sm text-[#697970] hover:text-[#0E7543]">{COMPANY_INFO.whatsappDisplay} (WhatsApp)</a></div></div></div>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 mt-8">
            <a href={COMPANY_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-[13px] px-4 py-3"><Navigation className="w-4 h-4" /> Como chegar <ArrowUpRight className="w-4 h-4" /></a>
            <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="btn-subtle text-[13px] px-4 py-3"><WhatsAppIcon className="w-4 h-4" /> WhatsApp</a>
          </div>
        </div>
        <div className="relative min-h-[365px] sm:min-h-[440px] lg:min-h-full bg-[#E4EBE4]">
          <iframe title="Mapa de localização da Pisos Brasil em São José do Rio Preto" src={`https://www.google.com/maps?q=${mapQuery}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen className="absolute inset-0 w-full h-full border-0" />
          <a href={COMPANY_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-2 bg-white text-[#154B2F] text-xs font-bold px-4 py-3 rounded-full shadow-lg hover:bg-[#F7D84D] transition-colors">Abrir no Google Maps <ArrowUpRight className="w-4 h-4" /></a>
        </div>
      </div>
    </div>
  </section>
)
