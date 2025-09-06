import React, { useState } from "react";
import styles from "./ExhibitorRegistrationPage.module.css";
import Image from "next/image";
import aboutBanner from "../../../public/assests/img/aboutBanner.svg";
import { useRouter } from "next/router";

// Config array for form fields
const formFields = [
  { name: "contactPerson", label: "Contact Person", type: "text", col: 6 },
  { name: "designation", label: "Designation", type: "text", col: 6 },
  { name: "company", label: "Company", type: "text", col: 6 },
  { name: "phone", label: "Phone Number", type: "text", col: 6 },
  { name: "email", label: "Email ID", type: "email", col: 6 },
  { name: "address", label: "Company Address", type: "text", col: 6 },
  { name: "city", label: "City", type: "text", col: 6 },
  { name: "state", label: "State", type: "text", col: 6 },
  { name: "pincode", label: "Pincode", type: "text", col: 6 },
  { name: "website", label: "Enter website URL", type: "url", col: 6 },
  { name: "gst", label: "GST No.", type: "text", col: 6 },
  { name: "tax", label: "Additional Tax (if applicable)", type: "text", col: 6 },
  { name: "stallFascia", label: "Stall Fascia Name (In Capital Letters)", type: "text", col: 12 },
];

const initialState = formFields.reduce((acc, field) => {
  acc[field.name] = "";
  return acc;
}, {});

const initialOtherState = {
  spaceType: "Bare Space",
  width: "",
  length: "",
  stallNo: "",
  charges: "",
  grandTotal: "0.00",
  paymentMode: "NEFT",
  logo: null,
  agreeComms: false,
  agreeTerms: false,
};

