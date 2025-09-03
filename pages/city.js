import Head from "next/head";
import Image from "next/image";
import Header from "@/src/components/header/header";
import Footer from "@/src/components/bannerHome/Footer";
import InnerPageBanner from "@/src/components/bannerHome/InnerPageBanner";
import CityBanner from "@/src/components/bannerHome/CityBanner";
import AboutEvent from "@/src/components/bannerHome/AboutEvent";
import WhyAttend from "@/src/components/bannerHome/WhyAttend";
import ContactForm from "@/src/components/bannerHome/ContactForm";
import GetReady from "@/src/components/bannerHome/GetReady";


export default function City() {
  return (
    <>
      <Head>
        <title>PharmmaEx Hyderabad - India's Largest Pharma Exhibition</title>
        <meta name="description" content="Join PharmmaEx Hyderabad on 2-3 May, 2025 at HITEX Exhibition Centre. Discover innovations, network with industry leaders, and explore the future of pharma." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <CityBanner/>
      <AboutEvent/>
      <WhyAttend/>
      <GetReady/>
      <ContactForm/>
      <Footer /> 
    </>
  )
}
