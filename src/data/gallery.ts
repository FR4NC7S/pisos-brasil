export interface GalleryItem {
  id: string
  title: string
  category: string
  image: string
  fallbackImage: string
  description: string
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'galeria-1',
    title: 'Calçada Residencial com Paver',
    category: 'Pisos e Calçadas',
    image: '/images/gallery/g1_calcada.webp?v=2',
    fallbackImage: '/images/gallery/g1_calcada.jpg?v=2',
    description: 'Calçada com piso intertravado em padrão geométrico e acabamento antiderrapante.',
  },
  {
    id: 'galeria-2',
    title: 'Área de Piscina com Piso Atérmico',
    category: 'Áreas de Piscina',
    image: '/images/gallery/g2_piscina.webp?v=2',
    fallbackImage: '/images/gallery/g2_piscina.jpg?v=2',
    description: 'Entorno de piscina com piso atérmico de tom claro, antiderrapante e de alta durabilidade.',
  },
  {
    id: 'galeria-3',
    title: 'Acesso e Entrada de Garagem',
    category: 'Pisos Intertravados',
    image: '/images/gallery/g3_garagem.webp?v=2',
    fallbackImage: '/images/gallery/g3_garagem.jpg?v=2',
    description: 'Acesso residencial pavimentado com blocos intertravados resistentes a tráfego veicular.',
  },
  {
    id: 'galeria-4',
    title: 'Fachada com Revestimento em Relevo',
    category: 'Revestimentos',
    image: '/images/gallery/g4_revestimento.webp?v=2',
    fallbackImage: '/images/gallery/g4_revestimento.jpg?v=2',
    description: 'Muro e fachada frontal com placas de revestimento cimentício decorativo.',
  },
  {
    id: 'galeria-5',
    title: 'Pátio Externo e Área Gourmet',
    category: 'Jardins e Áreas Externas',
    image: '/images/gallery/g5_jardim.webp?v=2',
    fallbackImage: '/images/gallery/g5_jardim.jpg?v=2',
    description: 'Espaço ao ar livre integrado com varanda gourmet, pergolado e piso externo resistente.',
  },
  {
    id: 'galeria-6',
    title: 'Entrada Social Contemporânea',
    category: 'Pisos e Revestimentos',
    image: '/images/about_entrance.webp?v=2',
    fallbackImage: '/images/about_entrance.jpg?v=2',
    description: 'Composição de pisos de grande formato com jardineiras e porta imponente.',
  },
]
