# Portfólio Web — Leonardo Augusto Barony

Portfólio profissional de Leonardo Augusto Barony, Data Engineer e Power BI Tech Leader baseado em Contagem, MG. SPA estática construída com Next.js 14, TypeScript e Tailwind CSS, hospedada no Vercel.

## Stack

- **Framework:** Next.js 14 (App Router, geração estática SSG)
- **Linguagem:** TypeScript (strict mode)
- **Estilos:** Tailwind CSS com tokens de design customizados (paleta escura, acento `#00C4CC`)
- **Animações:** Framer Motion (`useInView` + `motion.div` por seção)
- **Fontes:** `@fontsource/inter` e `@fontsource/jetbrains-mono` (via npm, sem Google Fonts)
- **Ícones:** lucide-react
- **Dark mode:** next-themes

## Estrutura do Projeto

```
├── app/
│   ├── layout.tsx          # Metadata, Open Graph, fontes, ThemeProvider
│   ├── page.tsx            # Composição das seções
│   └── globals.css         # CSS variables e tokens de design
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Navbar fixa com scroll-spy (IntersectionObserver)
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx        # Foto, título, CTAs (LinkedIn, GitHub, CV)
│   │   ├── About.tsx       # Bio + destaques numéricos
│   │   ├── Skills.tsx      # Grid de categorias de tecnologias
│   │   ├── Experience.tsx  # Timeline de experiência profissional
│   │   ├── Certifications.tsx  # Certificações em andamento e cursos concluídos
│   │   └── Projects.tsx    # Grid de projetos e relatórios Power BI
│   └── ui/
│       ├── SkillBadge.tsx  # Chip de tecnologia (React.memo)
│       └── ProjectCard.tsx # Card de projeto com links (React.memo)
├── data/                   # Fonte de verdade do conteúdo (arquivos .ts)
│   ├── profile.ts
│   ├── skills.ts
│   ├── experience.ts
│   ├── certifications.ts
│   └── projects.ts
└── public/
    ├── avatar.jpg
    ├── cv-leonardo-barony.pdf
    └── og-image.png
```

> Todo o conteúdo do site fica em `/data/*.ts`. Para atualizar textos, experiências ou projetos, edite apenas esses arquivos.

## Rodando em Desenvolvimento

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`. Se a porta estiver ocupada, o Next.js tenta automaticamente 3001, 3002, etc.

## Build de Produção

```bash
npm run build
```

Gera a saída estática em `.next/`. Zero erros de TypeScript são exigidos para o build passar.

## Deploy

O projeto está vinculado ao Vercel. Cada `git push origin main` dispara um novo deploy automaticamente.

Repositório: `https://github.com/Leonardobarony/portifolio_web_profissional`

## Observações Técnicas

- **Fontes locais:** `next/font/google` foi substituído por `@fontsource/*` devido a bloqueio de SSL do Node.js no ambiente Windows de desenvolvimento. Em produção no Vercel funciona da mesma forma.
- **Ícones de marca:** `Linkedin` e `Github` foram removidos do lucide-react na versão atual. Substituídos por `Link2` e `Code2`.
- **Animações:** cada seção usa `useRef` + `useInView` localmente para disparar fade-in + slide-up ao entrar no viewport (`once: true`).
- **Navbar scroll-spy:** implementado com `IntersectionObserver` nativo, sem biblioteca externa.
