import React from 'react'; 
import styles from './ticker.module.css';

const Ticker = () => {
  const text = "PharmmaEx Coming to Mumbai | 03–04 October, 2025 | Bombay Exhibition Centre, Mumbai • ";

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
