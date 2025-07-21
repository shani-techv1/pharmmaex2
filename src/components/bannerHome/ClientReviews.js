import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { clientsReviewData } from '@/src/shared/clientReviewData';

const stars = (count) =>
  Array.from({ length: count }, (_, i) => (
    <span className="client-reviews-star" key={i}>
      ★
    </span>
  ));

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1200 },
    items: 4.5,
  },
  desktop: {
    breakpoint: { max: 1200, min: 900 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 900, min: 600 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

const ClientReviews = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Divide data into two halves
  const middleIndex = Math.ceil(clientsReviewData.length / 2);
  const firstHalf = clientsReviewData.slice(0, middleIndex);
  const secondHalf = clientsReviewData.slice(middleIndex);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderCarousel = (data, key) => (
    <Carousel
      responsive={responsive}
      infinite={true}
      arrows={false}
      showDots={false}
      autoPlay={true}
      keyBoardControl={true}
      containerClass="client-reviews-carousel-container"
      itemClass="client-reviews-carousel-item"
      transitionDuration={600}
      key={key}
    >
      {data.map((review, idx) => (
        <div className="client-reviews-card" key={idx}>
          <div className="d-flex align-items-center mb-2">
            <img
              src={review.avatar}
              alt={review.name}
              className="client-reviews-avatar me-2"
            />
            <div>
              <div className="client-reviews-name">{review.name}</div>
              <div className="client-reviews-title">
                {review.title}, {review.company}
              </div>
              <div className="client-reviews-rating">
                5.0 {stars(review.rating)}
              </div>
            </div>
          </div>
          <div className="client-reviews-text">{review.text}</div>
        </div>
      ))}
    </Carousel>
  );

  return (
    <>
      <section className="client-reviews-section">
        <div className="client-reviews-overlay client-reviews-overlay-left"></div>
        <div className="client-reviews-overlay client-reviews-overlay-right"></div>
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center mb-4 container px-5">
            <h2 className="client-reviews-heading ps-5">Our Clients Reviews</h2>
            <button className="client-reviews-more-btn me-5">
              View more reviews
            </button>
          </div>

          <div className="client-reviews-carousel">
            {isMobile
              ? renderCarousel(clientsReviewData, 'mobile')
              : renderCarousel(firstHalf, 'first')}
          </div>
        </div>
      </section>

      {!isMobile && (
        <section className="client-reviews-section client-reviews-section-row2 pt-1">
          <div className="client-reviews-overlay client-reviews-overlay-left"></div>
          <div className="client-reviews-overlay client-reviews-overlay-right"></div>
          <div className="container-fluid">
            <div className="client-reviews-carousel">
              {renderCarousel(secondHalf, 'second')}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ClientReviews;
