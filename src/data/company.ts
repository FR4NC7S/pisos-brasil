export interface CompanyInfo {
  name: string
  tradeName: string
  city: string
  state: string
  address: string
  addressComplement: string
  neighborhood: string
  fullAddress: string
  googleMapsUrl: string
  phoneDisplay: string
  phoneRaw: string
  whatsappDisplay: string
  whatsappRaw: string
  instagram: string
  instagramHandle: string
  workingHoursWeekday: string
  workingHoursSaturday: string
}

export const COMPANY_INFO: CompanyInfo = {
  name: 'Pisos Brasil',
  tradeName: 'Pisos Brasil - Pisos e Revestimentos',
  city: 'São José do Rio Preto',
  state: 'SP',
  address: 'Rua Centenário, 558',
  addressComplement: 'Esq. c/ Marginal Arthur Nonato',
  neighborhood: 'Vila Sinibaldi',
  fullAddress: 'Rua Centenário, 558 – Esq. c/ Marginal Arthur Nonato – Vila Sinibaldi – São José do Rio Preto – SP',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rua+Centen%C3%A1rio%2C+558+-+Vila+Sinibaldi%2C+S%C3%A3o+Jos%C3%A9+do+Rio+Preto+-+SP',
  phoneDisplay: '(17) 3226-7397',
  phoneRaw: '+551732267397',
  whatsappDisplay: '(17) 99774-6006',
  whatsappRaw: '5517997746006',
  instagram: 'https://www.instagram.com/pisosbrasil',
  instagramHandle: '@pisosbrasil',
  workingHoursWeekday: 'Segunda a Sexta: 07:30 às 18:00',
  workingHoursSaturday: 'Sábado: 08:00 às 12:00',
}

/**
 * Builds a valid WhatsApp click-to-chat URL with encoded pre-filled text
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || 'Olá! Encontrei o site da Pisos Brasil e gostaria de solicitar um orçamento.'
  return `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_MESSAGES = {
  header: 'Olá! Gostaria de conhecer melhor os produtos da Pisos Brasil.',
  hero: 'Olá! Encontrei o site da Pisos Brasil e gostaria de solicitar um orçamento.',
  general: 'Olá! Gostaria de tirar dúvidas e solicitar um orçamento.',
  categoryQuote: (categoryName: string) => `Olá! Gostaria de solicitar um orçamento de ${categoryName}.`,
}
