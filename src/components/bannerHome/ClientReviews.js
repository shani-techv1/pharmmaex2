import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { clientsReviewData } from '@/src/shared/clientReviewData';
const reviews = [
  {
    avatar: '/assests/img/Tarmeet.webp',
    name: 'Tarmeet Singh',
    title: 'Director, Wahoo Wellness',
    rating: 5,
    text: 'We have been associating with PharmmaEx for the last many years, and every time they have come up with innovative ideas. They know what to deliver and that too on committed time.'
  },
  {
    avatar: '/assests/img/Tarmeet.webp',
    name: 'Tarmeet Singh',
    title: 'Director, Wahoo Wellness',
    rating: 5,
    text: 'We have been associating with PharmmaEx for the last many years, and every time they have come up with innovative ideas. They know what to deliver and that too on committed time.'
  },
  {
    avatar: '/assests/img/Tarmeet.webp',
    name: 'Tarmeet Singh',
    title: 'Director, Wahoo Wellness',
    rating: 5,
    text: 'We have been associating with PharmmaEx for the last many years, and every time they have come up with innovative ideas. They know what to deliver and that too on committed time.'
  },
  {
    avatar: '/assests/img/Tarmeet.webp',
    name: 'Tarmeet Singh',
    title: 'Director, Wahoo Wellness',
    rating: 5,
    text: 'We have been associating with PharmmaEx for the last many years, and every time they have come up with innovative ideas. They know what to deliver and that too on committed time.'
  },
  {
    avatar: '/assests/img/Tarmeet.webp',
    name: 'Tarmeet Singh',
    title: 'Director, Wahoo Wellness',
    rating: 5,
    text: 'We have been associating with PharmmaEx for the last many years, and every time they have come up with innovative ideas. They know what to deliver and that too on committed time.'
  },
  {
    avatar: '/assests/img/Tarmeet.webp',
    name: 'Tarmeet Singh',
    title: 'Director, Wahoo Wellness',
    rating: 5,
    text: 'We have been associating with PharmmaEx for the last many years, and every time they have come up with innovative ideas. They know what to deliver and that too on committed time.'
  },
  {
    avatar: '/assests/img/Tarmeet.webp',
    name: 'Tarmeet Singh',
    title: 'Director, Wahoo Wellness',
    rating: 5,
    text: 'We have been associating with PharmmaEx for the last many years, and every time they have come up with innovative ideas. They know what to deliver and that too on committed time.'
  },
  {
    avatar: '/assests/img/Tarmeet.webp',
    name: 'Tarmeet Singh',
    title: 'Director, Wahoo Wellness',
    rating: 5,
    text: 'We have been associating with PharmmaEx for the last many years, and every time they have come up with innovative ideas. They know what to deliver and that too on committed time.'
  }
];

const stars = (count) => Array.from({ length: count }, (_, i) => (
  <span className="client-reviews-star" key={i}>★</span>
));

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1200 },
    items: 4.5
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

const ClientReviews = () => {
  return (
   <>
    <section className="client-reviews-section">
      <div className="client-reviews-overlay client-reviews-overlay-left"></div>
      <div className="client-reviews-overlay client-reviews-overlay-right"></div>
      <div className=" container-fluid">
        <div className="d-flex justify-content-between align-items-center mb-4 container px-5">
          <h2 className="client-reviews-heading ps-5">Our Clients Reviews</h2>
          <button className="client-reviews-more-btn me-5">View more reviews</button>
        </div>
        <div className="client-reviews-carousel">
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
          >
            {clientsReviewData.map((review, idx) => (
              <div className="client-reviews-card" key={idx}>
                <div className="d-flex align-items-center mb-2">
                  <img src={review.avatar} alt={review.name} className="client-reviews-avatar me-2" />
                  <div>
                    <div className="client-reviews-name">{review.name}</div>
                    <div className="client-reviews-title">{review.title + ", " + review.company}</div>
                    <div className="client-reviews-rating">5.0 {stars(review.rating)}</div>
                  </div>
                </div>
                <div className="client-reviews-text">{review.text}</div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
    <section className="client-reviews-section client-reviews-section-row2 pt-1">
      <div className="client-reviews-overlay client-reviews-overlay-left"></div>
      <div className="client-reviews-overlay client-reviews-overlay-right"></div>
      <div className="container-fluid">
         
        <div className="client-reviews-carousel">
          <Carousel
            responsive={responsive}
            infinite={true}
            arrows={false}
            showDots={false}
            autoPlay={true}
            keyBoardControl={true}
            containerClass="client-reviews-carousel-container"
            itemClass="client-reviews-carousel-item"
            transitionDuration={900}
          
          >
            {clientsReviewData.map((review, idx) => (
              <div className="client-reviews-card" key={idx}>
                <div className="d-flex align-items-center mb-2">
                  <img src={review.avatar} alt={review.name} className="client-reviews-avatar me-2" />
                  <div>
                    <div className="client-reviews-name">{review.name}</div>
                    <div className="client-reviews-title">{review.title + ", " + review.company}</div>
                    <div className="client-reviews-rating">5.0 {stars(review.rating)}</div>
                  </div>
                </div>
                <div className="client-reviews-text">{review.text}</div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
   </>
  );
};

export default ClientReviews; 