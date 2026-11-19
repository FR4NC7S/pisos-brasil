import React, { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/company'
import { WhatsAppIcon } from './WhatsAppIcon'

interface HeaderProps { activeSection?: string }

const links = [
  { label: 'Início', id: 'inicio' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Sobre nós', id: 'sobre' },
  { label: 'Ambientes', id: 'galeria' },
  { label: 'Localização', id: 'localizacao' },
]

export const Header: React.FC<HeaderProps> = ({ activeSection = 'inicio' }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  return (
    <header className={`sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-[#E8EBE6] transition-shadow duration-300 ${scrolled ? 'shadow-[0_9px_35px_rgba(9,42,26,0.09)]' : ''}`}>
      <div className="site-container flex items-center justify-between gap-5 min-h-[78px] lg:min-h-[92px]">
        <a href="#inicio" aria-label="Pisos Brasil — ir ao início" onClick={() => setMenuOpen(false)} className="shrink-0">
          <img src="/logo.png" alt="Pisos Brasil" className="w-[168px] sm:w-[198px] lg:w-[220px] h-auto object-contain" width="220" height="76" />
        </a>
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Navegação principal">
          {links.map(link => <a key={link.id} href={`#${link.id}`} aria-current={activeSection === link.id ? 'page' : undefined} className={`text-[13px] xl:text-sm font-semibold relative py-4 transition-colors hover:text-[#087242] ${activeSection === link.id ? 'text-[#075B37]' : 'text-[#46544B]'}`}>
            {link.label}
            {activeSection === link.id && <span className="absolute bottom-2 left-0 right-0 h-[2px] rounded-full bg-[#0E7748]" />}
          </a>)}
        </nav>
        <div className="hidden lg:flex shrink-0">
          <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.header)} target="_blank" rel="noopener noreferrer" className="btn-primary !py-3 !px-5 text-sm">
            <WhatsAppIcon className="w-4 h-4" /> Solicitar orçamento <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
        <button type="button" className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-[#EEF5EF] text-[#06472A]" onClick={() => setMenuOpen(open => !open)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="menu-mobile">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {menuOpen && <nav id="menu-mobile" className="lg:hidden border-t border-[#E7ECE8] bg-white px-5 pt-3 pb-5 shadow-xl" aria-label="Navegação móvel">
        <div className="flex flex-col gap-1 max-w-xl mx-auto">
          {links.map(link => <a key={link.id} href={`#${link.id}`} onClick={() => setMenuOpen(false)} className="px-3 py-3.5 rounded-xl font-semibold text-[#183A29] hover:bg-[#EEF5EF]">{link.label}</a>)}
          <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.header)} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="btn-primary mt-3"><WhatsAppIcon className="w-5 h-5" /> Solicitar orçamento</a>
        </div>
      </nav>}
    </header>
  )
}
