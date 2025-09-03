import React from 'react';
import styles from './WhoWeServe.module.css';
import serveImg from '../../../public/assests/img/serve.svg';
import Image from 'next/image';

const WhoWeServe = () => {
  return (
    <div className='container innerContainer'>
        <div className={styles.serveSection}>
      <div className={styles.serveImageWrapper}>
        <Image src={serveImg} alt="Who We Serve" className={styles.serveImage} />
      </div>
      <div className={styles.serveContent}>
        <h2 className={styles.serveTitle}>Who We Serve</h2>
        <p className={styles.serveDesc}>
          PharmmaEx serves as a dynamic platform for a diverse range of professionals in the pharmaceutical sector, including:
        </p>
        <ul className={styles.serveList}>
          <li>Pharmaceutical Manufacturers</li>
          <li>Suppliers, Distributors, Wholesalers, and Retailers</li>
          <li>Pharma Facilitating Management Companies</li>
          <li>PCD / Franchise Operators</li>
          <li>Medical Officers and Hospital Purchase Personnel</li>
          <li>CEOs, Decision Makers, and Product Managers</li>
          <li>Pharma Marketing and Ethical Companies</li>
        </ul>
        <p className={styles.serveNote}>
          Our events attract professionals from various specialties, such as Allopathic, Ayurvedic, Cosmetic, Herbal, Injectable, and Nutraceuticals, providing them with opportunities to network, learn, and showcase their innovations
        </p>
      </div>
    </div>
    </div>
  );
};

export default WhoWeServe; 