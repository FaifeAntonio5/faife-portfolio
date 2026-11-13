import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono, Poppins } from "next/font/google";
import "./globals.css";

// Texto principal
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// Títulos
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

// Código e etiquetas
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
});

// Botões
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Faife Antonio Faife | Full Stack Developer",
  description:
    "Desenvolvedor full stack na Beira, Moçambique. Crio sites, aplicações mobile e sistemas web com React, Next.js, Spring Boot e NestJS.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable} ${poppins.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}