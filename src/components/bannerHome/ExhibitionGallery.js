import React from 'react';
import styles from './ExhibitionGallery.module.css';

const images = [
  '/assests/img/high18.png',
  '/assests/img/high17.png',
  '/assests/img/high16.png',
  '/assests/img/high15.png',
  '/assests/img/high19.png',
  '/assests/img/high13.png',
  '/assests/img/high12.png',
  '/assests/img/high11.png',
  '/assests/img/high10.png',
  '/assests/img/high9.png',
  '/assests/img/high8.png',
  '/assests/img/high7.png',
  '/assests/img/high6.png',
  '/assests/img/high5.png',
  '/assests/img/high4.png',
  '/assests/img/high3.png',
  '/assests/img/high2.png',
  '/assests/img/high1.png',
];

const ExhibitionGallery = () => {
  return (
    <div className={styles.gallerySection}>
      <div className='container innerContainer'>
      <div className={styles.galleryHeader}>
        <h2 className={styles.heading}>Highlight of Exhibitions</h2>
        <button className={styles.viewAllBtn} onClick={()=>window.open('https://www.pharmaex.in/gallery/hyderabad')} >View Full Gallery</button>
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