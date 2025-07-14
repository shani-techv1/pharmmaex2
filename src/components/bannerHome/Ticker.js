import React from 'react';
import styles from './ticker.module.css';


const Ticker = () => {
  return (
    <div className={styles.ticker}>
        <div className={styles.tickerInner}>
          <div className={styles.marquee}>
            <span>PharmmaEx Coming to Mumbai</span>
            <span className="mx-3">•</span>
            <span>PharmmaEx Coming to Mumbai</span>
            <span className="mx-3">•</span>
            <span>PharmmaEx Coming to Mumbai</span>
            <span className="mx-3">•</span>
            <span>PharmmaEx Coming to Mumbai</span>
          </div>
        </div>
      </div>
  );
};

export default Ticker; 