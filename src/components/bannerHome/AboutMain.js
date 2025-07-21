import React from 'react';

const AboutMain = () => {
  return (
    <section className="about-main-section">
      <div className="container innerContainer ">
        <h2 className="about-main-heading text-center">About PharmmaEx</h2>
        <p className="about-main-desc text-justify">
          At PharmmaEx, we are dedicated to organizing premier exhibitions across the nation dedicated to the pharmaceutical, nutraceutical, and healthcare sectors. Our events aim to explore and address the evolving needs of the entire pharmaceutical industry.<br />
          These exhibitions serve as a vital platform for pharmaceutical manufacturers/franchise industry professionals, and entrepreneurs to connect, collaborate, and stay updated with the latest trends and innovations.<br />
          We are committed to meeting the diverse expectations of the pharma industry and continuously strive to create value-driven events that foster growth and development within the sector.
        </p>
        <div className="row about-main-organizer-row align-items-center mt-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h3 className="about-main-org-heading">About The Organizer</h3>
            <p className="about-main-org-desc">
              Mr. Shivam Sharma, Director of PharmmaEx, brings over 15 years of extensive experience in the pharmaceutical exhibition industry. His rich expertise and successful track record in organizing impactful events have significantly contributed to the growth and reputation of PharmmaEx.
            </p>
            <p className="about-main-org-desc">
              The PharmmaEx team comprises industry experts specializing in branding, event management, and ensuring the success of each exhibition. Our organization is fully equipped with the necessary resources and support to deliver seamless, high-quality events that meet the diverse needs of the pharmaceutical and healthcare sectors.
            </p>
          </div>
          <div className="col-lg-6 text-end">
            <img src="/assests/img/abtShivam.svg" alt="Shivam Sharma" className="about-main-org-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMain; 