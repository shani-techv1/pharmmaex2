import React from 'react'; 
import styles from './ticker.module.css';

const Ticker = () => {
  const text = "PharmmaEx Coming to Tamil Nadu | 20-21 February, 2026 | Codissia Trade Fair Complex Coimbatore, Tamil Nadu • ";

  return (
    <div className={styles.ticker}>
      <div className={styles.tickerInner}>
        <div className={styles.marquee}>
          <span>{text.repeat(5)}</span>
          <span>{text.repeat(5)}</span> {/* duplicate content for seamless scroll */}
         
        </div>
      </div>
    </div>
  );
};

export default Ticker;
