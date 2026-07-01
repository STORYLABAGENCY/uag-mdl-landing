export const metadata = {
  title: "Maestría en Derecho Laboral Online | UAG",
  description: "Maestría en Derecho Laboral 100% online. Lidera las relaciones laborales del futuro con visión estratégica y jurídica. UAG + Arizona State University. Inicio septiembre 2026.",
  keywords: "maestría derecho laboral, UAG, online, relaciones laborales, compliance, litigación laboral",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5T5PJ7KN');` }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        {/* Google Tag Manager (noscript) */}
        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5T5PJ7KN" height="0" width="0" style="display:none;visibility:hidden"></iframe>` }} />
        {children}
      </body>
    </html>
  );
}
