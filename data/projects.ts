export type ProjectType = "Relatório" | "App" | "Open Source";

export interface Project {
  title: string;
  description: string;
  stack: string[];
  type: ProjectType;
  link: string;
  linkLabel: string;
}

export const projects: Project[] = [
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
];
