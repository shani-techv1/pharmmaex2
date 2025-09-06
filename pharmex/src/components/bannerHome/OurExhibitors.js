import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';

const row1 = [
  '/assests/img/Clientslogo/Clientslogo/02.jpg',
  '/assests/img/Clientslogo/Clientslogo/03.jpg',
  '/assests/img/Clientslogo/Clientslogo/04.jpg',
  '/assests/img/Clientslogo/Clientslogo/05.jpg',
  '/assests/img/Clientslogo/Clientslogo/06.jpg',
  '/assests/img/Clientslogo/Clientslogo/07.jpg',
  '/assests/img/Clientslogo/Clientslogo/08.jpg',
  '/assests/img/Clientslogo/Clientslogo/09.jpg',
  '/assests/img/Clientslogo/Clientslogo/10.jpg',
  '/assests/img/Clientslogo/Clientslogo/11.jpg',
  '/assests/img/Clientslogo/Clientslogo/12.jpg',
  '/assests/img/Clientslogo/Clientslogo/13.jpg',
  '/assests/img/Clientslogo/Clientslogo/14.jpg',
  '/assests/img/Clientslogo/Clientslogo/15.jpg',
];
const row2 = [
   '/assests/img/Clientslogo/Clientslogo/16.jpg',
  '/assests/img/Clientslogo/Clientslogo/17.jpg',
  '/assests/img/Clientslogo/Clientslogo/18.jpg',
  '/assests/img/Clientslogo/Clientslogo/19.jpg',
  '/assests/img/Clientslogo/Clientslogo/20.jpg',
  '/assests/img/Clientslogo/Clientslogo/21.jpg',
  '/assests/img/Clientslogo/Clientslogo/22.jpg',
  '/assests/img/Clientslogo/Clientslogo/23.jpg',
  '/assests/img/Clientslogo/Clientslogo/24.jpg',
  '/assests/img/Clientslogo/Clientslogo/25.jpg',
  '/assests/img/Clientslogo/Clientslogo/26.jpg',
  '/assests/img/Clientslogo/Clientslogo/27.jpg',
  '/assests/img/Clientslogo/Clientslogo/28.jpg',
  '/assests/img/Clientslogo/Clientslogo/29.jpg',
  '/assests/img/Clientslogo/Clientslogo/30.jpg',
  '/assests/img/Clientslogo/Clientslogo/31.jpg',
  '/assests/img/Clientslogo/Clientslogo/32.jpg',
  '/assests/img/Clientslogo/Clientslogo/33.jpg',
  '/assests/img/Clientslogo/Clientslogo/34.jpg',
  '/assests/img/Clientslogo/Clientslogo/35.jpg',
  '/assests/img/Clientslogo/Clientslogo/36.jpg',
  '/assests/img/Clientslogo/Clientslogo/37.jpg',
  '/assests/img/Clientslogo/Clientslogo/38.jpg',
  '/assests/img/Clientslogo/Clientslogo/39.jpg',
  '/assests/img/Clientslogo/Clientslogo/40.jpg',
  '/assests/img/Clientslogo/Clientslogo/41.jpg',
];
const row3 = [
  
  '/assests/img/Clientslogo/Clientslogo/42.jpg',
  '/assests/img/Clientslogo/Clientslogo/43.jpg',
  '/assests/img/Clientslogo/Clientslogo/44.jpg',
  '/assests/img/Clientslogo/Clientslogo/45.jpg',
  '/assests/img/Clientslogo/Clientslogo/46.jpg',
  '/assests/img/Clientslogo/Clientslogo/47.jpg',
  '/assests/img/Clientslogo/Clientslogo/48.jpg',
  '/assests/img/Clientslogo/Clientslogo/49.jpg',
  '/assests/img/Clientslogo/Clientslogo/50.jpg',
  '/assests/img/Clientslogo/Clientslogo/51.jpg',
  '/assests/img/Clientslogo/Clientslogo/52.jpg',
  '/assests/img/Clientslogo/Clientslogo/53.jpg',
  '/assests/img/Clientslogo/Clientslogo/54.jpg',
  '/assests/img/Clientslogo/Clientslogo/55.png'
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
             <Image src={img} alt="Exhibitor" className="our-exhibitors-img" width={100} height={100} />
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
               <Image src={img} alt="Exhibitor" className="our-exhibitors-img" width={100} height={100} />
              </div>
            ))}
          </Carousel>
        </div>
        {/* Row 3 */}
        <div className="our-exhibitors-row d-flex justify-content-center flex-wrap">
          {row3.map((img, idx) => (
            <div className="our-exhibitors-card" key={idx}>
              <Image src={img} alt="Exhibitor" className="our-exhibitors-img" width={100} height={100} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurExhibitors; 