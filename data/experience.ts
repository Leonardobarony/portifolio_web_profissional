export interface Experience {
  company: string;
  role: string;
  period: string;
  duration: string;
  highlights: string[];
}

export const experience: Experience[] = [
  {
    company: "Dataside",
    role: "Power BI Tech Leader",
    period: "fev/2023 – atual",
    duration: "3 anos 5 meses",
    highlights: [
      "Liderança técnica de times de Power BI em projetos de consultoria",
      "Levantamento de requisitos e consultoria com áreas de negócio",
      "Desenvolvimento de dashboards e análise de performance de modelos DAX",
      "Projetos com Power BI Embedded e Power BI Premium",
      "Modelagem de dados: Data Marts, Star Schema, DW",
    ],
  },
  {
    company: "Dataside",
    role: "Analista de Dados Sênior",
    period: "ago/2022 – fev/2023",
    duration: "7 meses",
    highlights: [
      "Desenvolvimento de ETL com Pentaho e Apache Hop",
      "Criação de relatórios e dashboards em Power BI",
      "Modelagem de dados e construção de Data Marts",
    ],
  },
  {
    company: "CashMe",
    role: "Analista de BI Pleno",
    period: "nov/2021 – ago/2022",
    duration: "10 meses",
    highlights: [
      "Desenvolvimento de soluções de BI para área de crédito e financeiro",
      "Construção de pipelines de dados e relatórios em Power BI",
      "Análise de dados com SQL Avançado",
    ],
  },
  {
    company: "BI300",
    role: "Business Intelligence Consultant",
    period: "jan/2020 – dez/2021",
    duration: "2 anos",
    highlights: [
      "Consultoria de BI para clientes de diferentes segmentos",
      "Projetos de Big Data na AWS (S3, Glue, Athena, Redshift)",
      "Desenvolvimento de ETL com PySpark e Apache Hop",
    ],
  },
  {
    company: "NEC Brasil",
    role: "Gerente de Projetos",
    period: "abr/2009 – nov/2021",
    duration: "12 anos 8 meses",
    highlights: [
      "Gerenciamento de projetos de TI e rollouts em telecomunicações",
      "Coordenação de equipes multidisciplinares em projetos nacionais",
      "Planejamento, controle de escopo, prazo e orçamento",
    ],
  },
  {
    company: "GT Technology",
    role: "Gerente de Projeto",
    period: "ago/2008 – abr/2009",
    duration: "9 meses",
    highlights: [
      "Gestão de projetos de implantação de infraestrutura de telecom",
    ],
  },
  {
    company: "Multicel Telecom",
    role: "Coordenador de Implantação",
    period: "jun/2007 – ago/2008",
    duration: "1 ano 3 meses",
    highlights: [
      "Coordenação de projetos de implantação de redes de telecomunicações",
    ],
  },
  {
    company: "Macoil Produtos Elétricos",
    role: "Auxiliar de Engenharia",
    period: "jan/2004 – mai/2007",
    duration: "3 anos 5 meses",
    highlights: [
      "Suporte técnico e engenharia em produtos elétricos",
    ],
  },
];
