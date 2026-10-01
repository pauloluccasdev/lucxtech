import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lucx Tech — Tecnologia para simplificar o seu negócio",
  description: "Entendemos processos manuais, repetitivos ou desconectados e usamos tecnologia para tornar a operação mais simples.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
