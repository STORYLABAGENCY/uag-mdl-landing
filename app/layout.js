import Script from "next/script";

export const metadata = {
  title: "Maestría en Derecho Laboral Online | UAG",
  description: "Maestría en Derecho Laboral 100% online. Lidera las relaciones laborales del futuro con visión estratégica y jurídica. UAG + Arizona State University. Inicio septiembre 2026.",
  keywords: "maestría derecho laboral, UAG, online, relaciones laborales, compliance, litigación laboral",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
