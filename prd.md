# PRD — Portfólio Web Profissional
**Versão:** 1.1  
**Data:** 2026-06-27  
**Autor:** Leonardo Barony  
**Status:** Draft

---

## 1. Visão Geral

### 1.1 Objetivo
Criar uma aplicação web de portfólio profissional acessível via link público, que sirva como currículo interativo e vitrine de competências técnicas, certificações, cursos e projetos — substituindo o PDF estático por uma experiência web moderna, fácil de atualizar e otimizada para compartilhamento em processos seletivos e com clientes de consultoria.

### 1.2 Problema
Currículos em PDF são estáticos, difíceis de atualizar e não permitem interatividade. Links de projetos, relatórios e certificações ficam desconectados do documento principal. A ausência de uma presença web profissional reduz a credibilidade em processos seletivos e com clientes de consultoria.

### 1.3 Solução
Uma Single Page Application (SPA) com seções navegáveis cobrindo perfil, skills técnicas, experiência profissional, cursos e certificações, e projetos/relatórios — com domínio personalizado, atualização via Git push e design diferenciado.

### 1.4 Perfil do Dono
| Campo | Valor |
|---|---|
| **Nome** | Leonardo Barony |
| **Título** | Data Engineer · Power BI Tech Leader |
| **Localização** | Contagem, Minas Gerais, Brasil |
| **LinkedIn** | [linkedin.com/in/leonardobarony](https://www.linkedin.com/in/leonardobarony/) |
| **GitHub** | [github.com/Leonardobarony](https://github.com/Leonardobarony) |
| **E-mail** | leonardobarony@gmail.com |
| **Empresa atual** | Dataside (Power BI Tech Leader — fev/2023 até o momento) |

---

## 2. Stack Tecnológica

### 2.1 Frontend
| Tecnologia | Versão | Justificativa |
|---|---|---|
| **Next.js** | 14 (App Router) | SSG para performance máxima; SEO out-of-the-box |
| **TypeScript** | 5.x | Type safety e melhor DX |
| **Tailwind CSS** | 3.x | Estilização rápida, responsiva e consistente |
| **Framer Motion** | latest | Animações de scroll e hover com controle preciso |
| **Lucide React** | latest | Ícones leves e consistentes |
| **next-themes** | latest | Suporte a dark/light mode |

### 2.2 Conteúdo
| Abordagem | Justificativa |
|---|---|
| **JSON/TS estático** (`/data`) | Conteúdo simples, sem necessidade de CMS; edição via VS Code |
| Sem banco de dados | Portfólio é read-only; não há necessidade de persistência |

### 2.3 Infraestrutura & Deploy
| Serviço | Uso |
|---|---|
| **Vercel** | Hosting, CI/CD automático (push → deploy), HTTPS, Edge Network |
| **GitHub** (`Leonardobarony/portfolio`) | Repositório de código; trigger do pipeline Vercel |
| **Domínio customizado** | Configurado no Vercel (sugestão: `leonardobarony.dev`) |

### 2.4 Ferramentas de Desenvolvimento
| Ferramenta | Uso |
|---|---|
| **VS Code** | Editor principal |
| **ESLint + Prettier** | Linting e formatação |
| **Vercel CLI** | Preview de deploys locais |

---

## 3. Arquitetura do Projeto

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout (meta, fonts, providers)
│   ├── page.tsx            # Página principal (SPA com seções)
│   └── globals.css         # Estilos globais e CSS variables
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Navegação fixa com âncoras
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx        # Perfil + headline + CTA
│   │   ├── About.tsx       # Resumo profissional
│   │   ├── Skills.tsx      # Grid de competências técnicas
│   │   ├── Experience.tsx  # Timeline de experiência
│   │   ├── Certifications.tsx
│   │   └── Projects.tsx    # Cards de projetos e relatórios
│   └── ui/
│       ├── SkillBadge.tsx
│       ├── CertCard.tsx
│       └── ProjectCard.tsx
├── data/
│   ├── profile.ts          # Dados pessoais e contato
│   ├── skills.ts           # Categorias e itens de skills
│   ├── experience.ts       # Histórico profissional
│   ├── certifications.ts   # Cursos e certificações com links
│   └── projects.ts         # Projetos com links para relatórios
├── public/
│   ├── avatar.jpg          # Foto de perfil
│   ├── cv-leonardo-barony.pdf  # CV para download
│   └── og-image.png        # Open Graph para compartilhamento
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```

---

## 4. Conteúdo Real das Seções

### 4.1 Hero
- **Nome:** Leonardo Barony
- **Título:** Data Engineer | Python · PySpark · Microsoft Fabric | Power BI Tech Leader
- **Tagline sugerida:** _"Transformando dados em decisões — da engenharia ao insight."_
- **Botões CTA:**
  - 🔗 LinkedIn → `linkedin.com/in/leonardobarony`
  - 🐙 GitHub → `github.com/Leonardobarony`
  - 📄 Baixar CV → `/cv-leonardo-barony.pdf`

### 4.2 Sobre
- Profissional com mais de **15 anos de experiência** em tecnologia, sendo os últimos **6+ anos focados em Data Engineering e Business Intelligence**
- Formação em Engenharia de Telecomunicações (FUMEC) e Pós-graduação em Data Analytics (IGTI)
- Experiência em projetos de consultoria, liderança técnica de equipes de BI e arquitetura de soluções de dados
- Idiomas: Português (nativo), Inglês (em evolução — Limited Working → Professional Working)

### 4.3 Skills Técnicas
Conteúdo mapeado diretamente do CV:

| Categoria | Tecnologias |
|---|---|
| **Data Engineering** | PySpark, Apache Spark, Delta Lake, ETL, Apache Hop Avançado, Pentaho Avançado, KNIME |
| **Cloud & Plataformas** | Microsoft Fabric, AWS (IAM, RDS, S3, Glue, Athena, Redshift), Databricks, Docker |
| **BI & Visualização** | Power BI Avançado, Power BI Premium, Power BI Embedded, DAX, Power Query (M), Tabular Editor, DAX Studio, Power BI Helper, Performance Analyzer |
| **Linguagens** | Python, PySpark, SQL Avançado |
| **DevOps & Versionamento** | Git, GitHub, Azure DevOps, CI/CD |
| **Banco de Dados & Ferramentas** | SQL Server, DBeaver, API (consumo e integração) |
| **Arquitetura de Dados** | Medallion Architecture (Bronze/Silver/Gold), Star Schema, Data Marts, Data Lake, DW/OLTP/Stage |

### 4.4 Experiência Profissional
Dados extraídos do CV:

| Empresa | Cargo | Período | Duração |
|---|---|---|---|
| **Dataside** | Power BI Tech Leader | fev/2023 – atual | 3 anos 5 meses |
| **Dataside** | Analista de Dados Sênior | ago/2022 – fev/2023 | 7 meses |
| **CashMe** | Analista de BI Pleno | nov/2021 – ago/2022 | 10 meses |
| **BI300** | Business Intelligence Consultant | jan/2020 – dez/2021 | 2 anos |
| **NEC Brasil** | Gerente de Projetos | abr/2009 – nov/2021 | 12 anos 8 meses |
| **GT Technology** | Gerente de Projeto | ago/2008 – abr/2009 | 9 meses |
| **Multicel Telecom** | Coordenador de Implantação | jun/2007 – ago/2008 | 1 ano 3 meses |
| **Macoil Produtos Elétricos** | Auxiliar de Engenharia | jan/2004 – mai/2007 | 3 anos 5 meses |

**Destaques de responsabilidades a exibir:**
- Liderança técnica de times de Power BI (Dataside)
- Levantamento de requisitos e consultoria com áreas de negócio
- Desenvolvimento de ETL (Pentaho, Apache Hop, PySpark)
- Modelagem de dados (Data Marts, Star Schema, DW)
- Desenvolvimento de dashboards e análise de performance de modelos DAX
- Projetos com Power BI Embedded e Power BI Premium
- Projetos de Big Data na AWS (S3, Glue, Athena, Redshift)
- Gerenciamento de projetos de TI e rollouts (NEC Brasil — 12 anos)

### 4.5 Certificações & Cursos
Exibição como **duas listas simples de texto**, sem cards, sem botões e sem links externos. Layout limpo e direto.

**Bloco 1 — Certificações:**
- DP-600 · Microsoft Fabric Analytics Engineer _(adicionar quando obtida)_

**Bloco 2 — Cursos Concluídos:**
- Power BI Experience — Curso Completo
- SQL Avançado e SQL Server
- Curso de Pentaho
- Curso Completo de Business Intelligence com SQL Server
- Pentaho + AWS

> **Nota:** Para adicionar ou remover um item, basta editar `/data/certifications.ts` e fazer `git push`. Nenhum link externo necessário.

### 4.6 Projetos & Relatórios
Projetos reais do GitHub e relatórios Power BI já mapeados — 3 apps e 4 relatórios prontos para exibição. Para adicionar novos itens no futuro: editar `/data/projects.ts` + `git push`.

Para **adicionar um novo projeto ou relatório**: copie um bloco existente, ajuste os campos e faça `git push`. Para **remover**: apague o bloco ou comente com `//`.

**Conteúdo exato do arquivo `/data/projects.ts`:**

```typescript
// ============================================================
// ARQUIVO: /data/projects.ts
// COMO USAR:
//   - Para ADICIONAR: copie um bloco, preencha os campos e faça git push.
//   - Para REMOVER: apague o bloco ou comente com // e faça git push.
//   - Após editar: git add . → git commit -m "feat: add projeto X" → git push
//     O Vercel faz o deploy automaticamente.
// ============================================================

export type ProjectType = "Relatório" | "App" | "Open Source"

export interface Project {
  title: string         // Nome do projeto exibido no card
  description: string   // Descrição curta (2-3 linhas)
  stack: string[]       // Tecnologias usadas (aparecem como badges)
  type: ProjectType     // Tipo do projeto (define o ícone do card)
  link: string          // URL do relatório, repositório ou app
  linkLabel: string     // Texto do botão de link
}

export const projects: Project[] = [

  // ------------------------------------------------------------
  // PROJETO 1 — Quiz Data Analytics
  // ------------------------------------------------------------
  {
    title: "Quiz Data Analytics",
    description:
      "Aplicação de quiz para avaliação de conhecimentos em Data Analytics. " +
      "Desenvolvida para apoiar o desenvolvimento de times de dados " +
      "em trilhas de Analista e Engenheiro de Dados.",
    stack: ["Next.js", "TypeScript", "Supabase", "Vercel"],
    type: "App",
    link: "https://github.com/Leonardobarony/quiz-data-analytic",
    linkLabel: "Ver repositório",
  },

  // ------------------------------------------------------------
  // PROJETO 2 — Quiz DP-600
  // ------------------------------------------------------------
  {
    title: "Quiz DP-600",
    description:
      "Aplicação de estudos gamificada para a certificação Microsoft Fabric " +
      "Analytics Engineer (DP-600), com autenticação de usuário e " +
      "acompanhamento de progresso por sessão.",
    stack: ["Next.js", "TypeScript", "Supabase", "Vercel"],
    type: "App",
    link: "https://github.com/Leonardobarony/quiz_dp_600",
    linkLabel: "Ver repositório",
  },

  // ------------------------------------------------------------
  // PROJETO 3 — Quiz Claude Code
  // ------------------------------------------------------------
  {
    title: "Quiz Claude Code",
    description:
      "Quiz gamificado sobre Claude Code — ferramenta de desenvolvimento " +
      "com IA da Anthropic. Projeto experimental explorando o uso de " +
      "IA generativa no fluxo de desenvolvimento.",
    stack: ["Next.js", "TypeScript", "Vercel"],
    type: "App",
    link: "https://github.com/Leonardobarony/QuizClaudeCodeProjeto",
    linkLabel: "Ver repositório",
  },

  // ------------------------------------------------------------
  // RELATÓRIO 1 — Dashboard de Desempenho de Atendimento
  // ------------------------------------------------------------
  {
    title: "Dashboard de Desempenho de Atendimento",
    description:
      "Painel de acompanhamento de faturamento e atendimento de uma clínica, " +
      "com indicadores de volume, receita e performance operacional " +
      "para apoio à gestão e tomada de decisão.",
    stack: ["Power BI", "DAX", "Power Query"],
    type: "Relatório",
    link: "https://app.powerbi.com/view?r=eyJrIjoiOTY1Y2IzZGMtYzQ2ZS00ZTA3LWI1ZWMtNWI3ZWZmZmQ5YjkzIiwidCI6ImZjZDcyODYyLWRlNzktNDg4Zi04M2RiLTU0MWQ2MTk1MzJkZSJ9",
    linkLabel: "Ver relatório",
  },

  // ------------------------------------------------------------
  // RELATÓRIO 2 — Dashboard de Portfólio de Projetos
  // ------------------------------------------------------------
  {
    title: "Dashboard de Portfólio de Projetos",
    description:
      "Visão consolidada de todos os projetos de um Gerente de Projetos, " +
      "com acompanhamento de status, prazos e progresso por iniciativa — " +
      "facilitando o controle e a comunicação com stakeholders.",
    stack: ["Power BI", "DAX", "Power Query"],
    type: "Relatório",
    link: "https://app.powerbi.com/view?r=eyJrIjoiNzU0YmNlMzMtZmQ0Yi00Mjc4LThkODktOGEyMjk4ZDc3N2U0IiwidCI6ImZjZDcyODYyLWRlNzktNDg4Zi04M2RiLTU0MWQ2MTk1MzJkZSJ9",
    linkLabel: "Ver relatório",
  },

  // ------------------------------------------------------------
  // RELATÓRIO 3 — Dashboard Financeiro
  // ------------------------------------------------------------
  {
    title: "Dashboard Financeiro",
    description:
      "Acompanhamento completo das finanças da empresa com DRE integrada, " +
      "análise de receitas, despesas e resultado por período — " +
      "oferecendo visão estratégica para a diretoria financeira.",
    stack: ["Power BI", "DAX", "Power Query"],
    type: "Relatório",
    link: "https://app.powerbi.com/view?r=eyJrIjoiMTRkYzhlNjgtZGQyOS00ODc1LTk0ZjUtMjNlMTQ4ZDQ1Yzc4IiwidCI6ImYzMjM3Yzc5LTc0YzgtNGE2Yi04MGRjLWMzOTI3MDUyMjU0NSJ9",
    linkLabel: "Ver relatório",
  },

  // ------------------------------------------------------------
  // RELATÓRIO 4 — Dashboard Uber
  // ------------------------------------------------------------
  {
    title: "Dashboard Uber",
    description:
      "Análise pessoal de uso do Uber com acompanhamento de corridas, " +
      "gastos por período e localidades mais frequentes — " +
      "demonstrando o potencial analítico do Power BI aplicado a dados do dia a dia.",
    stack: ["Power BI", "DAX", "Power Query"],
    type: "Relatório",
    link: "https://app.powerbi.com/view?r=eyJrIjoiNWIzODUxMWMtODMzMi00N2RjLTljN2ItZDk2NDFlYzFlODg0IiwidCI6ImZjZDcyODYyLWRlNzktNDg4Zi04M2RiLTU0MWQ2MTk1MzJkZSJ9",
    linkLabel: "Ver relatório",
  },

]
```

---

## 5. Requisitos Não Funcionais

### 5.1 Performance
- Lighthouse Score ≥ 90 em todas as categorias
- Geração estática (SSG) — zero dependência de servidor em runtime
- Imagens otimizadas via `next/image`

### 5.2 SEO & Compartilhamento
- `<title>` → `Leonardo Barony | Data Engineer & Power BI Tech Leader`
- `<meta description>` → _"Portfólio de Leonardo Barony — Data Engineer com expertise em PySpark, Microsoft Fabric, Databricks e Power BI. Baseado em Contagem, MG."_
- Open Graph tags para preview no LinkedIn e WhatsApp
- URL canônica definida
- Sitemap gerado automaticamente (`next-sitemap`)

### 5.3 Responsividade
- Layout funcional em mobile (375px), tablet (768px) e desktop (1280px+)
- Navbar colapsável em mobile (hamburger menu)

### 5.4 Acessibilidade
- Contraste de cores WCAG AA mínimo
- Navegação por teclado funcional
- `alt` em todas as imagens

### 5.5 Manutenibilidade
- Todo conteúdo editável apenas nos arquivos `/data/*.ts`
- Nenhuma lógica de negócio misturada com componentes de UI
- Atualização via `git push main` → deploy automático no Vercel

---

## 6. Design & Identidade Visual

### 6.1 Direção
Paleta escura com acento em ciano/azul elétrico — remetendo ao ambiente de engenharia de dados e BI. Tipografia técnica, limpa e sem serifa. Hierarquia clara, sem excessos decorativos.

### 6.2 Tokens de Design

| Token | Valor | Uso |
|---|---|---|
| `--bg-primary` | `#0A0E1A` | Fundo principal |
| `--bg-card` | `#111827` | Cards e seções alternadas |
| `--accent` | `#00C4CC` | CTAs, badges ativos, links |
| `--accent-hover` | `#00A3AA` | Hover de botões e links |
| `--text-primary` | `#F9FAFB` | Títulos e texto principal |
| `--text-muted` | `#9CA3AF` | Subtítulos e metadados |
| `--border` | `#1F2937` | Bordas de cards |

### 6.3 Tipografia
- **Display:** `Inter` 700 — títulos de seção e nome na hero
- **Body:** `Inter` 400/500 — texto corrido e descrições
- **Mono:** `JetBrains Mono` — nomes de tecnologias, badges de skill e datas

---

## 7. Plano de Entrega

### Fase 1 — Scaffolding (Dia 1)
- [ ] Criar repositório GitHub `Leonardobarony/portfolio`
- [ ] `npx create-next-app@latest` com TypeScript + Tailwind
- [ ] Configurar Vercel + conectar ao repositório GitHub
- [ ] Configurar domínio customizado no Vercel
- [ ] Estrutura de pastas conforme Seção 3
- [ ] Configurar fontes Inter + JetBrains Mono via `next/font`
- [ ] CSS variables globais e tema dark

### Fase 2 — Dados & Componentes Base (Dia 2)
- [ ] Preencher `/data/profile.ts` com dados pessoais
- [ ] Preencher `/data/skills.ts` com categorias da Seção 4.3
- [ ] Preencher `/data/experience.ts` com histórico da Seção 4.4
- [ ] Preencher `/data/certifications.ts` com dados da Seção 4.5
- [ ] Preencher `/data/projects.ts` (inicialmente vazio ou com projetos do GitHub)
- [ ] Criar componentes: `SkillBadge`, `CertCard`, `ProjectCard`
- [ ] Criar `Navbar` com scroll spy e links âncora

### Fase 3 — Seções (Dias 3–4)
- [ ] `Hero` com foto, título e botões CTA
- [ ] `About` com texto e destaques numéricos (15+ anos, 6+ anos em dados)
- [ ] `Skills` com grid de categorias
- [ ] `Experience` com timeline vertical
- [ ] `Certifications` com grid de cards
- [ ] `Projects` com grid de cards e links

### Fase 4 — Polimento (Dia 5)
- [ ] Animações com Framer Motion (fade-in on scroll por seção)
- [ ] Responsividade mobile completa
- [ ] Meta tags e Open Graph image
- [ ] Lighthouse audit e ajustes de performance
- [ ] `next-sitemap` para SEO
- [ ] PDF do CV em `/public/cv-leonardo-barony.pdf`

### Fase 5 — Go Live
- [ ] Review final no mobile e desktop
- [ ] Push para `main` → deploy automático Vercel
- [ ] Atualizar link no perfil do LinkedIn
- [ ] Compartilhar URL com contatos profissionais

---

## 8. Out of Scope (v1.0)
- Sistema de blog ou artigos
- Formulário de contato com backend
- Autenticação ou área restrita
- CMS (Contentful, Sanity, etc.)
- Modo claro (dark mode only na v1.0)
- Analytics (adicionar Vercel Analytics na v1.1)
- Internacionalização (PT-BR only na v1.0)

---

## 9. Pendências — Leonardo precisa fornecer

| Item | Onde usar |
|---|---|
| Foto de perfil (quadrada, alta resolução) | `/public/avatar.jpg` → Hero |
| Novas certificações obtidas (somente texto) | `/data/certifications.ts` |
| Domínio desejado (ex: `leonardobarony.dev`) | Configuração Vercel |

---

## 10. Notas para o CLAUDE.md

Este PRD é a fonte de verdade para gerar o `CLAUDE.md`. O arquivo deve cobrir:

1. **Objetivo do projeto** — portfólio web de Leonardo Barony, substituindo PDF estático
2. **Stack & versões exatas** — conforme Seção 2
3. **Estrutura de pastas** — conforme Seção 3
4. **Dados reais do dono** — conforme Seção 1.4 e Seção 4
5. **Convenções de código:**
   - Componentes em PascalCase
   - Arquivos de dados em camelCase
   - Estilização exclusivamente via Tailwind classes (sem CSS modules)
   - Sem `any` no TypeScript
   - Sem lógica de negócio em componentes de UI
6. **Fluxo de atualização de conteúdo** — editar `/data/*.ts` → `git push` → deploy automático
7. **Comandos principais:**
   ```bash
   npm run dev       # servidor local em localhost:3000
   npm run build     # build de produção
   npm run lint      # ESLint
   vercel --prod     # deploy manual via CLI
   ```
8. **Tokens de design** — CSS variables da Seção 6.2
9. **Seções da SPA** — lista da Seção 4 com componentes responsáveis
10. **O que NÃO fazer** — itens do Out of Scope (Seção 8)
11. **Pendências** — itens da Seção 9 que precisam ser preenchidos antes do go live
