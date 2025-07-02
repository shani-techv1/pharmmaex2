import React from 'react';
import styles from './ExhibitionGallery.module.css';

const images = [
  '/assests/img/image1.webp',
  '/assests/img/image2.webp',
  '/assests/img/image3.webp',
  '/assests/img/image5.webp',
  '/assests/img/p1.webp',
  '/assests/img/hyderabad.webp',
  '/assests/img/about2.webp',
  '/assests/img/about2 (1).webp',
  '/assests/img/Tarmeet.webp',
  '/assests/img/bg-registration.webp',
  '/assests/img/image58.svg',

];

const ExhibitionGallery = () => {
  return (
    <div className={styles.gallerySection}>
      <div className='container innerContainer'>
      <div className={styles.galleryHeader}>
        <h2 className={styles.heading}>Highlight of Exhibitions</h2>
        <button className={styles.viewAllBtn}>View Full Gallery</button>
      </div>
      </div>
      <div className={styles.galleryGrid}>
        {images.map((img, idx) => (
          <div className={styles.galleryItem} key={idx}>
            <img src={img} alt={`Exhibition ${idx+1}`} className={styles.galleryImg} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExhibitionGallery; 