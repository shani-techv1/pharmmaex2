import { useState } from "react";
import styles from "./VideoSlider.module.css";

const videoLinks = [
    'https://www.youtube.com/embed/QzsLDlDjMzw',
    'https://www.youtube.com/embed/8RVapflKv6Y',
    'https://www.youtube.com/embed/m-Dsj98Zo6c',
    // Add more video links as needed
  ];
  
 function VideoSlider() {
  const [current, setCurrent] = useState(0);
  const total = videoLinks.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Press Realise</h2>
      <div className={styles.slider}>
        <button onClick={prev} className={`${styles.button} ${styles.left}`}>&lt;</button>
        <iframe
          width="840"
          height="360"
          src={videoLinks[current]}
          title={`Event Video ${current + 1}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={styles.video}
        ></iframe>
        <button onClick={next} className={`${styles.button} ${styles.right}`}>&gt;</button>
      </div>
      <div className={styles.counter}>{current + 1} / {total}</div>
    </div>
  );
}

  
  export default VideoSlider;
  