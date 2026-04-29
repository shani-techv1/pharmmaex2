import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import "@/styles/device.css";

import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { captureUtmFromUrl } from "@/src/shared/utm";

const FB_PIXEL_ID = "3230852063780739";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  useEffect(() => {
    captureUtmFromUrl();
    const onRoute = () => {
      captureUtmFromUrl();
      if (typeof window !== "undefined" && window.fbq) window.fbq("track", "PageView");
    };
    router.events.on("routeChangeComplete", onRoute);
    return () => router.events.off("routeChangeComplete", onRoute);
  }, [router.events]);
  return (
    <>
      <Head>
        <title>{`PharmmaEx 2026 - Kolkata, West Bengal, pharmaceutical exhibition`}</title>
        <link rel="icon" type="image/x-icon" href="/assests/img/favicon.ico" />

        {/* Meta Tags */}
        <meta
          name="description"
          content="Join PharmmaEx 2026 on 3-4 July at Biswa Bangla Exhibition Centre, New Town, Kolkata, West Bengal, to explore pharmaceutical innovations, cutting-edge technologies, and key networking opportunities with industry leaders"
        />
        <meta
          name="keywords"
          content="PharmmaEx 2026 Kolkata event, Biswa Bangla Exhibition Centre, New Town,
          Upcoming pharma events in india Kolkata,
            Pharmaceutical exhibition in Kolkata, Pharma expo West Bengal, Healthcare trade show Kolkata, Medical conference Kolkata, Pharma networking event Kolkata, Pharmaceutical industry expo Kolkata, Pharma technology event 2026, Kolkata pharma industry expo, Healthcare pharma business Kolkata, Pharmaceutical exhibition, pharmaceutical exhibition, Pharma networking Kolkata, Pharma technology event 2026, Kolkata pharma industry expo, Healthcare pharma business Kolkata, Pharmaceutical exhibition"
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
          content="PharmmaEx 2026 - Kolkata, West Bengal, pharmaceutical exhibition"
        />
        <meta property="og:url" content="https://pharmmaex.com/" />
        <meta
          property="og:description"
          content="Join PharmmaEx 2026 at Biswa Bangla Exhibition Centre, New Town, Kolkata, West Bengal, and experience the future of pharmaceuticals through innovation, networking, and emerging healthcare technologies."
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
              name: "PharmmaEx 2026 - Kolkata, West Bengal, pharmaceutical exhibition",
              startDate: "2026-02-20T09:00:00+05:30",
              endDate: "2026-02-21T18:00:00+05:30",
              location: {
                "@type": "Place",
                name: "Biswa Bangla Exhibition Centre, New Town, Kolkata, West Bengal",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Biswa Bangla Exhibition Centre, New Town, Kolkata, West Bengal",
                  addressLocality: "Kolkata",
                  addressRegion: "West Bengal",
                  postalCode: "700156",
                  addressCountry: "India",
                },
              },
              description:
                "Join PharmmaEx 2026 at Biswa Bangla Exhibition Centre, New Town, Kolkata, West Bengal, for two days of pharmaceutical innovation, networking, and insights into the future of the healthcare industry.",
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

     
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PharmmaEx 2026 - Kolkata, West Bengal, pharmaceutical exhibition" />
        <meta name="twitter:description" content="Join PharmmaEx 2026 at Biswa Bangla Exhibition Centre, New Town, Kolkata, West Bengal, for two days of pharmaceutical innovation, networking, and insights into the future of the healthcare industry." />
        <meta name="twitter:image" content="https://pharmmaex.com/assets/img/pharmmaex-event-bombay-exhibition-centre.webp" />

    
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "PharmmaEx",
              url: "https://pharmmaex.com",
              logo: "https://pharmmaex.com/assets/img/PharmmaEx-updated-logo.svg",
              sameAs: [
                "https://www.facebook.com/pharmmaex",
                "https://www.linkedin.com/company/pharmmaex",
                "https://www.instagram.com/pharmmaex",
              ],
            }),
          }}
        />

      </Head>

      {/* Meta Pixel */}
      <Script id="fb-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${FB_PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>

      <Component {...pageProps} />
    </>
  );
}
