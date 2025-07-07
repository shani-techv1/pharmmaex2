import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const row1 = [
  'ex1.svg', 'ex2.svg', 'ex3.svg', 'ex4.svg', 'ex1.svg', 'ex2.svg', 'ex3.svg'
];
const row2 = [
 'ex1.svg', 'ex2.svg', 'ex3.svg', 'ex4.svg', 'ex1.svg', 'ex2.svg', 'ex3.svg','ex1.svg', 'ex2.svg', 'ex3.svg', 'ex4.svg', 'ex1.svg', 'ex2.svg', 'ex3.svg'
];
const row3 = [
 'ex1.svg', 'ex2.svg', 'ex3.svg', 'ex4.svg', 'ex1.svg', 'ex2.svg', 'ex3.svg'
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1200 },
    items: 9
  },
  desktop: {
    breakpoint: { max: 1200, min: 900 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 900, min: 600 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2
  }
};

const OurExhibitors = () => {
  return (
    <section className="our-exhibitors-section">
      <div className="  container-fluid">
        <h2 className="our-exhibitors-heading text-center">Our Exhibitors</h2>
        {/* Row 1 */}
        <div className="our-exhibitors-row d-flex justify-content-center flex-wrap mb-3">
          {row1.map((img, idx) => (
            <div className="our-exhibitors-card" key={idx}>
              <img src={`/assests/img/${img}`} alt="Exhibitor" className="our-exhibitors-img" />
            </div>
          ))}
        </div>
        {/* Row 2 - Carousel */}
        <div className="our-exhibitors-row our-exhibitors-carousel mb-3 ">
          <Carousel
            responsive={responsive}
            infinite={true}
            arrows={false}
            showDots={false}
            autoPlay={true}
            keyBoardControl={true}
            containerClass="our-exhibitors-carousel-container"
            itemClass="our-exhibitors-carousel-item"
          >
            {row2.map((img, idx) => (
              <div className="our-exhibitors-card" key={idx}>
                <img src={`/assests/img/${img}`} alt="Exhibitor" className="our-exhibitors-img" />
              </div>
            ))}
          </Carousel>
        </div>
        {/* Row 3 */}
        <div className="our-exhibitors-row d-flex justify-content-center flex-wrap">
          {row3.map((img, idx) => (
            <div className="our-exhibitors-card" key={idx}>
              <img src={`/assests/img/${img}`} alt="Exhibitor" className="our-exhibitors-img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurExhibitors; 