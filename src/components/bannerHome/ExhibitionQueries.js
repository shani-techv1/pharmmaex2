import React from "react";

const ExhibitionQueries = () => {
  return (
    <div
      style={{
        margin: "2.5rem",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        Exhibition Queries
      </h2>
      <div
        className="flex-wrap"
        style={{
          width: "80%",
          margin: "0 auto",
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
        }}
      >
        {[1, 2].map((_, idx) => (
          <div
            className="flex-wrap"
            key={idx}
            style={{
              flex: 1,
              display: "flex",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              minHeight: 220,
              border: "1.5px solid #00833D",
            }}
          >
            {/* Image Column */}
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1.5rem",
              }}
            >
              <img
                src="/assests/img/exhPerson.png"
                alt="Shivam Sharma"
                style={{ width: "100%" }}
              />
            </div>
            {/* Data Column */}
            <div
              style={{
                flex: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "1.2rem",
                padding: "1.5rem",
              }}
            >
              <div style={{ marginBottom: 0 }}>
                <p
                  style={{
                    margin: 0,
                    color: "#444444",
                    fontWeight: 600,
                    fontSize: "1.1rem",
                  }}
                >
                  Shivam Sharma
                </p>
                <p style={{ margin: 0, color: "#444444", fontSize: "1rem" }}>
                  Managing Director-PharmmaEx
                </p>
              </div>
              <div style={{ marginTop: 0 }}>
                <p style={{ margin: 0, color: "#444444", fontSize: "1rem" }}>
                  M. +91-9258002828, +91-701 733 6797
                </p>
                <p style={{ margin: 0, color: "#444444", fontSize: "1rem" }}>
                  E. shivam.sharma@pharmmaex.com
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExhibitionQueries;
