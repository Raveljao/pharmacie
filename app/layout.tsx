import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { CartProvider } from "@/contexts/CartContext";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pharmacie Nouvelle Ville - Toamasina | Commandez facilement",
  description: "Votre pharmacie à Toamasina, Madagascar. Commandez en ligne, Click & Collect ou livraison à domicile. Service rapide et fiable. Lot 2 B Tanandava, près de la station Total.",
  keywords: "pharmacie, Madagascar, Toamasina, Tamatave, médicaments, livraison, click and collect, Tanandava",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} antialiased bg-white`}>
        <LanguageProvider>
          <CartProvider>
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            <BottomNav />
            <WhatsAppButton />
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
