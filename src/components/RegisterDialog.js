import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const RegisterDialog = () => {
    const [showDialog, setShowDialog] = useState(true);
    const modalRef = useRef(null);
    const router = useRouter();

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
        document.documentElement.style.overflow = showDialog ? 'hidden' : '';
        return () => {
            document.documentElement.style.overflow = '';
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
                pointerEvents: "auto"
            }}
            className={`dialog ${showDialog ? "show" : ""}`}
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

                    .rg-btn {
                        width: 100%;
                        // max-width: 200px;
                        height: 2.5rem;
                        font-size: 1.1rem;
                        border-radius: 200px;
                        background: #00A63E;
                        font-weight: 500;
                        color: white;
                        border: 1px solid #00833D;
                    }

                    .rg-btn:hover {
                        background: #00833D;
                        cursor: pointer;
                    }

                    @media (max-width: 768px) {
                        .modal-box {
                            width: 90%;
                            height: auto;
                            padding: 5% 3%;
                            background-size: cover !important;
                        }

                        .modal-content {
                            padding: 10px;
                        }

                        .info-box {
                            width: 100% !important;
                        }

                        h2 {
                            font-size: 1rem !important;
                        }

                        h5, p {
                            font-size: 1rem !important;
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
                        background: "url('assests/img/registerDialogbg.png') no-repeat center/cover",
                        borderRadius: "30px",
                        padding: "3% 5%",
                        position: "relative",
                        backgroundSize: "cover"
                    }}
                >
                    <button
                        style={{
                            border: "1px solid #444",
                            borderRadius: "50%",
                            width: "35px",
                            height: "35px",
                            position: "absolute",
                            top: "15px",
                            right: "15px",
                            cursor: "pointer",
                            backgroundColor: "white",
                            zIndex: 8000,
                        }}
                        onClick={() => setShowDialog(false)}
                    >
                        ⛌
                    </button>
                    <div className="modal-content">
                        <h2 style={{ fontSize: "1.5rem", fontWeight: 700 }}>
                            Free Visitor Registration
                        </h2>
                        <p
                            style={{
                                fontSize: "1.25rem",
                                margin: "1rem 0",
                            }}
                        >
                            Connect with top pharma minds and explore innovations in formulations, tech, packaging & supply chain — all under one roof.
                        </p>

                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "start",
                                marginBottom: "20px"
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                                <img src="assests/img/greenTick.png" style={{ marginRight: "8px" }} />
                                <h5 style={{ fontSize: "1.15rem" }}>Meet Top Pharma Manufacturers</h5>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                                <img src="assests/img/greenTick.png" style={{ marginRight: "8px" }} />
                                <h5 style={{ fontSize: "1.15rem" }}>Explore Third-Party & PCD Franchise Deals</h5>
                            </div>
                        </div>

                        <div
                            className="info-box"
                            style={{
                                width: "100%",
                                maxWidth: "600px",
                                margin: "0 auto",
                                background: "linear-gradient(97.1deg, rgba(255,255,255,0.4), rgba(255,255,255,0.1))",
                                backdropFilter: "blur(25px)",
                                borderRadius: "40px",
                                padding: "20px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "15px",
                                boxShadow: "0px 10px 14px 0px #0000004D"
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderBottom: "1px solid #00833D",
                                    paddingBottom: "12px",
                                }}
                            >
                                <img src="assests/img/greenCalendar.png" style={{ marginRight: "8px" }} />
                                <h5 style={{ fontSize: "1.25rem", fontWeight: 600 }}>
                                    3-4 July, 2026 | 10am–6pm

                                </h5>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <img src="assests/img/greenLocation.png" style={{ marginRight: "8px" }} />
                                <h5 style={{ fontSize: "1.25rem", fontWeight: 600 }}>
                                    Biswa Bangla Exhibition Centre, New Town, Kolkata, West Bengal
                                </h5>
                            </div>
                            <button
                                className="rg-btn"
                                onClick={() => {
                                    setShowDialog(false);
                                    router.push(`https://www.pharmmaexregistration.in/Pharmaex/visitor.aspx`);
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                }}
                            >
                                Register Now
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RegisterDialog;
