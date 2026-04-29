import React from 'react';
import styles from './PastExhibitions.module.css';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import pastExb1 from '../../../public/assests/img/pastex3.svg';
import pastExb2 from '../../../public/assests/img/pastex2.svg';
import pastExb3 from '../../../public/assests/img/pastex1.svg';
import pastExb4 from '../../../public/assests/img/pastex4.svg';
import pastExb5 from '../../../public/assests/img/image58.svg';
import pastExb6 from '../../../public/assests/img/entryplaza.jpg';

const exhibitions = [
  {
    date: '20-21 February, 2026',
    venue: 'Codissia Trade Fair Complex Coimbatore, Tamil Nadu',
    img: pastExb6,
  },
  {
    date: '03-04 October, 2025',
    venue: 'Bombay exhibition centre, Mumbai',
    img: pastExb5,
  },
  {
    date: '02-03 May, 2025',
    venue: 'HITEX Exhibition Centre, Hyderabad',
    img: pastExb4,
  },
  {
    date: '14-15 December, 2024',
    venue: 'Vigyan Bhawan, Science City, Ahmedabad',
    img: pastExb2,
  },
  {
    date: '21-22 June, 2024',
    venue: 'Auto Cluster, Chinchwad-Pune',
    img: pastExb3,
  },
  {
    date: '02-03 February, 2024',
    venue: 'Manpho Convention Centre, Bangalore',
    img: pastExb1,
  },
];

const timeline = [
  { num: '01', city: 'Bangalore', year: '2024' },
  { num: '02', city: 'Pune', year: '2024' },
  { num: '03', city: 'Ahmedabad', year: '2024' },
  { num: '04', city: 'Hyderabad', year: '2025' },
  { num: '05', city: 'Mumbai', year: '2025' },
  { num: '06', city: 'Coimbatore', year: '2026' },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1200 },
    items: 3,
    gutter: 30,
  },
  desktop: {
    breakpoint: { max: 1200, min: 900 },
    items: 2,
    gutter: 20,
  },
  tablet: {
    breakpoint: { max: 900, min: 600 },
    items: 1,
    gutter: 10,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    gutter: 5,
  },
};

const PastExhibitions = () => {
  return (
    <div className="container innerContainer">
      <div className={styles.pastExhibitions}>
        <div className='row align-items-center'>
          <div className='col-lg-5'>
            <h2 className={styles.heading}>Our Past Exhibitions</h2>
            <p className={styles.desc}>
              PharmmaEx organizes exhibitions and trade shows that highlight industry innovations, breakthroughs, and trends. These events foster collaboration, learning, and growth, offering a unique platform for professionals, businesses, and organizations to succeed in the pharmaceutical industry.
            </p>
          </div>
          <div className='col-lg-7'>
            <div className={styles.timelineWrapper}>
              <div className={styles.timeline}>
                {timeline.map((item, idx) => (
                  <React.Fragment key={item.num}>
                    <div className={styles.timelineCircle}>
                      <span className={styles.timelineNum}>{item.num}</span>
                      <span className={styles.timelineCity}>{item.city}</span>
                      <span className={styles.timelineYear}>{item.year}</span>
                    </div>
                    {idx !== timeline.length - 1 && <div className={styles.timelineLine}></div>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.carouselWrapper}>
          <Carousel
            responsive={responsive}
            infinite={true}
            arrows={false}
            showDots={false}
            keyBoardControl={true}
            containerClass={styles.carousel}
            itemClass={styles.card}
            dotListClass={styles.carouselDots}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
          >
            {exhibitions.map((ex, idx) => (
              <div className={styles.card} key={idx}>
                <div className={styles.cardImgWrapper}>
                  <Image src={ex.img} alt={ex.venue} className={styles.cardImg} fill style={{ objectFit: 'cover' }} />
                  <div className={styles.cardOverlay}></div>
                  <div className={styles.cardText}>
                    <div className={styles.cardTitle}>{ex.date}<br />{ex.venue}</div>
                    <button className={styles.galleryBtn}>
                      <span className={styles.galleryIcon}

                        onClick={() => window.open('/gallery/hyderabad', '_blank')}

                      >
                        <img src="/assests/img/gaIIcon.svg" />
                      </span> View Gallery
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default PastExhibitions; 