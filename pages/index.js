import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/src/components/header/header";
import BannerHome from "@/src/components/bannerHome/bannerHome";
import EligibilityExhibitors from "@/src/components/bannerHome/EligibilityExhibitors";
import KeySponsors from "@/src/components/bannerHome/KeySponsors";
import Footer from "@/src/components/bannerHome/Footer";
import dynamic from "next/dynamic";
import FloatingDownloads from "@/src/components/FloatingDownloads";
import HomeSections from "@/src/components/phase1/HomeSections";

const RegisterDialog = dynamic(() => import("@/src/components/RegisterDialog"), { ssr: false });

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>PharmmaEx — India&apos;s Leading Pharma Franchise & Business Expo</title>
        <meta
          name="description"
          content="Connect with 500+ verified pharma companies at PharmmaEx — India's #1 pharma franchise & third-party manufacturing expo. Book your stall today."
        />
      </Head>

      <Header />
      <RegisterDialog />

      {/* 1. Hero */}
      <BannerHome />

      {/* 2-11. Phase 1 sections in mandatory order */}
      <HomeSections
        exhibitorCategories={<EligibilityExhibitors />}
        sponsors={<KeySponsors />}
      />

      <Footer />
      <FloatingDownloads />
    </>
  );
}
