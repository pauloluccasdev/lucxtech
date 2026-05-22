import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lucx Tech — Estúdio de Engenharia Digital",
  description: "Construímos sistemas que movem o seu negócio — automação, IA e engenharia sob medida.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
