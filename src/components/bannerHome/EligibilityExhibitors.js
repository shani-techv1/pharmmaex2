import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const eligibilityData = [
  {
    img: '/assests/img/p1.webp',
    title: 'Allopathic',
    desc: 'Allopathic professionals can attend to stay updated on pharmaceutical advancements and treatments.'
  },
  {
    img: '/assests/img/itemimg3.webp',
    title: 'Ayurvedic',
    desc: 'Ayurvedic practitioners can showcase traditional remedies and holistic healing at our exhibitions.'
  },
  {
    img: '/assests/img/itemimg5.webp',
    title: 'Cosmetic',
    desc: 'Cosmetic professionals can explore the latest trends in skincare and beauty.'
  },
  {
    img: '/assests/img/itemimg4.webp',
    title: 'Herbal',
    desc: 'Herbal experts can present natural remedies and products to a wide audience.'
  }
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1200 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 1200, min: 900 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 900, min: 600 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1
  }
};

const EligibilityExhibitors = () => {
  return (
    <section className="eligibility-exhibitors-section">
      <div className="container innerContainer">
        <h2 className="eligibility-exhibitors-heading text-center">Eligibility for Exhibitors</h2>
        <div className="eligibility-exhibitors-carousel mt-4">
          <Carousel
            responsive={responsive}
            infinite={true}
            arrows={false}
            showDots={false}
            autoPlay={false}
            keyBoardControl={true}
            containerClass="eligibility-carousel-container"
            itemClass="eligibility-carousel-item"
          >
            {eligibilityData.map((item, idx) => (
              <div className="eligibility-exhibitors-card w-100 d-flex flex-column h-100" key={idx}>
                <img src={item.img} alt={item.title} className="eligibility-exhibitors-img" />
                <div className="eligibility-exhibitors-card-body flex-fill">
                  <div className="eligibility-exhibitors-title">{item.title}</div>
                  <div className="eligibility-exhibitors-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default EligibilityExhibitors; 