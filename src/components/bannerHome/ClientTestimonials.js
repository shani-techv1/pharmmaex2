import React from 'react';
import styles from './ClientTestimonials.module.css';
import { clientsReviewData } from '@/src/shared/clientReviewData';

const testimonials = [
  {
    name: 'Tarmeet Singh',
    title: 'Director, Wahoo Wellness',
    rating: 5,
    avatar: '/assests/img/Tarmeet.webp',
    text: 'We have been associating with PharmmaEx for the last many years, and every time they have come up with innovative ideas. They know what to deliver and that too on committed time.'
  },
  {
    name: 'Tarmeet Singh',
    title: 'Director, Wahoo Wellness',
    rating: 5,
    avatar: '/assests/img/image1.webp',
    text: 'We have been associating with PharmmaEx for the last many years, and every time they have come up with innovative ideas. They know what to deliver and that too on committed time.'
  },
  {
    name: 'Tarmeet Singh',
    title: 'Director, Wahoo Wellness',
    rating: 5,
    avatar: '/assests/img/image2.webp',
    text: 'We have been associating with PharmmaEx for the last many years, and every time they have come up with innovative ideas. They know what to deliver and that too on committed time.'
  },
  {
    name: 'Tarmeet Singh',
    title: 'Director, Wahoo Wellness',
    rating: 5,
    avatar: '/assests/img/Tarmeet.webp',
    text: 'We have been associating with PharmmaEx for the last many years, and every time they have come up with innovative ideas. They know what to deliver and that too on committed time.'
  },
  {
    name: 'Tarmeet Singh',
    title: 'Director, Wahoo Wellness',
    rating: 5,
    avatar: '/assests/img/image1.webp',
    text: 'We have been associating with PharmmaEx for the last many years, and every time they have come up with innovative ideas. They know what to deliver and that too on committed time.'
  },
  {
    name: 'Tarmeet Singh',
    title: 'Director, Wahoo Wellness',
    rating: 5,
    avatar: '/assests/img/image2.webp',
    text: 'We have been associating with PharmmaEx for the last many years, and every time they have come up with innovative ideas. They know what to deliver and that too on committed time.'
  },
];

const ClientTestimonials = () => {
  return (
    <div className={styles.testimonialsSection}>
      <h2 className={styles.heading}>What Our Clients Say</h2>
      <div className={styles.grid}>
        {clientsReviewData.map((t, idx) => (
          <div className={styles.card} key={idx}>
            <div className={styles.cardHeader}>
              <img src={t.avatar} alt={t.name} className={styles.avatar} />
              <div>
                <div className={styles.name}>{t.name}</div>
                <div className={styles.title}>{t.title + ", " + t.company}</div>
                <div className={styles.rating}>5.0 {' '}
                  <span className={styles.stars}>
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.text}>{t.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientTestimonials; 