import React, { useEffect, useRef, useState } from "react";

const REGISTRATION_URL =
  "https://www.pharmmaexregistration.in/Pharmaex/visitor.aspx";

const RegisterDialog = () => {
  const [showDialog, setShowDialog] = useState(true);
  const modalRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!localStorage.getItem("registerdialogshown")) {
        setShowDialog(true);
        localStorage.setItem("registerdialogshown", true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = showDialog ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [showDialog]);

  return (
    <div
      style={{
        display: showDialog ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 99999,
        backgroundColor: "rgba(0,0,0,0.3)",
        pointerEvents: "auto",
      }}
      className={`dialog ${showDialog ? "show" : ""}`}
      onClick={() => setShowDialog(false)}
    >
      <style>
        {`
          .dialog {
            opacity: 0;
            transform: scale(0.95);
            transition: opacity 0.5s ease, transform 0.5s ease;
            pointer-events: none;
          }

          .dialog.show {
            opacity: 1;
            transform: scale(1);
            pointer-events: auto;
          }

          .popup-img {
            display: block;
            width: 100%;
            height: auto;
            max-height: 90vh;
            object-fit: contain;
            cursor: pointer;
            border-radius: 16px;
          }

          .popup-img-desktop {
            display: block;
          }
          .popup-img-mobile {
            display: none;
          }

          @media (max-width: 768px) {
            .popup-img-desktop {
              display: none;
            }
            .popup-img-mobile {
              display: block;
            }
          }
        `}
      </style>

      {showDialog && (
        <div
          ref={modalRef}
          className="modal-box"
          style={{
            width: "90%",
            maxWidth: "800px",
            position: "relative",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Invisible close zone — top-right corner of the image */}
          <div
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowDialog(false);
            }}
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "64px",
              height: "64px",
              zIndex: 8000,
              cursor: "pointer",
            }}
            aria-label="Close"
          />

          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setShowDialog(false)}
          >
            <img
              src="/assests/img/popup-image-desktop.jpg"
              alt="Free Visitor Registration"
              className="popup-img popup-img-desktop"
            />
            <img
              src="/assests/img/popup-image-mobile.jpg"
              alt="Free Visitor Registration"
              className="popup-img popup-img-mobile"
            />
          </a>
        </div>
      )}
    </div>
  );
};

export default RegisterDialog;
