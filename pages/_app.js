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
        <title>{`PharmmaEx 2027 - Ahmedabad, Gujarat, pharmaceutical exhibition`}</title>
        <link rel="icon" type="image/x-icon" href="/assests/img/favicon.ico" />

        {/* Meta Tags */}
        <meta
          name="description"
          content="Join PharmmaEx 2027 on 8-9 January at Vigyan Bhawan, Science City, Ahmedabad, Gujarat, to explore pharmaceutical innovations, cutting-edge technologies, and key networking opportunities with industry leaders"
        />
        <meta
          name="keywords"
          content="PharmmaEx 2027 Ahmedabad event, Vigyan Bhawan Science City,
          Upcoming pharma events in india Ahmedabad,
            Pharmaceutical exhibition in Ahmedabad, Pharma expo Gujarat, Healthcare trade show Ahmedabad, Medical conference Ahmedabad, Pharma networking event Ahmedabad, Pharmaceutical industry expo Ahmedabad, Pharma technology event 2027, Ahmedabad pharma industry expo, Healthcare pharma business Ahmedabad, Pharmaceutical exhibition, pharmaceutical exhibition, Pharma networking Ahmedabad, Pharma technology event 2027, Ahmedabad pharma industry expo, Healthcare pharma business Ahmedabad, Pharmaceutical exhibition"
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
          content="PharmmaEx 2027 - Ahmedabad, Gujarat, pharmaceutical exhibition"
        />
        <meta property="og:url" content="https://pharmmaex.com/" />
        <meta
          property="og:description"
          content="Join PharmmaEx 2027 at Vigyan Bhawan, Science City, Ahmedabad, Gujarat, and experience the future of pharmaceuticals through innovation, networking, and emerging healthcare technologies."
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
              name: "PharmmaEx 2027 - Ahmedabad, Gujarat, pharmaceutical exhibition",
              startDate: "2027-01-08T09:00:00+05:30",
              endDate: "2027-01-09T18:00:00+05:30",
              location: {
                "@type": "Place",
                name: "Vigyan Bhawan, Science City, Ahmedabad, Gujarat",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Vigyan Bhawan, Science City, Sola, Ahmedabad, Gujarat",
                  addressLocality: "Ahmedabad",
                  addressRegion: "Gujarat",
                  postalCode: "380060",
                  addressCountry: "India",
                },
              },
              description:
                "Join PharmmaEx 2027 at Vigyan Bhawan, Science City, Ahmedabad, Gujarat, for two days of pharmaceutical innovation, networking, and insights into the future of the healthcare industry.",
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
        <meta name="twitter:title" content="PharmmaEx 2027 - Ahmedabad, Gujarat, pharmaceutical exhibition" />
        <meta name="twitter:description" content="Join PharmmaEx 2027 at Vigyan Bhawan, Science City, Ahmedabad, Gujarat, for two days of pharmaceutical innovation, networking, and insights into the future of the healthcare industry." />
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
