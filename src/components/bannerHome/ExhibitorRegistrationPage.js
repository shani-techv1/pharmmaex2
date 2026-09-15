import React, { useRef, useState } from "react";
import styles from "./ExhibitorRegistrationPage.module.css";
import Image from "next/image";
import aboutBanner from "../../../public/assests/img/aboutBanner.svg";
import { useRouter } from "next/router";
import {
  focusFirstError,
  getSubmitErrorMessage,
  validateFile,
  validateForm,
} from "@/src/shared/validation";

// Config array for form fields
const formFields = [
  { name: "contactPerson", label: "Contact Person", type: "text", col: 6, rules: { required: true, type: "name", minLength: 2, maxLength: 60 } },
  { name: "designation", label: "Designation", type: "text", col: 6, rules: { required: true, minLength: 2, maxLength: 60 } },
  { name: "company", label: "Company", type: "text", col: 6, rules: { label: "Company name", required: true, minLength: 2, maxLength: 100 } },
  { name: "phone", label: "Phone Number", type: "text", col: 6, inputMode: "numeric", maxLength: 10, rules: { required: true, type: "phone" } },
  { name: "email", label: "Email ID", type: "email", col: 6, rules: { required: true, type: "email", maxLength: 100 } },
  { name: "address", label: "Company Address", type: "text", col: 6, rules: { required: true, minLength: 5, maxLength: 200 } },
  { name: "city", label: "City", type: "text", col: 6, rules: { required: true, minLength: 2, maxLength: 50 } },
  { name: "state", label: "State", type: "text", col: 6, rules: { required: true, minLength: 2, maxLength: 50 } },
  { name: "pincode", label: "Pincode", type: "text", col: 6, inputMode: "numeric", maxLength: 6, rules: { required: true, type: "pincode" } },
  { name: "website", label: "Enter website URL", type: "url", col: 6, rules: { label: "Website URL", type: "url" } },
  { name: "gst", label: "GST No.", type: "text", col: 6, maxLength: 15, uppercase: true, rules: { label: "GST number", required: true, type: "gst" } },
  { name: "tax", label: "Additional Tax (if applicable)", type: "text", col: 6, rules: { label: "Additional tax", maxLength: 50 } },
  { name: "stallFascia", label: "Stall Fascia Name (In Capital Letters)", type: "text", col: 12, uppercase: true, rules: { label: "Stall fascia name", required: true, minLength: 2, maxLength: 60 } },
];

const FIELD_SCHEMA = {
  ...formFields.reduce((acc, field) => {
    acc[field.name] = { label: field.label, ...field.rules };
    return acc;
  }, {}),
  width: { label: "Width", required: true, type: "number", min: 1 },
  length: { label: "Length", required: true, type: "number", min: 1 },
  stallNo: { label: "Stall number", maxLength: 20 },
  charges: { label: "Charges", required: true, type: "number", min: 1 },
};

const SPACE_TYPES = ["Bare Space", "Shell Space"];
const PAYMENT_MODES = ["NEFT", "RTGS", "UPI", "Cheque"];

const LOGO_RULES = {
  label: "your business logo for the stall fascia",
  required: true,
  extensions: ["ai", "png", "pdf", "svg", "jpeg", "jpg", "cdr"],
  maxSizeMB: 5,
};

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

const FieldError = ({ name, message }) =>
  message ? (
    <div id={`${name}-error`} className={styles.errorText}>
      {message}
    </div>
  ) : null;

