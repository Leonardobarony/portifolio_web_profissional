export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Data Engineering",
    items: ["PySpark", "Apache Spark", "Delta Lake", "ETL", "Apache Hop", "Pentaho", "KNIME"],
  },
  {
    category: "Cloud & Plataformas",
    items: ["Microsoft Fabric", "AWS", "S3 / Glue / Athena", "Redshift", "Databricks", "Docker"],
  },
  {
    category: "BI & Visualização",
    items: [
      "Power BI Avançado",
      "Power BI Premium",
      "Power BI Embedded",
      "DAX",
      "Power Query (M)",
      "Tabular Editor",
      "DAX Studio",
    ],
  },
  {
    category: "Linguagens",
    items: ["Python", "PySpark", "SQL Avançado"],
  },
  {
    category: "DevOps & Versionamento",
    items: ["Git", "GitHub", "Azure DevOps", "CI/CD"],
  },
  {
    category: "Banco de Dados & Ferramentas",
    items: ["SQL Server", "DBeaver", "API (consumo e integração)"],
  },
  {
    category: "Arquitetura de Dados",
    items: [
      "Medallion Architecture",
      "Star Schema",
      "Data Marts",
      "Data Lake",
      "DW / OLTP / Stage",
    ],
  },
];
