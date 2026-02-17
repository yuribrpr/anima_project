import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anima Project",
  description: "Browser game inspirado em Pokemon e Digimon",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
