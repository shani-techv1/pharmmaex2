import React from "react";
import styles from "./ExhibitorRegistrationPage.module.css";
import Image from "next/image";
import aboutBanner from "../../../public/assests/img/aboutBanner.svg";

const ExhibitorRegistrationPage = () => {
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
        <form className={styles.form}>
          <div className="row g-3">
            <div className="col-md-6">
              <input
                type="text"
                placeholder="Contact Person"
                className={styles.input}
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                placeholder="Designation"
                className={styles.input}
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                placeholder="Company"
                className={styles.input}
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                placeholder="Phone Number"
                className={styles.input}
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                placeholder="Email ID"
                className={styles.input}
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                placeholder="Company Address"
                className={styles.input}
              />
            </div>
            <div className="col-md-6">
              <input type="text" placeholder="City" className={styles.input} />
            </div>
            <div className="col-md-6">
              <input type="text" placeholder="State" className={styles.input} />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                placeholder="Pincode"
                className={styles.input}
              />
            </div>
            <div className="col-md-6">
              <input
                type="url"
                placeholder="Enter website URL"
                className={styles.input}
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                placeholder="GST No."
                className={styles.input}
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                placeholder="Additional Tax (if applicable)"
                className={styles.input}
              />
            </div>

            <div className="col-md-12">
              <input
                type="text"
                placeholder="Stall Fascia Name (In Capital Letters)"
                className={styles.input}
              />
            </div>
            <div className="col-md-12">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <div className={styles.optionsRow}>
                    <label>
                      <input type="radio" name="spaceType" /> Bare Space
                    </label>
                    <label>
                      <input type="radio" name="spaceType" /> Shell Space
                    </label>
                  </div>
                </div>
                <div className="col-md-8">
                  <div class="row align-items-center justify-content-between">
                    <div class="col">
                      <input
                        type="text"
                        className={styles.input}
                        placeholder="W..."
                      />
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        className={styles.input}
                        placeholder="L..."
                      />
                    </div>
                    <div class="col text-end">
                      <span>= 0 Sqm.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <div className={styles.optionsRow}>
                    
                    <label className="text-end d-block w-100">
                     Stall No.
                    </label>
                  </div>
                </div>
                <div className="col-md-8">
                  <div class="row align-items-center justify-content-between">
                    <div class="col">
                      <input
              type="text"
              placeholder="Stall No."
               className={styles.input}
            />
                    </div>
                    <div class="col">
                      <input
              type="text"
              placeholder="Charges"
               className={styles.input}
            />
                    </div>
                    <div class="col text-end">
                      <span>= 0 Sqm.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <div className="col-md-12">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <div className={styles.optionsRow}>
                    
                    <label className="text-end d-block w-100">
                    <span>Grand Total</span>
                    </label>
                  </div>
                </div>
                <div className="col-md-8">
                  <div class="row align-items-center justify-content-between">
                    <div class="col-md-8">
                <input
              type="text"
              value="0.00"
              readOnly
        className={styles.input}
            />
                    </div>
                    
                    
                  </div>
                </div>
              </div>
            </div>
             <div className="col-md-12">
            <div className="row">
                <div className="col-md-2">

                </div>
                <div className="col-md-9">
                    <div className={styles.optionsRow}>
                                <span>Payment Mode</span>
                                <label>
                                  <input type="radio" name="paymentMode" /> NEFT
                                </label>
                                <label>
                                  <input type="radio" name="paymentMode" /> RTGS
                                </label>
                                <label>
                                  <input type="radio" name="paymentMode" /> UPI
                                </label>
                                <label>
                                  <input type="radio" name="paymentMode" /> Cheque
                                </label>
                              </div>
                </div>
            </div>
            </div>
            <div className="col-md-12">
 <div class="form-group">
      <label>Upload your business logo for FASCIA name</label>
      <div class="custom-upload">
        <input type="file" className={styles.fileInput} />
        <span>(AI. PNG. PDF. SVG. JPEG. CDR)</span>
      </div>
    </div>
            </div>
          </div>

         
           
          
          
          <div className={styles.checkboxRow}>
            <label>
              <input type="checkbox" /> I agree to receive communications from
              PharmmaEx and its partners.
            </label>
            <label>
              <input type="checkbox" /> I accept the terms and conditions.
            </label>
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