const ExhibitorRegistrationPage = () => {
  const [form, setForm] = useState(initialState);
  const [other, setOther] = useState(initialOtherState);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);
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

  const hasFieldErrors = Object.values(errors).some(Boolean);

  const clearError = (name) => {
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  };

  const errorProps = (name) => ({
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  const inputClass = (name, base = styles.input) => (errors[name] ? `${base} ${styles.inputError}` : base);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, checked, files } = e.target;
    if (name in form) {
      const field = formFields.find((f) => f.name === name);
      setForm((prev) => ({ ...prev, [name]: field?.uppercase ? value.toUpperCase() : value }));
    } else if (name === "agreeComms" || name === "agreeTerms") {
      setOther((prev) => ({ ...prev, [name]: checked }));
    } else if (name === "logo") {
      const file = files?.[0] || null;
      setOther((prev) => ({ ...prev, logo: file }));
      // Check type/size as soon as a file is chosen, instead of waiting for submit
      setErrors((prev) => ({ ...prev, logo: validateFile(file, LOGO_RULES) || undefined }));
      return;
    } else {
      setOther((prev) => ({ ...prev, [name]: value }));
    }
    clearError(name);
  };

  // Handle radio button changes
  const handleRadio = (e) => {
    const { name, value } = e.target;
    setOther((prev) => ({ ...prev, [name]: value }));
    clearError(name);
  };

  // Form validation
  const validate = () => {
    const newErrors = validateForm({ ...form, ...other }, FIELD_SCHEMA);
    if (!SPACE_TYPES.includes(other.spaceType)) {
      newErrors.spaceType = "Please select either Bare Space or Shell Space.";
    }
    if (!PAYMENT_MODES.includes(other.paymentMode)) {
      newErrors.paymentMode = "Please select a payment mode.";
    }
    const logoError = validateFile(other.logo, LOGO_RULES);
    if (logoError) newErrors.logo = logoError;
    if (!other.agreeTerms) newErrors.agreeTerms = "Please accept the terms and conditions to continue.";
    return newErrors;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const validationErrors = validate();
    setErrors(validationErrors);
    setSubmitError("");

    if (Object.keys(validationErrors).length > 0) {
      focusFirstError(formRef.current, validationErrors);
      return;
    }

    const values = Object.fromEntries(Object.entries(form).map(([key, value]) => [key, value.trim()]));
    const formData = new FormData();
    const payload = {
      firstName: values.contactPerson,
      email: values.email,
      phone: values.phone,
      jobTitle: values.designation,
      company: values.company,
      companyAdd: values.address,
      city: values.city,
      state: values.state,
      pin: values.pincode,
      website: values.website,
      gst: values.gst,
      tax: values.tax,
      Fascia: values.stallFascia,
      selectedPaymentMode: other.paymentMode,
      space: other.spaceType,
      Sqrm: area,
      Charges: other.charges,
      totalCharge: grandTotal,
      StallNo: other.stallNo.trim(),
    };

    try {
      const utm = JSON.parse(localStorage.getItem("pharmmaex_utm") || "{}");
      Object.assign(payload, utm);
    } catch {}

    formData.append("jsonData", JSON.stringify(payload));
    formData.append("file", other.logo);

    setIsSubmitting(true);
    try {
      const res = await fetch("https://apis.pharmmaex.com/send-exbitor-mail", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setForm(initialState);
        setOther(initialOtherState);
        router.push("/thank-you");
        return;
      }
      const result = await res.json().catch(() => null);
      if (result?.error) console.error("Submission error:", result.error);
      setSubmitError(getSubmitErrorMessage(res.status));
    } catch (err) {
      console.error("Error submitting form:", err);
      setSubmitError(getSubmitErrorMessage());
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className={styles.pageWrapper}>
      <h1 className={styles.pageTitle}>Exhibitor Space Registration Form</h1>
      <div className={styles.eventDetails}>
        <div>
          Exhibition Date & Time:{" "}
          <span className={styles.eventHighlight}>
            January 8th–9th, 2027, 10.00 AM to 6.00 PM
          </span>
        </div>
        <div>
          Exhibition Venue:{" "}
          <span className={styles.eventHighlight}>
            Vigyan Bhawan, Science City, Sola, Ahmedabad, Gujarat
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
        <form ref={formRef} className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className="row g-3">
            {/* Render fields from config */}
            {formFields.map((field) => (
              <div className={`col-md-${field.col}`} key={field.name}>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.label}
                  aria-label={field.label}
                  className={inputClass(field.name)}
                  value={form[field.name]}
                  onChange={handleChange}
                  maxLength={field.maxLength}
                  inputMode={field.inputMode}
                  {...errorProps(field.name)}
                />
                <FieldError name={field.name} message={errors[field.name]} />
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
                  <FieldError name="spaceType" message={errors.spaceType} />
                </div>
                <div className="col-md-8">
                  <div className="row align-items-center justify-content-between">
                    <div className="col">
                      <input
                        type="number"
                        name="width"
                        className={inputClass("width")}
                        placeholder="W..."
                        aria-label="Width (m)"
                        value={other.width}
                        onChange={handleChange}
                        min="1"
                        {...errorProps("width")}
                      />
                      <FieldError name="width" message={errors.width} />
                    </div>
                    <div className="col">
                      <input
                        type="number"
                        name="length"
                        className={inputClass("length")}
                        placeholder="L..."
                        aria-label="Length (m)"
                        value={other.length}
                        onChange={handleChange}
                        min="1"
                        {...errorProps("length")}
                      />
                      <FieldError name="length" message={errors.length} />
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
                        aria-label="Stall No."
                        className={inputClass("stallNo")}
                        value={other.stallNo}
                        onChange={handleChange}
                        maxLength={20}
                        {...errorProps("stallNo")}
                      />
                      <FieldError name="stallNo" message={errors.stallNo} />
                    </div>
                    <div className="col">
                      <input
                        type="number"
                        name="charges"
                        placeholder="Charges"
                        aria-label="Charges"
                        className={inputClass("charges")}
                        value={other.charges}
                        onChange={handleChange}
                        min="1"
                        {...errorProps("charges")}
                      />
                      <FieldError name="charges" message={errors.charges} />
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
                        name="gstAmount"
                        value={gst.toFixed(2)}
                        readOnly
                        aria-label="GST (18%)"
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
                        aria-label="Grand Total (incl. GST)"
                        className={styles.input}
                      />
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
                    {PAYMENT_MODES.map((mode) => (
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
                  <FieldError name="paymentMode" message={errors.paymentMode} />
                </div>
              </div>
            </div>
            {/* File Upload */}
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="exhibitor-logo">Upload your business logo for FASCIA name</label>
                <div className="custom-upload">
                  <input
                    id="exhibitor-logo"
                    type="file"
                    name="logo"
                    className={inputClass("logo", styles.fileInput)}
                    onChange={handleChange}
                    accept=".ai,.png,.pdf,.svg,.jpeg,.jpg,.cdr"
                    {...errorProps("logo")}
                  />
                  <span>(AI. PNG. PDF. SVG. JPEG. CDR — max {LOGO_RULES.maxSizeMB} MB)</span>
                  {other.logo && !errors.logo && (
                    <span style={{ marginLeft: 10, color: 'green' }}>{other.logo.name}</span>
                  )}
                  <FieldError name="logo" message={errors.logo} />
                </div>
              </div>
            </div>
          </div>
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
                {...errorProps("agreeTerms")}
              />{' '}
              I accept the terms and conditions.
            </label>
            <FieldError name="agreeTerms" message={errors.agreeTerms} />
          </div>
          {(submitError || hasFieldErrors) && (
            <div className={styles.formAlert} role="alert">
              {submitError || "Please correct the highlighted fields above."}
            </div>
          )}
          <div className={styles.submitRow}>
            <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
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
