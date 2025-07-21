'use client';
import Head from "next/head";
import Header from "@/src/components/header/header";
import Footer from "@/src/components/bannerHome/Footer";
import InnerPageBanner from "@/src/components/bannerHome/InnerPageBanner";
import React from 'react';
import styles from "@/styles/ReviewForm.module.css";
import { useState } from 'react';

const ReviewForm = () => {

    const [form, setForm] = useState({
        fullName: '',
        profession: '',
        rating: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can POST this data to an API here
        console.log('Submitted Review:', form);
        setSubmitted(true);
    };

    return (
        <>
            <Head>
                <title>PharmmaEx</title>
                <meta name="description" content="PharmmaEx Visitor Registration" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <InnerPageBanner pageName="Review Form" bgImage="/assests/img/sponserbanner.png" />
            <div className={styles.formContainer}>
                <h2 className={styles.heading}>Review Form</h2>
                <form onSubmit={handleSubmit}>
                    <label>Full Name*</label>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Enter your full name"
                        required
                        onChange={handleChange}
                    />

                    <label>Profession*</label>
                    <input
                        type="text"
                        name="profession"
                        placeholder="Enter your profession"
                        required
                        onChange={handleChange}
                    />

                    <label>Rating (1–5)*</label>
                    <input
                        type="number"
                        name="rating"
                        min="1"
                        max="5"
                        required
                        onChange={handleChange}
                    />

                    <label>Message*</label>
                    <textarea
                        name="message"
                        placeholder="Write your review here..."
                        rows="4"
                        required
                        onChange={handleChange}
                    ></textarea>

                    <button type="submit">Submit</button>
                    {submitted && <p className={styles.thankYou}>Thank you for your feedback!</p>}
                </form>
            </div>

            <Footer />
        </>
    );
};

export default ReviewForm;