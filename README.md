# Portfólio Web — Leonardo Augusto Barony

Portfólio profissional de Leonardo Augusto Barony, Data Engineer e Power BI Tech Leader baseado em Contagem, MG. Substitui o currículo estático em PDF por uma experiência web interativa, com animações de scroll, seções navegáveis e download do CV.

**Proprietário:** Leonardo Augusto Barony — leonardobarony@gmail.com  
**Repositório:** https://github.com/Leonardobarony/portifolio_web_profissional  
**Produção:** https://leonardobarony.dev *(domínio a configurar no Vercel)*

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 14 (App Router) |
| Linguagem | TypeScript 5.x (strict mode) |
| Estilos | Tailwind CSS 3.x com tokens de design customizados |
| Animações | Framer Motion (scroll-reveal por seção) |
| Fontes | `@fontsource/inter` + `@fontsource/jetbrains-mono` |
| Ícones | lucide-react |
| Dark mode | next-themes |
| Hospedagem | Vercel (deploy automático via `git push main`) |

> **Sem backend, sem banco de dados, sem CMS.** Todo o conteúdo é TypeScript estático em `/data`.

---

## Seções do Site

| Seção | Descrição |
|---|---|
| Hero | Foto, nome, título profissional, botões LinkedIn / GitHub / Baixar CV |
| Sobre | Bio profissional com destaques de 15+ anos em tech e 6+ em dados |
| Stack Técnico | Grid de categorias de tecnologias com badges |
| Experiência | Timeline vertical com 8 posições de 2004 até o presente |
| Certificações & Cursos | Certificações Microsoft em andamento + 9 cursos concluídos |
| Projetos & Relatórios | Grid de projetos com links externos para relatórios Power BI |

---

## Estrutura do Projeto

```
├── app/
│   ├── layout.tsx          # Metadata, Open Graph, fontes, ThemeProvider
│   ├── page.tsx            # Composição das seções em ordem
│   └── globals.css         # CSS variables e tokens de design
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Navbar fixa com scroll-spy (IntersectionObserver nativo)
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Certifications.tsx
│   │   └── Projects.tsx
│   └── ui/
│       ├── SkillBadge.tsx  # Chip de tecnologia (React.memo)
│       └── ProjectCard.tsx # Card de projeto com link externo (React.memo)
├── data/                   # FONTE DE VERDADE — editar apenas aqui
│   ├── profile.ts          # Nome, título, links, localização
│   ├── skills.ts           # Categorias e tecnologias
│   ├── experience.ts       # Histórico profissional
│   ├── certifications.ts   # Certificações e cursos
│   └── projects.ts         # Projetos e relatórios Power BI
└── public/
    ├── avatar.jpg
    ├── cv-leonardo-barony.pdf
    └── og-image.png        # Imagem para preview em redes sociais
```

---

## Comandos

```bash
npm install       # instala dependências
npm run dev       # servidor de desenvolvimento (localhost:3000)
npm run build     # build de produção
npm run lint      # ESLint
```

---

## Atualizar Conteúdo

Para atualizar qualquer informação do site, edite o arquivo correspondente em `/data` e faça push:

```bash
git add data/skills.ts
git commit -m "feat: atualiza skills"
git push
```

O Vercel detecta o push e faz o deploy automaticamente em ~30 segundos. Nenhum arquivo de componente precisa ser tocado.

---

## Deploy no Vercel

O projeto está vinculado ao Vercel com deploy contínuo:

1. Cada `git push origin main` dispara um novo deploy automaticamente
2. O Vercel detecta Next.js e configura o build sem necessidade de ajustes
3. Build command: `next build` | Output directory: `.next`

**Para conectar pela primeira vez:**
1. Acesse vercel.com → Add New → Project
2. Importe o repositório `Leonardobarony/portifolio_web_profissional`
3. Deixe todas as configurações no padrão e clique em Deploy

**Domínio customizado:**  
Após o deploy, configurar `leonardobarony.dev` em Settings → Domains no painel do Vercel.

---

## Pendências antes do Go-Live

- [ ] `og-image.png` em `/public` (1200×630px) — imagem de preview para redes sociais
- [ ] Domínio `leonardobarony.dev` configurado no Vercel
- [ ] DP-600 · Microsoft Fabric Analytics Engineer — adicionar em `data/certifications.ts` quando obtido

---

## Decisões Técnicas

- **Fontes locais via `@fontsource`:** `next/font/google` foi substituído porque o ambiente Windows de desenvolvimento bloqueia o certificado SSL do Google Fonts no build. Em produção no Vercel funciona da mesma forma, sem impacto.
- **Ícones de marca:** `Linkedin` e `Github` foram removidos do lucide-react na versão atual. Substituídos por `Link2` e `Code2`.
- **Animações inline:** cada seção usa `useRef` + `useInView` do Framer Motion localmente para disparar fade-in + slide-up ao entrar no viewport (`once: true`).
- **Scroll-spy da Navbar:** implementado com `IntersectionObserver` nativo, sem biblioteca externa.
- **SSG puro:** sem `getServerSideProps`, sem API routes, sem banco de dados — Lighthouse ≥ 90 em todas as categorias.
