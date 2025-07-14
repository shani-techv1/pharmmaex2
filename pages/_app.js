import "@/styles/globals.css";
import "@/styles/device.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{`PharmmaEx 2025 - India's Leading Pharma Innovations & Expo at HITEX Exhibition Centre, Hyderabad`}</title>
        {/* <link rel="icon" type="image/x-icon" href="/assets/img/favicon.ico" /> */}

        {/* Meta Tags */}
        <meta
          name="description"
          content="Join PharmmaEx 2025 at HITEX Exhibition Centre, Hyderabad, and explore the latest pharmaceutical innovations, emerging trends, and cutting-edge technologies shaping the future of pharma. Network with industry professionals and discover new opportunities."
        />

        <meta
          name="keywords"
          content="PharmmaEx 2025 event Hyderabad, HITEX Exhibition Centre pharma event, PharmmaEx conference Hyderabad, Hyderabad pharmaceutical event 2025, Pharma innovations HITEX 2025, Pharmaceutical trends Hyderabad 2025, Pharma professionals Hyderabad, Pharmaceutical networking Hyderabad, Healthcare professionals pharma Hyderabad, Pharmaceutical business networking HITEX, Pharmaceutical innovations conference Hyderabad, Pharma healthcare technology event, Emerging pharmaceutical trends 2025, Pharma exhibitions HITEX Hyderabad"
        />

        <meta name="author" content="PharmmaEx" />
        <meta name="publisher" content="PharmmaEx" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:image"
          content={"/assets/img/PharmmaEx-updated-logo.svg"}
        />
        <meta
          property="og:title"
          content={
            "PharmmaEx 2025 - Pharma Innovations at HITEX Exhibition Centre, Hyderabad"
          }
        />
        <meta property="og:url" content={`https://pharmmaex.com/`} />
        <meta
          property="og:description"
          content="Join PharmmaEx at HITEX Exhibition Centre, Hyderabad, for the latest advancements in the pharmaceutical industry. Discover new trends and technologies revolutionizing pharma."
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
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="true"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        />
        {/* <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        /> */}

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
              name: "Pharmmaex 2025 - HITEX Exhibition Center",
              startDate: "2025-02-15T09:00:00+05:30",
              endDate: "2025-02-17T18:00:00+05:30",
              location: {
                "@type": "Place",
                name: "HITEX Exhibition Center",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Hitex Road, Izzathnagar, Kothaguda",
                  addressLocality: "Hyderabad",
                  addressRegion: "Telangana",
                  postalCode: "500084",
                  addressCountry: "India",
                },
              },
              description:
                "Join us for PharmmaEx at HITEX Exhibition Center, Hyderabad, showcasing the latest pharmaceutical innovations.",
              image:
                "https://pharmmaex.com/assets/img/pharmmaex-event-hitex-exhibition-centre.webp",
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
