import React from 'react';
import styles from './KeySponsorsGrid.module.css';

const sponsors = [
    [
        { label: 'Industry Leaders', img: '/assests/img/sp1.svg' },
        { label: 'Top Rankers', img: '/assests/img/sp2.svg' },
        { label: 'Pharma Player', img: '/assests/img/sp3.svg' },
        { label: 'Pharma Champion', img: '/assests/img/sp4.svg' },
      ],
      [
        { label: 'Supported Partners', img: '/assests/img/sp5.svg' },
        { label: 'Supported Partners', img: '/assests/img/sp6.svg' },
        { label: 'Supported Partners', img: '/assests/img/sp7.svg' },
        { label: 'Pharma Champion', img: '/assests/img/sp4.svg' },
      ]
];

const exhibitors = [
    [
        { label: 'Industry Leaders', img: '/assests/img/sp1.svg' },
        { label: 'Top Rankers', img: '/assests/img/sp2.svg' },
        { label: 'Pharma Player', img: '/assests/img/sp3.svg' },
        { label: 'Pharma Champion', img: '/assests/img/sp4.svg' },
        { label: 'Industry Leaders', img: '/assests/img/sp1.svg' },
        { label: 'Top Rankers', img: '/assests/img/sp2.svg' },
        { label: 'Pharma Player', img: '/assests/img/sp3.svg' },
        { label: 'Pharma Champion', img: '/assests/img/sp4.svg' },
        { label: 'Industry Leaders', img: '/assests/img/sp1.svg' },
        { label: 'Top Rankers', img: '/assests/img/sp2.svg' },
        { label: 'Pharma Player', img: '/assests/img/sp3.svg' },
        { label: 'Pharma Champion', img: '/assests/img/sp4.svg' },
        { label: 'Industry Leaders', img: '/assests/img/sp1.svg' },
        { label: 'Top Rankers', img: '/assests/img/sp2.svg' },
        { label: 'Pharma Player', img: '/assests/img/sp3.svg' },
        { label: 'Pharma Champion', img: '/assests/img/sp4.svg' },
        { label: 'Industry Leaders', img: '/assests/img/sp1.svg' },
        { label: 'Top Rankers', img: '/assests/img/sp2.svg' },
        { label: 'Pharma Player', img: '/assests/img/sp3.svg' },
        { label: 'Pharma Champion', img: '/assests/img/sp4.svg' },

      ]
      
];

const KeySponsorsGrid = () => {
  return (
   <>
    <div className={styles.sponsorsSection}>
      <h2 className={styles.heading}>Our Key Sponsors</h2>
      <div className="container innerContainer" style={{maxWidth:"900px"}}>
        {sponsors.map((row, rowIdx) => (
          <div className="row justify-content-center mb-3" key={rowIdx}>
            {row.map((s, idx) => (
              <div className="col-12 col-sm-6 col-md-3 d-flex align-items-stretch mb-3" key={idx}>
                <div className={styles.card}>
                  <div className={styles.label}>{s.label}</div>
                  <div className={styles.logoWrapper}>
                    <img src={s.img} alt={s.label} className={styles.logo} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
    <div className={styles.sponsorsSection}>
      <h2 className={styles.heading}>Our Exhibitors </h2>
      <div className="container innerContainer" style={{maxWidth:""}}>
        {exhibitors.map((row, rowIdx) => (
          <div className="row justify-content-center mb-3" key={rowIdx}>
            {row.map((s, idx) => (
              <div className="col-12 col-sm-6 col-md-2 d-flex align-items-stretch mb-3" key={idx}>
                <div className={styles.card}>
                  <div className={styles.label}>{s.label}</div>
                  <div className={styles.logoWrapper}>
                    <img src={s.img} alt={s.label} className={styles.logo} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
   </>
  );
};

export default KeySponsorsGrid; 