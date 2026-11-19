export interface ProductCategory {
  id: string
  name: string
  tagline: string
  description: string
  image: string
  fallbackImage: string
  icon: 'grid' | 'footprints' | 'layers' | 'gem' | 'sun' | 'cubes'
  highlights: string[]
  idealFor: string[]
  whatsappMessage: string
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'pisos-intertravados',
    name: 'Pisos Intertravados',
    tagline: 'Alta resistência mecânica, durabilidade e estética refinada para tráfego leve e pesado.',
    description: 'Os pisos intertravados de concreto (pavers) são a solução ideal para calçadas, garagens, condomínios e áreas comerciais. Oferecem excelente permeabilidade, resistência a intempéries e rápida instalação.',
    image: '/images/products/intertravados.webp?v=3',
    fallbackImage: '/images/products/intertravados.jpg?v=3',
    icon: 'grid',
    highlights: [
      'Resistência para tráfego de veículos leves e pesados',
      'Assentamento sobre camada de areia sem argamassa',
      'Fácil manutenção e reaproveitamento dos blocos',
      'Excelente conforto térmico e escoamento',
    ],
    idealFor: ['Calçadas', 'Garagens', 'Estacionamentos', 'Vias de condomínio', 'Pátios industriais'],
    whatsappMessage: 'Olá! Gostaria de solicitar um orçamento de Pisos Intertravados.',
  },
  {
    id: 'pisos-e-calcadas',
    name: 'Pisos e Calçadas',
    tagline: 'Segurança, acessibilidade e elegância para calçadas residenciais e comerciais.',
    description: 'Linha completa de pisos desenvolvidos para passeios públicos e acessos. Com acabamentos antiderrapantes e alinhados com as normas de acessibilidade e padronização urbana.',
    image: '/images/products/calcadas.webp?v=3',
    fallbackImage: '/images/products/calcadas.jpg?v=3',
    icon: 'footprints',
    highlights: [
      'Superfície antiderrapante com aderência segura',
      'Opções táteis e direcionais para acessibilidade',
      'Formatos padronizados e cores harmônicas',
      'Conformidade com os padrões municipais',
    ],
    idealFor: ['Calçadas residenciais', 'Passeios comerciais', 'Entradas de imóveis', 'Rampas de acesso'],
    whatsappMessage: 'Olá! Gostaria de solicitar um orçamento de Pisos e Calçadas.',
  },
  {
    id: 'revestimentos',
    name: 'Revestimentos',
    tagline: 'Texturas exclusivas e sofisticação para paredes internas e fachadas externas.',
    description: 'Revestimentos em relevo, tijolos arquitetônicos e placas cimentícias que transformam qualquer parede em uma obra de arte contemporânea com durabilidade incomparável.',
    image: '/images/products/revestimentos.webp?v=3',
    fallbackImage: '/images/products/revestimentos.jpg?v=3',
    icon: 'layers',
    highlights: [
      'Acabamento rústico ou moderno de alto padrão',
      'Proteção contra umidade e ação do sol',
      'Valorização imediata da arquitetura',
      'Variedade de paginações e volumetrias',
    ],
    idealFor: ['Fachadas residenciais', 'Muros decorativos', 'Paredes internas de destaque', 'Áreas gourmet'],
    whatsappMessage: 'Olá! Gostaria de solicitar um orçamento de Revestimentos.',
  },
  {
    id: 'pedras-naturais',
    name: 'Pedras Naturais',
    tagline: 'A beleza atemporal e a robustez da natureza no seu ambiente.',
    description: 'Pedras selecionadas com cortes manuais e acabamentos especiais. Ideais para mosaicos, filetes tipo canjiquinha, pisos rústicos e bordas que exigem imponência e charme.',
    image: '/images/products/pedras.webp?v=3',
    fallbackImage: '/images/products/pedras.jpg?v=3',
    icon: 'gem',
    highlights: [
      'Material 100% natural com veios e tons exclusivos',
      'Alta durabilidade e resistência secular',
      'Excelente conforto térmico em áreas ensolaradas',
      'Acabamento fino e padronizado',
    ],
    idealFor: ['Paredes de destaque', 'Bordas de piscina', 'Cascatas e jardins', 'Pilares e muros'],
    whatsappMessage: 'Olá! Gostaria de solicitar um orçamento de Pedras Naturais.',
  },
  {
    id: 'pisos-externos',
    name: 'Pisos Externos',
    tagline: 'Resistência, conforto térmico e segurança para quintais, jardins e áreas de lazer.',
    description: 'Pisos atérmicos e antiderrapantes pensados para áreas ao ar livre expostas ao sol e à água, como áreas de piscina, decks secos, varandas e quintais integrados.',
    image: '/images/products/pisos_externos.webp?v=3',
    fallbackImage: '/images/products/pisos_externos.jpg?v=3',
    icon: 'sun',
    highlights: [
      'Tecnologia com retenção mínima de calor sob o sol',
      'Textura antiderrapante para segurança ao redor de água',
      'Resistente a produtos químicos de limpeza e piscina',
      'Cores claras e neutras que ampliam o ambiente',
    ],
    idealFor: ['Deck de piscinas', 'Varandas gourmet', 'Jardins e lounges externos', 'Espaços de convivência'],
    whatsappMessage: 'Olá! Gostaria de solicitar um orçamento de Pisos Externos.',
  },
  {
    id: 'blocos-e-elementos',
    name: 'Blocos e Elementos',
    tagline: 'Estruturas de concreto, blocos de vedação e elementos vazados com precisão dimensional.',
    description: 'Blocos de concreto de alta resistência para muros, estruturas e contenções, além de cobogós e elementos vazados que proporcionam ventilação e iluminação natural com estilo.',
    image: '/images/products/blocos.webp?v=3',
    fallbackImage: '/images/products/blocos.jpg?v=3',
    icon: 'cubes',
    highlights: [
      'Precisão dimensional para economia de argamassa',
      'Resistência à compressão certificada',
      'Elementos vazados para ventilação e sombra',
      'Acabamento limpo e uniforme',
    ],
    idealFor: ['Muros de divisa', 'Paredes estruturais', 'Divisórias com cobogó', 'Obras civis e comerciais'],
    whatsappMessage: 'Olá! Gostaria de solicitar um orçamento de Blocos e Elementos de Concreto.',
  },
]
