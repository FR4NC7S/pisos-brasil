import React from 'react'
import { ArrowUpRight, Clock3, MapPin, Phone } from 'lucide-react'
import { COMPANY_INFO, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/company'
import { WhatsAppIcon } from './WhatsAppIcon'

export const Footer: React.FC = () => (
  <footer id="contato" className="bg-[#082D1F] text-white">
    <div className="site-container py-14 md:py-17 grid sm:grid-cols-2 lg:grid-cols-[1.3fr_.8fr_1fr_1fr] gap-10 lg:gap-9">
      <div>
        <div className="inline-flex items-center justify-center bg-white rounded-xl px-3 py-2.5"><img src="/logo.png" alt="Pisos Brasil" width="170" height="55" className="w-[170px] h-auto" /></div>
        <p className="mt-5 text-white/65 text-sm leading-[1.85] max-w-[290px]">Pisos e revestimentos para transformar seus projetos com qualidade, estilo e praticidade.</p>
        <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-6 text-[#F7D84D] font-bold text-sm hover:underline"><WhatsAppIcon className="w-4 h-4" /> Solicitar orçamento <ArrowUpRight className="w-4 h-4" /></a>
      </div>
      <div><h3 className="footer-heading">Navegação</h3><nav className="flex flex-col items-start gap-3 mt-5" aria-label="Links do rodapé"><a className="footer-link" href="#inicio">Início</a><a className="footer-link" href="#produtos">Produtos</a><a className="footer-link" href="#sobre">Sobre nós</a><a className="footer-link" href="#galeria">Ambientes</a><a className="footer-link" href="#localizacao">Localização</a></nav></div>
      <div><h3 className="footer-heading">Entre em contato</h3><div className="flex flex-col gap-4 mt-5"><a className="footer-link flex items-start gap-2.5" href={`tel:${COMPANY_INFO.phoneRaw}`}><Phone className="w-4 h-4 text-[#F7D84D] shrink-0 mt-0.5" />{COMPANY_INFO.phoneDisplay}</a><a className="footer-link flex items-start gap-2.5" href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)} target="_blank" rel="noopener noreferrer"><WhatsAppIcon className="w-4 h-4 text-[#F7D84D] shrink-0 mt-0.5" />{COMPANY_INFO.whatsappDisplay}</a><a className="footer-link flex items-start gap-2.5" href={COMPANY_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer"><MapPin className="w-4 h-4 text-[#F7D84D] shrink-0 mt-0.5" />{COMPANY_INFO.address}, {COMPANY_INFO.neighborhood} — {COMPANY_INFO.city}/{COMPANY_INFO.state}</a></div></div>
      <div><h3 className="footer-heading">Horário de atendimento</h3><div className="flex items-start gap-2.5 mt-5 text-white/65 text-sm leading-relaxed"><Clock3 className="w-4 h-4 text-[#F7D84D] shrink-0 mt-0.5"/><div><p>Segunda a sexta<br/><strong className="text-white/85 font-medium">07h30 às 18h</strong></p><p className="mt-3">Sábado<br/><strong className="text-white/85 font-medium">08h às 12h</strong></p></div></div></div>
    </div>
    <div className="border-t border-white/10"><div className="site-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/45 text-xs"><span>© {new Date().getFullYear()} Pisos Brasil. Todos os direitos reservados.</span><span>São José do Rio Preto, São Paulo</span></div></div>
  </footer>
)