const ExhibitorRegistrationPage = () => {
  const [form, setForm] = useState(initialState);
  const [other, setOther] = useState(initialOtherState);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const router = useRouter();

  // Dynamic area calculation
  const area = Number(other.width) > 0 && Number(other.length) > 0 ? Number(other.width) * Number(other.length) : 0;

  // Calculate base total and GST
  const baseTotal = area && other.charges ? area * Number(other.charges) : 0;
  const gst = baseTotal * 0.18;
  const grandTotal = (baseTotal + gst).toFixed(2);

  // Update grand total in state when area/charges change
  React.useEffect(() => {
    setOther((prev) => ({ ...prev, grandTotal }));
  }, [area, other.charges]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name in form) {
      setForm((prev) => ({ ...prev, [name]: value }));
    } else if (name === "agreeComms" || name === "agreeTerms") {
      setOther((prev) => ({ ...prev, [name]: checked }));
    } else if (name === "logo") {
      setOther((prev) => ({ ...prev, logo: e.target.files[0] }));
    } else {
      setOther((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle radio button changes
  const handleRadio = (e) => {
    const { name, value } = e.target;
    setOther((prev) => ({ ...prev, [name]: value }));
  };

  // Form validation (updated requirements)
  const validate = () => {
    const newErrors = {};
    formFields.forEach((field) => {
      // Make website and tax optional
      if (field.name !== "website" && field.name !== "tax" && !form[field.name]) newErrors[field.name] = `${field.label} is required`;
      // Phone number must be exactly 10 digits
      if (field.name === "phone" && form.phone && form.phone.length !== 10) {
        newErrors.phone = "Phone Number must be exactly 10 digits.";
      }
      // Phone number must be numeric
      if (field.name === "phone" && form.phone && /[^0-9]/.test(form.phone)) {
        newErrors.phone = "Phone Number must contain only numbers.";
      }
      // Email validation
      if (field.name === "email" && form.email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email)) {
          newErrors.email = "Please enter a valid email address.";
        }
      }
    });
    // Bare Space or Shell Space must be selected
    if (!other.spaceType || (other.spaceType !== "Bare Space" && other.spaceType !== "Shell Space")) {
      newErrors.spaceType = "Please select either Bare Space or Shell Space.";
    }
    // Grand Total must be present and > 0
    if (!grandTotal || Number(grandTotal) <= 0) {
      newErrors.grandTotal = "Grand Total must be calculated and greater than 0.";
    }
    // Payment Mode required
    if (!other.paymentMode) {
      newErrors.paymentMode = "Please select a payment mode.";
    }
    // Logo upload required
    if (!other.logo) {
      newErrors.logo = "Please upload your business logo for FASCIA name.";
    }
    if (!other.agreeTerms) newErrors.agreeTerms = "You must accept the terms and conditions.";
    return newErrors;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setSubmitError("");
  
    if (Object.keys(validationErrors).length === 0) {
      const formData = new FormData();
      const payload = {
        firstName: form.contactPerson,
        email: form.email,
        phone: form.phone,
        jobTitle: form.designation,
        company: form.company,
        companyAdd: form.address,
        city: form.city,
        state: form.state,
        pin: form.pincode,
        website: form.website,
        gst: form.gst,
        tax: form.tax,
        Fascia: form.stallFascia,
        selectedPaymentMode: other.paymentMode,
        space: other.spaceType,
        Sqrm: area,
        Charges: other.charges,
        totalCharge: grandTotal,
        StallNo: other.stallNo,
      };
  
      formData.append("jsonData", JSON.stringify(payload));
      formData.append("file", other.logo);
  
      try {
        const res = await fetch("https://apis.pharmmaex.com/send-exbitor-mail", {
          method: "POST",
          body: formData,
        });
        const result = await res.json();
        if (res.ok) {
          setForm(initialState);
          setOther(initialOtherState);
          router.push("/thank-you");
        } else {
          setSubmitError("Oops! Something went wrong while submitting your form. Please try again later.");
          if (result.error) console.error("Submission error:", result.error);
        }
      } catch (err) {
        setSubmitError("Oops! Something went wrong while submitting your form. Please try again later.");
        console.error("Error submitting form:", err);
      }
    }
  };
  

  return (
    <div className={styles.pageWrapper}>
      <h1 className={styles.pageTitle}>Exhibitor Space Registration Form</h1>
      <div className={styles.eventDetails}>
        <div>
          Exhibition Date & Time:{" "}
          <span className={styles.eventHighlight}>
            October 3rd–4th, 2025, 10.00 AM to 6.00 PM
          </span>
        </div>
        <div>
          Exhibition Venue:{" "}
          <span className={styles.eventHighlight}>
            Bombay Exhibition Centre NESCO, Goregaon, Mumbai, Maharashtra 400063
          </span>
        </div>
      </div>
      <div className={styles.bannerWrapper}>
        <Image
          src={aboutBanner}
          alt="Exhibitor Registration Banner"
          className={styles.bannerImg}
          fill
          priority
        />
      </div>
      <div className={styles.formCard}>
        <h2 className={styles.formTitle}>Exhibitor Registration Form</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className="row g-3">
            {/* Render fields from config */}
            {formFields.map((field) => (
              <div className={`col-md-${field.col}`} key={field.name}>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.label}
                  className={styles.input}
                  value={form[field.name]}
                  onChange={handleChange}
                  maxLength={field.name === "phone" ? 10 : undefined}
                  inputMode={field.name === "phone" ? "numeric" : undefined}
                  pattern={field.name === "phone" ? "[0-9]*" : undefined}
                />
                {errors[field.name] && (
                  <div style={{ color: "red", fontSize: 12 }}>{errors[field.name]}</div>
                )}
              </div>
            ))}

            {/* Space Type and Area Calculation */}
            <div className="col-md-12">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <div className={styles.optionsRow}>
                    <label>
                      <input
                        type="radio"
                        name="spaceType"
                        value="Bare Space"
                        checked={other.spaceType === "Bare Space"}
                        onChange={handleRadio}
                      />{' '}Bare Space
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="spaceType"
                        value="Shell Space"
                        checked={other.spaceType === "Shell Space"}
                        onChange={handleRadio}
                      />{' '}Shell Space
                    </label>
                  </div>
                  {errors.spaceType && (
                    <div style={{ color: "red", fontSize: 12 }}>{errors.spaceType}</div>
                  )}
                </div>
                <div className="col-md-8">
                  <div className="row align-items-center justify-content-between">
                    <div className="col">
                      <input
                        type="number"
                        name="width"
                        className={styles.input}
                        placeholder="W..."
                        value={other.width}
                        onChange={handleChange}
                        min="0"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="number"
                        name="length"
                        className={styles.input}
                        placeholder="L..."
                        value={other.length}
                        onChange={handleChange}
                        min="0"
                      />
                    </div>
                    <div className="col text-end">
                      <span>= {area} Sqm.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Stall No. and Charges */}
            <div className="col-md-12">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <div className={styles.optionsRow}>
                    <label className="text-end d-block w-100 StallText">
                      Stall No.
                    </label>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="row align-items-center justify-content-between">
                    <div className="col">
                      <input
                        type="text"
                        name="stallNo"
                        placeholder="Stall No."
                        className={styles.input}
                        value={other.stallNo}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col">
                      <input
                        type="number"
                        name="charges"
                        placeholder="Charges"
                        className={styles.input}
                        value={other.charges}
                        onChange={handleChange}
                        min="0"
                      />
                    </div>
                    <div className="col text-end">
                      <span>= {area} Sqm.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Grand Total with GST */}
            <div className="col-md-12">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <div className={styles.optionsRow}>
                    <label className="text-end d-block w-100 StallText">
                      <span>GST (18%)</span>
                    </label>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="row align-items-center justify-content-between">
                    <div className="col-md-8">
                      <input
                        type="text"
                        name="gst"
                        value={gst.toFixed(2)}
                        readOnly
                        className={styles.input}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <div className={styles.optionsRow}>
                    <label className="text-end d-block w-100 StallText">
                      <span>Grand Total (incl. GST)</span>
                    </label>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="row align-items-center justify-content-between">
                    <div className="col-md-8">
                      <input
                        type="text"
                        name="grandTotal"
                        value={grandTotal}
                        readOnly
                        className={styles.input}
                      />
                      {errors.grandTotal && (
                        <div style={{ color: "red", fontSize: 12 }}>{errors.grandTotal}</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Payment Mode */}
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-9">
                  <div className={styles.optionsRow}>
                    <span>Payment Mode</span>
                    {["NEFT", "RTGS", "UPI", "Cheque"].map((mode) => (
                      <label key={mode}>
                        <input
                          type="radio"
                          name="paymentMode"
                          value={mode}
                          checked={other.paymentMode === mode}
                          onChange={handleRadio}
                        />{' '}{mode}
                      </label>
                    ))}
                  </div>
                  {errors.paymentMode && (
                    <div style={{ color: "red", fontSize: 12 }}>{errors.paymentMode}</div>
                  )}
                </div>
              </div>
            </div>
            {/* File Upload */}
            <div className="col-md-12">
              <div className="form-group">
                <label>Upload your business logo for FASCIA name</label>
                <div className="custom-upload">
                  <input
                    type="file"
                    name="logo"
                    className={styles.fileInput}
                    onChange={handleChange}
                    accept=".ai,.png,.pdf,.svg,.jpeg,.jpg,.cdr"
                  />
                  <span>(AI. PNG. PDF. SVG. JPEG. CDR)</span>
                  {other.logo && (
                    <span style={{ marginLeft: 10, color: 'green' }}>{other.logo.name}</span>
                  )}
                  {errors.logo && (
                    <div style={{ color: "red", fontSize: 12 }}>{errors.logo}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {submitError && (
            <div style={{ color: "red", marginTop: 16, fontWeight: 500, textAlign: "center" }}>{submitError}</div>
          )}
          {/* Checkboxes */}
          <div className={styles.checkboxRow}>
            <label>
              <input
                type="checkbox"
                name="agreeComms"
                checked={other.agreeComms}
                onChange={handleChange}
              />{' '}
              I agree to receive communications from PharmmaEx and its partners.
            </label>
            <label>
              <input
                type="checkbox"
                name="agreeTerms"
                checked={other.agreeTerms}
                onChange={handleChange}
              />{' '}
              I accept the terms and conditions.
            </label>
            {errors.agreeTerms && (
              <div style={{ color: "red", fontSize: 12 }}>{errors.agreeTerms}</div>
            )}
          </div>
          <div className={styles.submitRow}>
            <button type="submit" className={styles.submitBtn}>
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className={styles.refundSection}>
        <h3 className={styles.refundTitle}>No Refund Policy</h3>
        <ol className={styles.refundList}>
          <li>To book a space, a minimum of 25% advance payment is required</li>
          <li>
            Please note that this advance payment is non-refundable under any
            circumstances
          </li>
          <li>All registration fees are non-refundable.</li>
          <li>
            No refunds will be issued for cancellations, no-shows, or
            withdrawals from the exhibition.
          </li>
          <li>
            Participants are responsible for the full payment of registration
            fees, regardless of attendance or participation.
          </li>
          <li>
            In the event of unforeseen circumstances or the cancellation of the
            exhibition by the organizers, a refund policy may be reviewed and
            communicated at the discretion of the organizing committee.
          </li>
          <li>
            Any requests for exceptions to this policy must be submitted in
            writing to the event organizers for consideration.
          </li>
        </ol>
        <p className={styles.refundNote}>
          By submitting the registration form, participants affirm that they
          have read, understood, and accepted the No Refund Policy outlined
          above
        </p>
      </div>
    </div>
  );
};

export default ExhibitorRegistrationPage;
