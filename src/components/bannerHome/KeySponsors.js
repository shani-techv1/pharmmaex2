import React from "react";
import "./KeySponser.module.css";
const sponsors = [
  [
    {
      label: "Presenting Partner",
      img: "/assests/img/Sponsor Logo/Sponsor Logo/Endorsed By.png",
    },
    {
      label: "Industry Partner",
      img: "/assests/img/Sponsor Logo/Sponsor Logo/Industry-Leader.png",
    },
    {
      label: "Excellence Partner",
      img: "/assests/img/NewPartnerLogo/EXCELLENCEPARTNER.jpg",
    },
    {
      label: "Growth Partner",
      img: "/assests/img/NewPartnerLogo/GROWTHPARTNER.jpg",
    },
    {
      label: "Innovation Partner",
      img: "/assests/img/NewPartnerLogo/INNOVATIONPARTNER.jpg",
    },
  ],
  [
    // {
    //   label: "Supported Partners",
    //   img: "/assests/img/Supported-Partner-Bionexy-Logo.webp",
    // },
    //
    {
      label: "Gold Partner",
      img: "/assests/img/NewPartnerLogo/GOLDPARTNER.jpg",
    },
    {
      label: "Associate Partner",
      img: "/assests/img/Sponsor Logo/Sponsor Logo/Supported-Partner.png",
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
  ],
  [
    {
      label: "Association-04",
      img: "/assests/img/Sponsor Logo/Sponsor Logo/Association-04.png",
    },
    {
      label: "Association-05",
      img: "/assests/img/Sponsor Logo/Sponsor Logo/AssociationLogo.png",
    },
    {
      label: "Association-06",
      img: "/assests/img/NewPartnerLogo/FGSCDA.png",
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

        <div className="organized-by">
          <div className="organized-by-stage">
            <div className="organized-by-card">
              <span className="organized-by-pill">Organized By</span>
              <img
                src="/assests/img/dev-logo-light.svg"
                alt="Devasya Media"
                className="organized-by-logo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeySponsors;
