import React from 'react'
import { FaWhatsapp } from 'react-icons/fa6'

export interface WhatsAppIconProps {
  className?: string
  size?: number | string
}

export const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({ className = 'w-5 h-5', size }) => {
  return <FaWhatsapp className={className} size={size} />
}
