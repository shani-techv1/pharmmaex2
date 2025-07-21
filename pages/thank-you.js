import React from "react";
import Link from "next/link";
import Header from "@/src/components/header/header";
import InnerPageBanner from "@/src/components/bannerHome/InnerPageBanner";
import Footer from "@/src/components/bannerHome/Footer";
 
 

const ThankYou = () => (
  <>
 <Header/>
 <InnerPageBanner pageName="Thank You " bgImage="/assests/img/aboutBanner.svg" />
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: '#f7fafc' }}>
      <div style={{ background: '#fff', padding: '40px 32px', borderRadius: 12, boxShadow: '0 2px 16px rgba(0,0,0,0.07)', textAlign: 'center', maxWidth: 400 }}>
        <h1 style={{ color: '#1a7f37', marginBottom: 16 }}>Thank You!</h1>
        <p style={{ fontSize: 18, color: '#333', marginBottom: 32 }}>
          Thank you for submitting your details.<br />We’ll get back to you shortly.
        </p>
        <Link href="/">
          <button style={{ background: '#1a7f37', color: '#fff', border: 'none', borderRadius: 6, padding: '12px 32px', fontSize: 16, cursor: 'pointer', fontWeight: 500 }}>
            Back to Home
          </button>
        </Link>
      </div>
    </div>
    <Footer />
   
  </>
);

export default ThankYou; 