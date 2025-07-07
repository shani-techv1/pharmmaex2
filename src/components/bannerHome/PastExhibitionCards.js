import React from 'react';
import Image from 'next/image';

const exhibitions = [
  {
    edition: '1st Edition',
    editionClass: 'firstEdition',
    city: 'Bangalore',
    year: '2024',
    date: '02-03 February, 2024',
    venue: 'Manpho Convention Centre, Bangalore',
    image: '/assests/img/pastexb1.svg',
  },
  {
    edition: '2nd Edition',
    editionClass: 'secondEdition',
    city: 'Pune',
    year: '2024',
    date: '21-22 June, 2024',
    venue: 'Auto Cluster Exhibition Centre, Chinchwad-Pune',
    image: '/assests/img/pastexb1.svg',
  },
  {
    edition: '3rd Edition',
    editionClass: 'thirdEdition',
    city: 'Ahmedabad',
    year: '2024',
    date: '14-15 December, 2024',
    venue: 'Vigyan Bhawan, Science City, Ahmedabad',
    image: '/assests/img/pastexb1.svg',
  },
  {
    edition: '4th Edition',
    editionClass: 'fourthEdition',
    city: 'Hyderabad',
    year: '2024',
    date: '02-03 May, 2025',
    venue: 'HITEX Exhibition Centre, Hyderabad',
    image: '/assests/img/pastexb1.svg',
  },
];

const PastExhibitionCards = () => (
  <>
  
    <div className="pec-container">
      {exhibitions.map((ex, idx) => (
        <div className="pec-card" key={idx}>
          <span className={`pec-editionBadge ${ex.editionClass}`}>{ex.edition}</span>
          <div className="pec-imageWrapper">
            <Image src={ex.image} alt={ex.city} width={350} height={180} className="pec-image" />
          </div>
          <div className="pec-info">
            <h2 className="pec-city">{ex.city}-<span className="pec-year">{ex.year}</span></h2>
            <p className="pec-date">{ex.date}</p>
            <p className="pec-venue">{ex.venue}</p>
          </div>
        </div>
      ))}
    </div>
    <style jsx>{`
      .pec-container {
        display: flex;
        flex-direction: column;
        gap: 2.5rem;
        align-items: center;
        margin: 2rem 0;
      }
      @media (min-width: 900px) {
        .pec-container {
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
        }
      }
      .pec-card {
        background: #fff;
        border-radius: 18px;
        box-shadow: 0 4px 24px rgba(0,0,0,0.08);
        padding: 1.5rem 1.2rem 1.2rem 1.2rem;
        max-width: 400px;
        min-width: 320px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        transition: box-shadow 0.2s;
      }
      .pec-card:hover {
        box-shadow: 0 8px 32px rgba(0,0,0,0.15);
      }
      .pec-editionBadge {
        position: absolute;
        top: 18px;
        left: 18px;
        background: #22b573;
        color: #fff;
        font-size: 0.85rem;
        font-weight: 600;
        border-radius: 8px;
        padding: 0.25rem 0.8rem;
        z-index: 2;
      }
      .firstEdition { background: #22b573; }
      .secondEdition { background: #1e824c; }
      .thirdEdition { background: #0097e6; }
      .fourthEdition { background: #8e44ad; }
      .pec-imageWrapper {
        width: 100%;
        border-radius: 12px;
        overflow: hidden;
        margin-bottom: 1rem;
        margin-top: 1.5rem;
      }
      .pec-image {
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 12px;
      }
      .pec-info {
        padding: 0 0.2rem;
      }
      .pec-city {
        font-size: 1.35rem;
        font-weight: 700;
        color: #1a3c34;
        margin: 0 0 0.2rem 0;
      }
      .pec-year {
        color: #22b573;
        font-size: 1.1rem;
        font-weight: 600;
      }
      .pec-date {
        font-size: 1rem;
        color: #555;
        margin: 0 0 0.1rem 0;
      }
      .pec-venue {
        font-size: 0.98rem;
        color: #888;
        margin: 0;
      }
    `}</style>
  </>
);

export default PastExhibitionCards; 