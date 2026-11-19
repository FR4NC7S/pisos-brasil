import React, { useState, useEffect } from 'react'
import { TopBar } from '../components/TopBar'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Benefits } from '../components/Benefits'
import { Products } from '../components/Products'
import { About } from '../components/About'
import { Gallery } from '../components/Gallery'
import { LocalSEO } from '../components/LocalSEO'
import { Footer } from '../components/Footer'
import { WhatsAppButton } from '../components/WhatsAppButton'

export const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('inicio')

  useEffect(() => {
    const sectionIds = ['inicio', 'produtos', 'sobre', 'galeria', 'contato']

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#151515] relative selection:bg-[#FFD600] selection:text-[#002C19] w-full max-w-full overflow-x-hidden">
      {/* Top Bar with Contacts & Address */}
      <TopBar />

      {/* Main Sticky Header */}
      <Header activeSection={activeSection} />

      {/* Hero Banner with Pool & Pavers */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        <Hero />

        {/* Benefits Bar */}
        <Benefits />

        {/* Products Section */}
        <Products />

        {/* About Section */}
        <About />

        {/* Gallery Section */}
        <Gallery />

        {/* Regional SEO Section */}
        <LocalSEO />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />
    </div>
  )
}
