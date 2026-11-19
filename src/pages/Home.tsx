import React, { useState, useEffect } from 'react'
import { TopBar } from '../components/TopBar'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Benefits } from '../components/Benefits'
import { Products } from '../components/Products'
import { About } from '../components/About'
import { Gallery } from '../components/Gallery'
import { LocalSEO } from '../components/LocalSEO'
import { Location } from '../components/Location'
import { Footer } from '../components/Footer'
import { WhatsAppButton } from '../components/WhatsAppButton'

export const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState('inicio')
  useEffect(() => {
    const ids = ['inicio', 'produtos', 'sobre', 'galeria', 'localizacao']
    const onScroll = () => {
      const position = window.scrollY + 170
      for (const id of ids) {
        const element = document.getElementById(id)
        if (element && position >= element.offsetTop && position < element.offsetTop + element.offsetHeight) {
          setActiveSection(id)
          return
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#173A28] selection:bg-[#F7D84D] selection:text-[#082D1F] overflow-x-hidden">
      <TopBar />
      <Header activeSection={activeSection} />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <Products />
        <About />
        <Gallery />
        <LocalSEO />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
