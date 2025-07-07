import Head from "next/head";
import Header from "@/src/components/header/header";
import Footer from "@/src/components/bannerHome/Footer";
import InnerPageBanner from "@/src/components/bannerHome/InnerPageBanner";
import React from 'react';
import VideoSlider from "@/src/components/bannerHome/videoSlider";
import styles from "@/styles/PressRelease.module.css";

const features = [
    {
        title: "Free Entry for Registered Visitors",
    },
    {
        title: "Meet 150+ Exhibitors from Across the Pharma Industry",
    },
    {
        title: "Explore the Latest Trends in Formulations & Technologies",
    },
    {
        title: "Discover New Business Opportunities & Partnerships",
    },
    {
        title: "Held at Bombay Exhibition Centre (NESCO), Goregaon, Mumbai",
    },
];
const news = [
    "/assests/img/press-01.jpeg",
    "/assests/img/press-02.jpeg",
    "/assests/img/press-03.jpeg",
    "/assests/img/press-04.jpeg",
    "/assests/img/press-05.jpeg",
    "/assests/img/press-06.jpeg",
    "/assests/img/press-07.jpeg",
    "/assests/img/press-08.jpeg",
    "/assests/img/press-09.jpeg",
    "/assests/img/press-10.jpeg",
    "/assests/img/press-12.jpeg",
    "/assests/img/press-11.jpeg",
]

const PressRelease = () => {
    return (
        <>
            <Head>
                <title>PharmmaEx</title>
                <meta name="description" content="PharmmaEx Visitor Registration" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <InnerPageBanner pageName="Press Realise" bgImage="/assests/img/sponserbanner.png" />

            <div className={styles.container}>
                <div className={styles.inner}>
                    <h1 className={styles.title}>Welcome to PharmmaEx</h1>
                    <p className={styles.description}>
                         Join the largest pharmaceutical formulation exhibition in Ahmedabad and be part of an exclusive gathering of pharma professionals, innovators, and industry leaders. Complete the form below to register as a visitor and secure your entry pass.
                    </p>
                    <VideoSlider />
                    <div className={styles.grid}>
                        {news.map((img, i) => (
                            <div key={i} className={styles.card}>
                                <img src={img} alt={`testimonial-${i}`} className={styles.image} />
                            </div>
                        ))}
                    </div>
                    <h2 className={styles.sectionTitle}>Why Register for PharmmaEx?</h2>
                    <div className={styles.featureWrap}>
                        {features.map((f, i) => (
                            <div key={i} className={styles.featureBox}>
                                <div className={styles.featureIcon}>★</div>
                                <div className={styles.featureText}>{f.title}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default PressRelease;