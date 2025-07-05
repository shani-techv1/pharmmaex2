import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const RegisterDialog = ({
    
}) => {

    const [showDialog, setShowDialog] = useState(false);
    const modalRef = useRef(null);

    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            if(!localStorage.getItem("registerdialogshown")){
                setShowDialog(true);
                localStorage.setItem("registerdialogshown", true);
            }
        }, 5000);

        return () => clearTimeout(timer); 
    }, []);
    
    useEffect(() => {
        if (showDialog) {
            document.documentElement.style.overflow = 'hidden';
        } else {               
            document.documentElement.style.overflow = '';
        }
        return () => {
            document.documentElement.style.overflow = '';
        };
    }, [showDialog]);

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "fixed",
            top: "18%",
            left: "24%",
            zIndex: "99999",
        }} className={`dialog ${showDialog ? "show" : ""}`}>
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
                        width: 10rem;
                        height: 2.5rem;
                        font-size: 0.65rem;
                        border-radius: 200px;
                        background:  #00A63E;
                        font-size: 1.25rem;
                        font-weight: 500;
                        color: white;
                        border: 1px solid #00833D;
                    }
                    .rg-btn:hover {
                        background: #00833D;
                        border: 1px solid #00833D;
                        cursor: pointer;
                    }
                `}
            </style>
            {showDialog ? (
                <div 
                ref={modalRef}
                style={{
                    width: "50.375rem",
                    height: "30.375rem",
                    background: "url('assests/img/registerDialogbg.png') no-repeat",
                    padding: "2%",
                    paddingTop: "6%",
                    borderRadius: "40px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                <button style={{
                        border: "1px solid #444444",
                        borderRadius: "50%",
                        width: "35px",
                        height: "35px",
                        position: "absolute",
                        top: "3%",
                        right: "3%",
                        cursor: "pointer"
                }} onClick={() => setShowDialog(false)}>⛌</button>
                    <h2 style={{
                        fontSize: "2.25rem",
                        fontWeight: "700",

                    }}>Free Visitor Registration</h2>
                    <p style={{
                        fontSize: "1.25rem",
                        margin: "1rem 3rem",
                        textAlign: "center",
                    }}>Connect with top pharma minds and explore innovations in formulations, tech, packaging & supply chain- all under one roof.</p>
                    <div style={{
                        display: "flex",
                        width: "100%",
                        margin: "0rem 1rem",
                        justifyContent: "space-around"
                    }}>
                        <div style={{
                            display: "flex",
                            alignItems: "center"
                        }}>
                            <span style={{
                                marginRight: "8px",
                            }}><img src="assests/img/greenTick.png" /></span>
                            <h5 style={{
                                fontSize: "1.15rem"
                            }}>Meet Top Pharma Manufacturers</h5>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center"
                        }}>
                            <span style={{
                                marginRight: "8px"
                            }}><img src="assests/img/greenTick.png" /></span>
                            <h5 style={{
                                fontSize: "1.15rem"
                            }}>Explore Third-Party & PCD Franchise Deals</h5>
                        </div>
                    </div>
                    <div style={{
                        width: "600px",
                        boxShadow: "0px 10px 14px 0px #0000004D",
                        backdropFilter: "blur(25px)",
                        background: "linear-gradient(97.1deg, rgba(255, 255, 255, 0.4) -3.96%, rgba(255, 255, 255, 0.1) 116.12%)",
                        height: "195px",
                        borderRadius: "40px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        alignItems: "center",
                        padding: "20px",
                        marginTop: "21px"
                    }}>
                        <div style={{
                            display: "flex",
                            paddingBottom: "12px",
                            width: "80%",
                            justifyContent: "center",
                            borderBottom: "1px solid #00833D"
                        }}>
                            <span style={{
                                marginRight: "8px"
                            }}><img src="assests/img/greenCalendar.png" /></span>
                            <h5 style={{
                                fontSize: "1.35rem",
                                fontWeight: "600"
                            }}>03-04 October, 2025 | 10am-6pm</h5>
                        </div>
                        <div style={{
                            display: "flex"
                        }}>
                            <span style={{
                                marginRight: "8px"
                            }}><img src="assests/img/greenLocation.png" /></span>
                            <h5 style={{
                                fontSize: "1.35rem",
                                fontWeight: "600"
                            }}>Bombay Exhibition Centre NESCO, Mumbai</h5>
                        </div>
                        <button className="rg-btn" style={{

                        }} onClick={() => {
                            setShowDialog(false)
                            router.push(`/visitor-registration`);
                            window.scrollTo({ top: 0, behavior: 'smooth' });                            
                        }}>
                            Register Now
                        </button>
                    </div>
                </div>
            ) : 
                <></>
            }

        </div>
    )
}

export default RegisterDialog;