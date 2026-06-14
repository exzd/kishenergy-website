import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { getOrganizationSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Kish Energy — Energy Trading, EPC, Equipment Supply",
    template: "%s | Kish Energy",
  },
  description: "Kish Energy (kishenergy.ir) is a premier Iran-based energy brokerage, EPC contractor, and industrial equipment supplier catering to global partnerships.",
  keywords: ["Kish Energy", "energy trading", "EPC projects", "oil and gas brokerage", "equipment supply", "Kish Island energy", "Tehran energy office"],
  metadataBase: new URL("https://kishenergy.ir"),
  alternates: {
    canonical: "https://kishenergy.ir",
    languages: {
      "en": "https://kishenergy.ir",
      "fa": "https://kishenergy.ir?lang=fa",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kishenergy.ir",
    title: "Kish Energy — Energy Trading, EPC, Equipment Supply",
    description: "Bridging Energy Markets, Building Tomorrow's Infrastructure from Kish Island.",
    siteName: "Kish Energy",
    images: [
      {
        url: "https://kishenergy.ir/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kish Energy Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kish Energy — Energy Trading, EPC, Equipment Supply",
    description: "Bridging Energy Markets, Building Tomorrow's Infrastructure.",
    images: ["https://kishenergy.ir/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationSchema()) }}
        />
      </head>
      <body>
        <LanguageProvider>
          <div className="page-wrapper">
            <Header />
            <main className="main-content">
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
