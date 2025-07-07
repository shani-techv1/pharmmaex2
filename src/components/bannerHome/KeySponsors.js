import React from 'react';

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
  ]
];

const KeySponsors = () => {
  return (
    <section className="key-sponsors-section">
      <div className="container key-sponsors-container">
        <h2 className="key-sponsors-heading text-center">Our Key Sponsors</h2>
        <div className="key-sponsors-rows">
          {sponsors.map((row, rowIdx) => (
            <div className="key-sponsors-row d-flex justify-content-center mb-3" key={rowIdx}>
              {row.map((item, idx) => (
                <div className="key-sponsors-card d-flex flex-column align-items-center justify-content-center" key={idx}>
                  <div className="key-sponsors-label">{item.label}</div>
                  <img src={item.img} alt={item.label} className="key-sponsors-img" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeySponsors; 