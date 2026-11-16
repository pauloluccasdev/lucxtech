import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const interTight = Inter_Tight({ subsets: ["latin"], variable: "--font-inter-tight", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://lucxtech.com"),
  title: "Lucx — Ideias que viram soluções",
  description: "Sistemas, aplicativos, integrações e automações sob medida para simplificar o trabalho e fazer negócios avançarem.",
  openGraph: {
    title: "Lucx — Ideias que viram soluções",
    description: "Desenvolvimento de software sob medida para problemas reais.",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f4f2" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0d0c" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${interTight.variable}`}>
      <body>
        <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
        <main id="conteudo">{children}</main>
      </body>
    </html>
  );
}
