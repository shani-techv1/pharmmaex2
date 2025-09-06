import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import QRCode from "react-qr-code";

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
        }),
      });
      const orderData = await orderRes.json();

      if (orderData?.status == 200) {
        await fetch("https://apis.pharmmaex.com/extra-product-list", {
          // await fetch("http://localhost:5001/extra-product-list", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            totalPrices: (totalPrices * 1.18).toFixed(2),
            productTable: cart,
          }),
        });
        router.push("/thank-you");
      }
    } catch (error) {
      console.error("Error in order process:", error);
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
            >
              <div className="form-box">
                <div className="form-item">
                  <label htmlFor="fname">First Name:</label>
                  <input
                    type="text"
                    {...register("firstName", { required: true })}
                    placeholder="First Name"
                  />
                  {errors.firstName && (
                    <span className="error-message">
                      First name is required
                    </span>
                  )}
                </div>

                <div className="form-item">
                  <label htmlFor="email">Enter Email:</label>
                  <input
                    type="text"
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                    placeholder="Enter Email"
                  />
                  {errors.email && (
                    <span className="error-message">
                      Valid Email is required
                    </span>
                  )}
                </div>

                <div className="form-item">
                  <label htmlFor="phone">Phone Number:</label>
                  <input
                    type="number"
                    {...register("phone", { required: true })}
                    placeholder="Phone Number"
                  />
                  {errors.phone && (
                    <span className="error-message">
                      Phone number is invalid
                    </span>
                  )}
                </div>

                <div className="form-item">
                  <label htmlFor="company">Company:</label>
                  <input
                    type="text"
                    {...register("company", { required: true })}
                    placeholder="Company"
                  />
                  {errors.company && (
                    <span className="error-message">
                      Company name is required
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
