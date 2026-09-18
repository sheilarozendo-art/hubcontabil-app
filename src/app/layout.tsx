import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Michroma, Inter } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

const michroma = Michroma({
  subsets: ["latin"],
  variable: "--font-michroma",
  weight: ["400"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "HubContábil Financial • Portal do Cliente",
  description: "Plataforma Inteligente de Gestão Contábil e Fiscal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${plusJakarta.variable} ${michroma.variable} ${inter.className} antialiased bg-[#F5F7FB] text-[#030303] m-0 p-0`}>
        {children}
      </body>
    </html>
  );
}