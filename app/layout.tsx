import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: "Altaira Group · Consultoría ambiental con raíz en el territorio",
  description:
    "Consultoría ambiental con raíz en el territorio. Licencias, estudios de impacto, ordenamiento, SIG y seguimiento. Agenda tu asesoría por WhatsApp.",
  icons: { icon: "/mark.png" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Altaira Group",
  description:
    "Consultoría ambiental con raíz en el territorio. Ingeniería geográfica y ambiental.",
  telephone: "+573186835503",
  email: "gomezmorenomayraalejandra@gmail.com",
  areaServed: "CO",
  sameAs: ["https://www.instagram.com/altairagroupsas/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${outfit.variable} ${fraunces.variable} js`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
