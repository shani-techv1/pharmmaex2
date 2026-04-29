import React from 'react';
import styles from './MissionBox.module.css';

const MissionBox = () => {
  return (
    <div className={styles.missionBoxWrapper} id='our-mission'>
      <div className={styles.missionBox}>
        <h2 className={styles.missionTitle}>Our Mission</h2>
        <p className={styles.missionText}>
          At PharmmaEx, our mission is to improve global health by providing high-quality, innovative pharmaceutical products that meet the evolving needs of patients and healthcare professionals. We are dedicated to developing and delivering solutions that enhance the well-being of individuals worldwide.
        </p>
      </div>
    </div>
  );
};

export default MissionBox; 