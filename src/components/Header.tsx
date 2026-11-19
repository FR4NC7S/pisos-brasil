import React, { useState, useEffect } from 'react'
import { Menu, X, Phone, MapPin } from 'lucide-react'
import { COMPANY_INFO, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/company'
import { WhatsAppIcon } from './WhatsAppIcon'

interface HeaderProps {
  activeSection?: string
}

export const Header: React.FC<HeaderProps> = ({ activeSection = 'inicio' }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Início', href: '#inicio', id: 'inicio' },
    { label: 'Produtos', href: '#produtos', id: 'produtos' },
    { label: 'Sobre Nós', href: '#sobre', id: 'sobre' },
    { label: 'Galeria', href: '#galeria', id: 'galeria' },
    { label: 'Contato', href: '#contato', id: 'contato' },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      const topOffset = 80
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - topOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 w-full bg-white ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2 sm:py-2.5'
          : 'py-2.5 sm:py-3.5 shadow-sm'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-3">
        {/* Brand Logo */}
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, '#inicio')}
          className="flex items-center gap-2 group transition-transform duration-200 hover:scale-[1.02] shrink-0"
          aria-label="Pisos Brasil - Página Inicial"
        >
          <img
            src="/logo.png"
            alt="Pisos Brasil - Pisos e Revestimentos"
            className="h-8 sm:h-10 md:h-11 w-auto object-contain"
            width={140}
            height={44}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 shrink-0" aria-label="Menu Principal">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative py-1 text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? 'text-[#003D22] font-bold'
                    : 'text-gray-700 hover:text-[#003D22]'
                }`}
              >
                {link.label}
                {/* Active indicator bar matching mockup */}
                {isActive && (
                  <span className="absolute bottom-[-6px] left-0 right-0 h-[3px] bg-[#003D22] rounded-full transition-all" />
                )}
              </a>
            )
          })}
        </nav>

        {/* Header Right Action (WhatsApp CTA) */}
        <div className="hidden md:flex items-center shrink-0">
          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.header)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#003D22] hover:bg-[#07552C] text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.03] active:scale-[0.98]"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#FFD600] shrink-0" />
            <span>Fale Conosco</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-800 hover:text-[#003D22] hover:bg-gray-100 transition-colors shrink-0"
          aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-[#003D22]" />
          ) : (
            <Menu className="w-6 h-6 text-[#003D22]" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl px-5 py-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2.5 rounded-lg text-base font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#003D22]/10 text-[#003D22] font-bold'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#003D22]" />}
                </a>
              )
            })}

            <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.header)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#003D22] hover:bg-[#07552C] text-white py-3 rounded-full font-semibold shadow-md text-base"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#FFD600]" />
                <span>Fale Conosco no WhatsApp</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2.5 rounded-full font-medium text-sm"
              >
                <Phone className="w-4 h-4 text-[#003D22]" />
                <span>Ligar: {COMPANY_INFO.phoneDisplay}</span>
              </a>

              <p className="text-xs text-gray-500 text-center flex items-center justify-center gap-1 mt-1">
                <MapPin className="w-3.5 h-3.5 text-gray-400" />
                <span>São José do Rio Preto – SP</span>
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
