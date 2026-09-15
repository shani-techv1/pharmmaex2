"use client";
import Head from "next/head";
import Header from "@/src/components/header/header";
import Footer from "@/src/components/bannerHome/Footer";
import InnerPageBanner from "@/src/components/bannerHome/InnerPageBanner";
import React from "react";
import styles from "@/styles/ReviewForm.module.css";
import { useState } from "react";
import { focusFirstError, validateForm } from "@/src/shared/validation";

const REVIEW_SCHEMA = {
  fullName: { label: "Full name", required: true, type: "name", minLength: 2, maxLength: 60 },
  profession: { label: "Profession", required: true, minLength: 2, maxLength: 60 },
  rating: { label: "Rating", required: true, type: "number", integer: true, min: 1, max: 5 },
  message: { label: "Message", required: true, minLength: 10, maxLength: 1000 },
};

const ReviewForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    profession: "",
    rating: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: undefined });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(form, REVIEW_SCHEMA);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setSubmitted(false);
      focusFirstError(e.currentTarget, validationErrors);
      return;
    }
    // You can POST this data to an API here
    console.log("Submitted Review:", form);
    setSubmitted(true);
  };

  const fieldProps = (name) => ({
    name,
    id: `review-${name}`,
    className: errors[name] ? styles.inputError : undefined,
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `review-${name}-error` : undefined,
    onChange: handleChange,
  });

  const renderError = (name) =>
    errors[name] && (
      <span id={`review-${name}-error`} className={styles.errorText}>
        {errors[name]}
      </span>
    );

  return (
    <>
      <Head>
        <title>
          Review | Pharma Exhibition India 2025, pharmaceutical exhibition
        </title>
        <meta name="description" content="pharmaceutical exhibition" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header />
      <InnerPageBanner
        pageName="Review Form"
        bgImage="/assests/img/sponserbanner.png"
      />
      <div className={styles.formContainer}>
        <h2 className={styles.heading}>Review Form</h2>
        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="review-fullName">Full Name*</label>
          <input
            type="text"
            placeholder="Enter your full name"
            required
            maxLength={60}
            {...fieldProps("fullName")}
          />
          {renderError("fullName")}

          <label htmlFor="review-profession">Profession*</label>
          <input
            type="text"
            placeholder="Enter your profession"
            required
            maxLength={60}
            {...fieldProps("profession")}
          />
          {renderError("profession")}

          <label htmlFor="review-rating">Rating (1–5)*</label>
          <input
            type="number"
            min="1"
            max="5"
            required
            {...fieldProps("rating")}
          />
          {renderError("rating")}

          <label htmlFor="review-message">Message*</label>
          <textarea
            placeholder="Write your review here..."
            rows="4"
            required
            maxLength={1000}
            {...fieldProps("message")}
          ></textarea>
          {renderError("message")}

          <button type="submit">Submit</button>
          {submitted && (
            <p className={styles.thankYou}>Thank you for your feedback!</p>
          )}
        </form>
      </div>

      <Footer />
    </>
  );
};

export default ReviewForm;
