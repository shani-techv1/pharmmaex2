import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import "@/styles/device.css";

import Head from "next/head";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <Head>
        <title>{`PharmmaEx 2026 - Codissia Trade Fair Complex Coimbatore, Tamil Nadu , pharmaceutical exhibition`}</title>
        <link rel="icon" type="image/x-icon" href="/assests/img/favicon.ico" />

        {/* Meta Tags */}
        <meta
          name="description"
          content="Join PharmmaEx 2026 on 20-21 February at Codissia Trade Fair Complex Coimbatore, Tamil Nadu, to explore pharmaceutical innovations, cutting-edge technologies, and key networking opportunities with industry leaders"
        />
        <meta
          name="keywords"
          content="PharmmaEx 2026 Tamil Nadu event, Codissia Trade Fair Complex pharma expo, PharmmaEx conference Coimbatore, Pharmaceutical innovations Tamil Nadu 2026, Pharma networking Coimbatore, Pharma technology event 2026, Coimbatore pharma industry expo, Healthcare pharma business Tamil Nadu, Pharmaceutical exhibition Codissia Trade Fair Complex"
        />
        <meta name="author" content="PharmmaEx" />
        <meta name="publisher" content="PharmmaEx" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:image"
          content="/assets/img/PharmmaEx-updated-logo.svg"
        />
        <meta
          property="og:title"
          content="PharmmaEx 2026 - Codissia Trade Fair Complex, Coimbatore, Tamil Nadu"
        />
        <meta property="og:url" content="https://pharmmaex.com/" />
        <meta
          property="og:description"
          content="Join PharmmaEx 2026 at Codissia Trade Fair Complex, Coimbatore, Tamil Nadu, and experience the future of pharmaceuticals through innovation, networking, and emerging healthcare technologies."
        />
        <meta property="og:image:height" content={300} />
        <meta property="og:image:width" content={300} />

        {/* Canonical URL */}
        <link rel="canonical" href="https://pharmmaex.com/" />

        {/* Google Fonts and Preconnects */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
        (function(w,d,s,l,i){
          w[l]=w[l]||[];
          w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
          var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
          j.async=true;
          j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
          f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-TFBNLFLC');
      `,
          }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TFBNLFLC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* Event Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: "PharmmaEx 2026 - Codissia Trade Fair Complex, Coimbatore, Tamil Nadu",
              startDate: "2026-02-20T09:00:00+05:30",
              endDate: "2026-02-21T18:00:00+05:30",
              location: {
                "@type": "Place",
                name: "Codissia Trade Fair Complex",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Avinashi Road, Peelamedu",
                  addressLocality: "Coimbatore",
                  addressRegion: "Tamil Nadu",
                  postalCode: "641014",
                  addressCountry: "India",
                },
              },
              description:
                "Join PharmmaEx 2026 at Codissia Trade Fair Complex, Coimbatore, Tamil Nadu, for two days of pharmaceutical innovation, networking, and insights into the future of the healthcare industry.",
              image:
                "https://pharmmaex.com/assets/img/pharmmaex-event-bombay-exhibition-centre.webp",
              organizer: {
                "@type": "Organization",
                name: "PharmmaEx",
                url: "https://pharmmaex.com",
              },
            }),
          }}
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
