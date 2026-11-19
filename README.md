# Pisos Brasil — Site Institucional

Site institucional completo, moderno, sofisticado e totalmente responsivo para a empresa **Pisos Brasil**, localizada em São José do Rio Preto – SP.

O projeto foi desenvolvido com fidelidade absoluta à identidade visual da marca, reproduzindo rigorosamente as cores, tipografia, estrutura de seções, proporções e estilo arquitetônico presentes no layout de referência.

---

## 🎨 Identidade Visual

- **Verde-escuro institucional:** `#003D22`
- **Verde profundo:** `#002C19`
- **Verde secundário:** `#07552C`
- **Amarelo da marca:** `#FFD600`
- **Branco:** `#FFFFFF`
- **Cinza-claro de fundo:** `#F7F7F5`
- **Preto suave:** `#151515` / `#0A120E`
- **Tipografia:** `Poppins` e `Inter` para títulos e corpo; `Caveat` para detalhe manuscrito decorativo (*"Seu projeto começa aqui!"*).

---

## 🚀 Tecnologias Utilizadas

- **React 19 + TypeScript:** Base tipada, robusta e escalável.
- **Vite:** Ferramenta de build ultrarrápida com Hot Module Replacement (HMR).
- **Tailwind CSS v4:** Estilização com design system centralizado via `@theme`.
- **Framer Motion:** Animações fluidas de entrada, transições e microinterações.
- **Lucide React:** Biblioteca de ícones moderna e leve.
- **Lightbox Interativo:** Modal em tela cheia com suporte a navegação por teclado e botões para orçar o estilo da foto no WhatsApp.
- **SEO Semântico:** Schema.org `HomeAndConstructionBusiness`, OpenGraph, Twitter Cards, `robots.txt` e `sitemap.xml`.

---

## 🏢 Estrutura do Projeto

```text
pisos-brasil/
├── public/
│   ├── images/
│   │   ├── products/        # Imagens das categorias de produtos (WebP/JPG)
│   │   ├── gallery/         # Imagens da galeria de ambientes e projetos
│   │   └── hero_layout.webp # Imagem principal do banner hero
│   ├── logo.png             # Logotipo oficial em alta resolução
│   ├── robots.txt           # Diretrizes para indexadores de busca
│   └── sitemap.xml          # Mapa do site para Google Search Console
├── src/
│   ├── assets/              # Assets estáticos empacotados
│   ├── components/
│   │   ├── TopBar.tsx       # Barra superior com contatos e endereço
│   │   ├── Header.tsx       # Menu fixo com logo e navegação suave
│   │   ├── Hero.tsx         # Banner principal com composição da referência
│   │   ├── Benefits.tsx     # 4 diferenciais com ícones institucionais
│   │   ├── Products.tsx     # Grade com as 6 categorias de produtos
│   │   ├── ProductModal.tsx # Modal com detalhes e CTA contextual de orçamento
│   │   ├── About.tsx        # Seção institucional dividida em duas colunas
│   │   ├── Gallery.tsx      # Carrossel horizontal de ambientes e projetos
│   │   ├── Lightbox.tsx     # Visualizador de imagens em tela cheia
│   │   ├── LocalSEO.tsx     # Bloco de relevância regional (Rio Preto e região)
│   │   ├── Footer.tsx       # Rodapé dividido em duas áreas (verde e preto)
│   │   ├── WhatsAppButton.tsx # Botão flutuante de WhatsApp com radar pulse
│   │   └── InstagramIcon.tsx# Ícone vetorial do Instagram
│   ├── data/
│   │   ├── company.ts       # Dados centralizados da empresa (endereço, telefones, links)
│   │   ├── products.ts      # Dados das categorias de produtos e mensagens
│   │   └── gallery.ts       # Dados dos projetos para a galeria e lightbox
│   ├── pages/
│   │   └── Home.tsx         # Página principal com sincronização de seções ativas
│   ├── styles/
│   │   └── globals.css      # Configuração do Tailwind v4, fontes e utilitários
│   ├── App.tsx
│   └── main.tsx
├── vercel.json              # Configuração de rotas e cache headers na Vercel
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 📦 Instalação e Execução Local

### Pré-requisitos
- **Node.js:** versão 18 ou superior (recomendado 20+ ou 22 LTS)
- **npm** ou **yarn** ou **pnpm**

### Passos

1. Clone o repositório ou acesse a pasta do projeto:
```bash
cd "c:\Users\Francis\Documents\Pisos Brasil"
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```
O site estará acessível em `http://localhost:5173/`.

4. Para gerar o build de produção:
```bash
npm run build
```

5. Para pré-visualizar o build localmente:
```bash
npm run preview
```

---

## 🌐 Publicação na Vercel

O projeto está 100% preparado para deploy na [Vercel](https://vercel.com):

1. Envie o código para o seu repositório no GitHub.
2. Acesse o painel da Vercel e clique em **Add New Project**.
3. Importe o repositório `pisos-brasil`.
4. As configurações padrão do Vite serão detectadas automaticamente:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Clique em **Deploy**. O arquivo `vercel.json` já inclui regras de cache e roteamento SPA.

---

## 📍 Informações de Contato da Empresa

- **Empresa:** Pisos Brasil
- **Endereço:** Rua Centenário, 558 – Esq. c/ Marginal Arthur Nonato – Vila Sinibaldi – São José do Rio Preto – SP
- **Telefone:** (17) 3226-7397
- **WhatsApp:** (17) 99774-6006 (`5517997746006`)
- **Instagram:** [@pisosbrasil](https://www.instagram.com/pisosbrasil)
- **Horário de Atendimento:** Segunda a Sexta: 07h30 às 18h | Sábado: 08h às 12h
