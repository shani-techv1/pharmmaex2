import Head from "next/head";
import Header from "@/src/components/header/header";
import Footer from "@/src/components/bannerHome/Footer";
import InnerPageBanner from "@/src/components/bannerHome/InnerPageBanner";
import React from 'react';
import styles from "@/styles/Upcoming.module.css";
import Image from 'next/image';


const Upcoming = () => {
    return (
        <>
            <Head>
                <title>PharmmaEx</title>
                <meta name="description" content="PharmmaEx Visitor Registration" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <InnerPageBanner pageName="Upcoming Events" bgImage="/assests/img/sponserbanner.png" />

            <h1 className={styles.heading}>
                Our Upcoming <span className={styles.greenText}>Exhibhition</span>
            </h1>

            <div className={styles.imageContainer}>
                <Image src="/assests/img/mum-up.webp" alt="PharmmaEx Event" className={styles.image}    width={1000}   height={600}/>
            </div>

            <div className={styles.buttonGroup}>
                <a href="/assests/pdf/PharmmaEx-Floor-Plan-mumbai.pdf" className="btn btn-success about-home-btn " download>Download Floor Plan</a>
                <a href="/assests/pdf/pharmmaex-mumbai-Brochure-2025 (1).pdf" className="btn btn-outline-success about-home-btn" download>Download Brochure</a>
            </div>

            <div className={styles.eventContainer}>
                <div className={styles.eventBox}>
                    <div className={styles.eventItem}>
                        <span className={styles.eventIcon}>📅</span>
                        <div className={styles.eventTextBox}>
                            <div className={styles.eventTitle}>03–04 October, 2025</div>
                            <div className={styles.eventSub}>(Friday,Saturday)</div>
                        </div>
                    </div>

                    <div className={styles.eventItem}>
                        <span className={styles.eventIcon}>📍</span>
                        <div className={styles.eventTextBox}>
                            <div className={styles.eventTitle}>Bombay Exhibition Centre</div>
                            <div className={styles.eventSub}>NESCO, Goregaon, Mumbai, Maharashtra 400063</div>
                        </div>
                    </div>

                    <div className={styles.eventItem}>
                        <span className={styles.eventIcon}>⏰</span>
                        <div className={styles.eventTextBox}>
                            <div className={styles.eventTitle}>10:00 AM – 06:00 PM</div>
                            <div className={styles.eventSub}>Business Hours</div>
                        </div>
                    </div>
                </div>

                <div className={styles.registerBtnWrapper}>
                    <a href="https://www.pharmmaexregistration.in/Pharmaex/visitor.aspx" className={styles.registerBtn}>Registration Open!</a>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Upcoming;