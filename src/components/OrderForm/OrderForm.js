import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import QRCode from "react-qr-code";
import { getSubmitErrorMessage, validateField } from "@/src/shared/validation";

const FIELD_RULES = {
  firstName: { label: "First name", required: true, type: "name", minLength: 2, maxLength: 60 },
  email: { label: "Email", required: true, type: "email", maxLength: 100 },
  phone: { label: "Phone number", required: true, type: "phone" },
  company: { label: "Company name", required: true, minLength: 2, maxLength: 100 },
};

// Adapts the shared validation rules to react-hook-form's `validate` option.
const registerRules = (name) => ({
  validate: (value) => validateField(value, FIELD_RULES[name]) || true,
});

export const OrderForm = (props) => {
  const { cart, totalPrices, open, setOpen } = props;
  // console.log((totalPrices * 1.18).toFixed(2), "totalPrices");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // console.log(open, "open");

  const [disableStatus, setDisableStatus] = useState(false);
  const [formData, setFormData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const upiId = "9258002828@pz";
  const upiLink = `upi://pay?pa=${upiId}&pn=pharmmaex&am=${(
    totalPrices * 1.18
  ).toFixed(2)}&cu=INR`;

  const onSubmit = async (data) => {
    setDisableStatus(true);
    setFormData(data);
    setOpen(true);
  };

  const handleContinue = async () => {
    if (!formData || isLoading) return;

    setIsLoading(true);
    setSubmitError("");
    let utm = {};
    try {
      utm = JSON.parse(localStorage.getItem("pharmmaex_utm") || "{}");
    } catch {}
    try {
      const orderRes = await fetch("https://apis.pharmmaex.com/create-order", {
        // const orderRes = await fetch("http://localhost:5001/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: (totalPrices * 1.18).toFixed(2),
          name: formData.firstName,
          email: formData.email,
          phone: formData.phone,
          cart: cart,
          ...utm,
        }),
      });
      const orderData = await orderRes.json().catch(() => null);

      if (!orderRes.ok || orderData?.status != 200) {
        setSubmitError(getSubmitErrorMessage(orderRes.ok ? 400 : orderRes.status));
        setIsLoading(false);
        return;
      }

      await fetch("https://apis.pharmmaex.com/extra-product-list", {
        // await fetch("http://localhost:5001/extra-product-list", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          totalPrices: (totalPrices * 1.18).toFixed(2),
          productTable: cart,
          ...utm,
        }),
      });
      router.push("/thank-you");
    } catch (error) {
      console.error("Error in order process:", error);
      setSubmitError(getSubmitErrorMessage());
      setIsLoading(false); // loading finish
    }
  };

  return (
    <section id="registrationForm" className="registration-section orderForm">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md 12 col-lg-12">
            <form
              className="free-registration-form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div className="form-box">
                <div className="form-item">
                  <label htmlFor="fname">First Name:</label>
                  <input
                    type="text"
                    {...register("firstName", registerRules("firstName"))}
                    placeholder="First Name"
                    aria-invalid={Boolean(errors.firstName)}
                  />
                  {errors.firstName && (
                    <span className="error-message">
                      {errors.firstName.message}
                    </span>
                  )}
                </div>

                <div className="form-item">
                  <label htmlFor="email">Enter Email:</label>
                  <input
                    type="email"
                    {...register("email", registerRules("email"))}
                    placeholder="Enter Email"
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && (
                    <span className="error-message">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div className="form-item">
                  <label htmlFor="phone">Phone Number:</label>
                  <input
                    type="tel"
                    inputMode="numeric"
                    maxLength={14}
                    {...register("phone", registerRules("phone"))}
                    placeholder="Phone Number"
                    aria-invalid={Boolean(errors.phone)}
                  />
                  {errors.phone && (
                    <span className="error-message">
                      {errors.phone.message}
                    </span>
                  )}
                </div>

                <div className="form-item">
                  <label htmlFor="company">Company:</label>
                  <input
                    type="text"
                    {...register("company", registerRules("company"))}
                    placeholder="Company"
                    aria-invalid={Boolean(errors.company)}
                  />
                  {errors.company && (
                    <span className="error-message">
                      {errors.company.message}
                    </span>
                  )}
                </div>
              </div>

              {!open ? (
                <button
                  disabled={disableStatus}
                  type="submit"
                  className="submit-reg-form"
                >
                  Pay Now
                </button>
              ) : (
                <></>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {open && (
        <div className="d-flex flex-column justify-content-center align-items-center mt-4">
          <div className="d-flex justify-content-center mb-4">
            <QRCode value={upiLink} size={150} />
          </div>

          <p className="text-center mb-2">
            UPI ID: <span className="font-medium">{upiId}</span>
          </p>

          <p className="text-center text-muted mb-4 small">
            If you have already made the payment, just click continue below.
          </p>

          {submitError && (
            <p className="text-center text-danger small mb-3" role="alert">
              {submitError}
            </p>
          )}

          <button
            onClick={handleContinue}
            className="submit-reg-form"
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Continue"}
          </button>
        </div>
      )}
    </section>
  );
};
