import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const row1 = [
  "/assests/img/Clientslogo/Clientslogo/02.jpg",
  "/assests/img/Clientslogo/Clientslogo/03.jpg",
  "/assests/img/Clientslogo/Clientslogo/04.jpg",
  "/assests/img/Clientslogo/Clientslogo/05.jpg",
  "/assests/img/Clientslogo/Clientslogo/06.jpg",
  "/assests/img/Clientslogo/Clientslogo/07.jpg",
  "/assests/img/Clientslogo/Clientslogo/08.jpg",
  "/assests/img/Clientslogo/Clientslogo/09.jpg",
  "/assests/img/Clientslogo/Clientslogo/10.jpg",
  "/assests/img/Clientslogo/Clientslogo/11.jpg",
  "/assests/img/Clientslogo/Clientslogo/12.jpg",
  "/assests/img/Clientslogo/Clientslogo/13.jpg",
  "/assests/img/Clientslogo/Clientslogo/14.jpg",
  "/assests/img/Clientslogo/Clientslogo/15.jpg",
];
const row2 = [
  "/assests/img/Clientslogo/Clientslogo/16.jpg",
  "/assests/img/Clientslogo/Clientslogo/17.jpg",
  "/assests/img/Clientslogo/Clientslogo/18.jpg",
  "/assests/img/Clientslogo/Clientslogo/19.jpg",
  "/assests/img/Clientslogo/Clientslogo/20.jpg",
  "/assests/img/Clientslogo/Clientslogo/21.jpg",
  "/assests/img/Clientslogo/Clientslogo/22.jpg",
  "/assests/img/Clientslogo/Clientslogo/23.jpg",
  "/assests/img/Clientslogo/Clientslogo/24.jpg",
  "/assests/img/Clientslogo/Clientslogo/25.jpg",
  "/assests/img/Clientslogo/Clientslogo/26.jpg",
  "/assests/img/Clientslogo/Clientslogo/27.jpg",
  "/assests/img/Clientslogo/Clientslogo/28.jpg",
  "/assests/img/Clientslogo/Clientslogo/29.jpg",
  "/assests/img/Clientslogo/Clientslogo/30.jpg",
  "/assests/img/Clientslogo/Clientslogo/31.jpg",
  "/assests/img/Clientslogo/Clientslogo/32.jpg",
  "/assests/img/Clientslogo/Clientslogo/33.jpg",
  "/assests/img/Clientslogo/Clientslogo/34.jpg",
  "/assests/img/Clientslogo/Clientslogo/35.jpg",
  "/assests/img/Clientslogo/Clientslogo/36.jpg",
  "/assests/img/Clientslogo/Clientslogo/37.jpg",
  "/assests/img/Clientslogo/Clientslogo/38.jpg",
  "/assests/img/Clientslogo/Clientslogo/39.jpg",
  "/assests/img/Clientslogo/Clientslogo/40.jpg",
  "/assests/img/Clientslogo/Clientslogo/41.jpg",

  "/assests/img/newLogo/56.jpg",
  "/assests/img/newLogo/57.jpg",
  "/assests/img/newLogo/Artboard 6.jpg",
  "/assests/img/newLogo/Artboard 8.jpg",
  "/assests/img/newLogo/Artboard 9.jpg",
  "/assests/img/newLogo/Artboard 10.jpg",
  "/assests/img/newLogo/Artboard 11.jpg",
  "/assests/img/newLogo/Artboard 13.jpg",
  "/assests/img/newLogo/Artboard 14.jpg",
  "/assests/img/newLogo/Artboard 15.jpg",
  "/assests/img/newLogo/Artboard 17.jpg",
  "/assests/img/newLogo/Artboard 18.jpg",
  "/assests/img/newLogo/Artboard 19.jpg",
  "/assests/img/newLogo/Artboard 20.jpg",
  "/assests/img/newLogo/Artboard 21.jpg",
  "/assests/img/newLogo/Artboard 22.jpg",
  "/assests/img/newLogo/Artboard 23.jpg",
  "/assests/img/newLogo/Artboard 24.jpg",
  "/assests/img/newLogo/Artboard 26.jpg",
  "/assests/img/newLogo/Artboard 27.jpg",
  "/assests/img/newLogo/Artboard 28.jpg",
  "/assests/img/newLogo/Artboard 29.jpg",
  "/assests/img/newLogo/Artboard 30.jpg",
  "/assests/img/newLogo/Artboard 33.jpg",
  "/assests/img/newLogo/Artboard 34.jpg",
  "/assests/img/newLogo/Artboard 36.jpg",
  "/assests/img/newLogo/Artboard 38.jpg",
  "/assests/img/newLogo/Artboard 39.jpg",
  "/assests/img/newLogo/Artboard 40.jpg",
  "/assests/img/newLogo/Artboard 41.jpg",
  "/assests/img/newLogo/Artboard 42.jpg",
  "/assests/img/newLogo/Artboard 43.jpg",
  "/assests/img/newLogo/Artboard 44.jpg",
  "/assests/img/newLogo/Artboard 45.jpg",
  "/assests/img/newLogo/Artboard 46.jpg",
  "/assests/img/newLogo/Artboard 47.jpg",
  "/assests/img/newLogo/Artboard 48.jpg",
  "/assests/img/newLogo/Artboard 49.jpg",
  "/assests/img/newLogo/Artboard 51.jpg",
  "/assests/img/newLogo/Artboard 53.jpg",
  "/assests/img/newLogo/Artboard 54.jpg",
  "/assests/img/newLogo/Artboard 55.jpg",
  "/assests/img/newLogo/Artboard 57.jpg",
  "/assests/img/newLogo/Artboard 58.jpg",
  "/assests/img/newLogo/Artboard 59.jpg",
  "/assests/img/newLogo/Artboard 60.jpg",
  "/assests/img/newLogo/Artboard 62.jpg",
  "/assests/img/newLogo/Artboard 63.jpg",
  "/assests/img/newLogo/Artboard 64.jpg",
  "/assests/img/newLogo/Artboard 65.jpg",
  "/assests/img/newLogo/Artboard 66.jpg",
  "/assests/img/newLogo/Artboard 67.jpg",
  "/assests/img/newLogo/Artboard 68.jpg",
  "/assests/img/newLogo/Artboard 69.jpg",
  "/assests/img/newLogo/Artboard 70.jpg",
  "/assests/img/newLogo/Artboard 71.jpg",
  "/assests/img/newLogo/Artboard 72.jpg",
  "/assests/img/newLogo/Artboard 73.jpg",
  "/assests/img/newLogo/Artboard 74.jpg",
  "/assests/img/newLogo/Artboard 75.jpg",
  "/assests/img/newLogo/Artboard 76.jpg",
  "/assests/img/newLogo/Artboard 77.jpg",
  "/assests/img/newLogo/Artboard 78.jpg",
  "/assests/img/newLogo/Artboard 79.jpg",
  "/assests/img/newLogo/Artboard 80.jpg",
  "/assests/img/newLogo/Artboard 81.jpg",
  "/assests/img/newLogo/Artboard 82.jpg",
  "/assests/img/newLogo/Artboard 83.jpg",
  "/assests/img/newLogo/Artboard 84.jpg",
  "/assests/img/newLogo/Artboard 85.jpg",
  "/assests/img/newLogo/Artboard 86.jpg",
  "/assests/img/newLogo/Artboard 87.jpg",
  "/assests/img/newLogo/Artboard 88.jpg",
  "/assests/img/newLogo/Artboard 89.jpg",
  "/assests/img/newLogo/Artboard 90.jpg",
  "/assests/img/newLogo/Artboard 91.jpg",
  "/assests/img/newLogo/Artboard 92.jpg",
  "/assests/img/newLogo/Artboard 93.jpg",
  "/assests/img/newLogo/Artboard 94.jpg",
  "/assests/img/newLogo/Artboard 95.jpg",
  "/assests/img/newLogo/Artboard 96.jpg",
  "/assests/img/newLogo/Artboard 97.jpg",
  "/assests/img/newLogo/Artboard 98.jpg",
  "/assests/img/newLogo/aelicure.jpeg",
  "/assests/img/newLogo/TopRanker.png",
];
const row3 = [
  "/assests/img/Clientslogo/Clientslogo/42.jpg",
  "/assests/img/Clientslogo/Clientslogo/43.jpg",
  "/assests/img/Clientslogo/Clientslogo/44.jpg",
  "/assests/img/Clientslogo/Clientslogo/45.jpg",
  "/assests/img/Clientslogo/Clientslogo/46.jpg",
  "/assests/img/Clientslogo/Clientslogo/47.jpg",
  "/assests/img/Clientslogo/Clientslogo/48.jpg",
  "/assests/img/Clientslogo/Clientslogo/49.jpg",
  "/assests/img/Clientslogo/Clientslogo/50.jpg",
  "/assests/img/Clientslogo/Clientslogo/51.jpg",
  "/assests/img/Clientslogo/Clientslogo/52.jpg",
  "/assests/img/Clientslogo/Clientslogo/53.jpg",
  "/assests/img/Clientslogo/Clientslogo/54.jpg",
  "/assests/img/Clientslogo/Clientslogo/55.png",
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1200 },
    items: 9,
  },
  desktop: {
    breakpoint: { max: 1200, min: 900 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 900, min: 600 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2,
  },
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
              <Image
                src={img}
                alt="Exhibitor"
                className="our-exhibitors-img"
                width={100}
                height={100}
              />
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
            autoPlaySpeed={1} // 👈 set lower value
            customTransition="transform 2000ms linear" // 👈 smooth long transition
            transitionDuration={2000} // 👈 very long duration
            keyBoardControl={true}
            containerClass="our-exhibitors-carousel-container"
            itemClass="our-exhibitors-carousel-item"
          >
            {row2.map((img, idx) => (
              <div className="our-exhibitors-card" key={idx}>
                <Image
                  src={img}
                  alt="Exhibitor"
                  className="our-exhibitors-img"
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </Carousel>
        </div>
        {/* Row 3 */}
        <div className="our-exhibitors-row d-flex justify-content-center flex-wrap">
          {row3.map((img, idx) => (
            <div className="our-exhibitors-card" key={idx}>
              <Image
                src={img}
                alt="Exhibitor"
                className="our-exhibitors-img"
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurExhibitors;
