# Pisos Brasil — site institucional atualizado

Projeto completo em **React + TypeScript + Vite + Tailwind CSS v4**, pronto para versionar no GitHub e publicar na Vercel.

## Atualizações desta versão

- Reformulação visual: cabeçalho e menu responsivos, hero com fotografia, botões de orçamento e navegação, cards e galeria organizados, seção sobre a empresa e rodapé.
- **Google Maps integrado** na seção “Localização”, na parte inferior do site, com botão “Como chegar”, endereço, telefone, WhatsApp e horários.
- **Novo favicon enviado pelo cliente**, exportado como `public/favicon.ico`, `favicon.webp`, `favicon-32x32.png`, `favicon-16x16.png` e `apple-touch-icon.png`, vinculado no `index.html` com versão de cache.
- Preservadas as **seis categorias originais** (sem loja virtual, carrinho ou checkout), imagens, descrições, modais de produto, galeria ampliável, mensagens de orçamento e tags de SEO.
- Dados de endereço, telefone, WhatsApp e horário centralizados em `src/data/company.ts`.
- Página com links internos, foco visível no teclado e estilo adaptado ao celular.

## Instalação

Necessário Node.js compatível com Vite 8 e npm.

```bash
npm install
npm run dev
```

Abra `http://localhost:5173/`. Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Publicar na Vercel

Envie esta pasta para um repositório Git e importe na Vercel. Configuração: **Framework Vite**, build `npm run build`, pasta `dist`. O `vercel.json` mantém o roteamento do site.

## Alterar endereço e mapa

Edite `src/data/company.ts` (principalmente `address`, `neighborhood`, `city`, `state`, `googleMapsUrl`). O mapa incorporado em `src/components/Location.tsx` usa esses mesmos campos para formar a consulta automaticamente — não requer chave de API. O carregamento do mapa depende do Google Maps e da conexão do visitante. O botão externo “Abrir no Google Maps” funciona como alternativa.

## Estrutura principal

- `src/components/` — seções, menu, mapa, modais e contato.
- `src/data/` — empresa, produtos, galeria.
- `src/styles/globals.css` — identidade visual, responsividade e componentes.
- `public/images/` — imagens existentes de produtos, ambientes e fachada.
- `public/favicon.*` — variantes do favicon atualizado.
- `index.html` — metadados SEO, favicon e marcação estruturada.

**Importante:** antes da publicação, confira os dados comerciais e o destino do domínio canônico (`https://www.pisosbrasil.com.br/`) presentes no `index.html`, caso o domínio definitivo seja outro.
