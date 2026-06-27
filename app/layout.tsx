import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leonardo Barony | Data Engineer & Power BI Tech Leader",
  description:
    "Portfólio de Leonardo Barony — Data Engineer com expertise em PySpark, Microsoft Fabric, Databricks e Power BI. Baseado em Contagem, MG.",
  openGraph: {
    title: "Leonardo Barony | Data Engineer & Power BI Tech Leader",
    description:
      "Portfólio de Leonardo Barony — Data Engineer com expertise em PySpark, Microsoft Fabric, Databricks e Power BI.",
    url: "https://leonardobarony.dev",
    siteName: "Leonardo Barony",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "pt_BR",
    type: "website",
  },
  metadataBase: new URL("https://leonardobarony.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
