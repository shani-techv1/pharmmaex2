import React from "react";
import "./KeySponser.module.css";
const sponsors = [
  [
    {
      label: "Endorsed By",
      img: "/assests/img/Sponsor Logo/Sponsor Logo/Endorsed By.png",
    },
    {
      label: "Industry Leaders",
      img: "/assests/img/Industry Leader-Bioaltus-Logo.png",
    },
    {
      label: "Top Rankers",
      img: "/assests/img/Sponsor Logo/Sponsor Logo/Industry-Leader.png",
    },
    {
      label: "Pharma Player",
      img: "/assests/img/Sponsor Logo/Sponsor Logo/Pharma-Champion.png",
    },
    {
      label: "Pharma Champion",
      img: "/assests/img/Sponsor Logo/Sponsor Logo/Supported-Partner.png",
    },
  ],
  [
    {
      label: "Supported Partners",
      img: "/assests/img/Supported-Partner-Bionexy-Logo.webp",
    },
    //
    {
      label: "Affilated Partner",
      img: "/assests/img/Sponsor Logo/Sponsor Logo/Affilate-Partner.jpg",
    },
    {
      label: "Association-01",
      img: "/assests/img/Sponsor Logo/Sponsor Logo/Association-01.jpg",
    },
    {
      label: "Association-02",
      img: "/assests/img/aippe_image.png",
    },
    {
      label: "Association-03",
      img: "/assests/img/Sponsor Logo/Sponsor Logo/Association-03.jpg",
    },
    {
      label: "Association-04",
      img: "/assests/img/Sponsor Logo/Sponsor Logo/Association-04.png",
    },
  ],
];

const KeySponsors = () => {
  return (
    <section className="key-sponsors-section">
      <div className="container key-sponsors-container">
        <h2 className="key-sponsors-heading text-center">Our Key Sponsors</h2>
        <div className="key-sponsors-rows">
          {sponsors.map((row, rowIdx) => (
            <div
              className="key-sponsors-row d-flex justify-content-center mb-4"
              key={rowIdx}
            >
              {row.map((item, idx) => (
                <div
                  className="key-sponsors-card d-flex flex-column align-items-center justify-content-center "
                  key={idx}
                >
                  <div className="key-sponsors-label">{item.label}</div>
                  <img
                    src={item.img}
                    alt={item.label}
                    className="key-sponsors-img"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeySponsors;
