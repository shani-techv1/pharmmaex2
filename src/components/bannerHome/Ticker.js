import React from 'react';
import styles from './ticker.module.css';

const Ticker = () => {
  const text = "PharmmaEx Coming to Ahmedabad | 8–9 January 2027 | Vigyan Bhawan, Science City, Ahmedabad, Gujarat • ";

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
