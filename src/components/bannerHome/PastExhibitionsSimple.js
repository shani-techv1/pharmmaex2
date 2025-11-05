import React from 'react';
import styles from './PastExhibitionsSimple.module.css';
import Image from 'next/image';
import pastExb1 from '../../../public/assests/img/pastex3.svg';
import pastExb2 from '../../../public/assests/img/pastex2.svg';
import pastExb3 from '../../../public/assests/img/pastex1.svg';
import pastExb4 from '../../../public/assests/img/pastex4.svg';
import pastExb5 from '../../../public/assests/img/mumbai_resize.png';

const exhibitions = [
  {
    edition: '1st Edition',
    city: 'Bangalore-2024',
    date: '02–03 February, 2024',
    venue: 'Manpho Convention Centre, Bangalore',
    img: pastExb1,
  },
  {
    edition: '2nd Edition',
    city: 'Pune-2024',
    date: '21–22 June, 2024',
    venue: 'Auto Cluster Exhibition Centre, Chinchwad–Pune',
    img: pastExb2,
  },
  {
    edition: '3nd Edition',
    city: 'Ahmedabad-2024',
    date: '14-15 December, 2024',
    venue: 'Vigyan Bhawan, Science City,Ahmedabad',
    img: pastExb3,
  },
  {
    edition: '4nd Edition',
    city: 'Hyderabad-2025',
    date: '02-03 May, 2025',
    venue: 'HITEX Exhibition Centre,Hyderabad',
    img: pastExb4,
  },
  {
    edition: '5th Edition',
    city: 'Mumbai-2025',
    date: '03-04 October, 2025',
    venue: 'Bombay exhibition centre, Mumbai',
    img: pastExb5,
  },

];

const PastExhibitionsSimple = () => {
  return (
    <>
      <section className={`${styles.pastExhibitions} pastExhibitionsArea`}>
        <div className='container innerContainer'>
          <div className='row'>
            <div className='col-12'>
              <h2 className={styles.heading}>Past Exhibitions</h2>
            </div>

          </div>
          {
            exhibitions.map((exhibition, index) => (
              <div className='row pastrow align-items-center py-2' key={index}>
                <div className='col-12 col-md-8'>
                  <Image src={exhibition.img} alt={`Past Exhibition ${index + 1}`} className={styles.exhibitionImage} />
                </div>
                <div className='col-12 col-md-4'>
                  <h3 className={styles.edition}>{exhibition.edition}</h3>
                  <p className={styles.city}>{exhibition.city}</p>
                  <p className={styles.date} >{exhibition.date}</p>
                  <p className={styles.venue} >{exhibition.venue}</p>
                </div>
              </div>
            ))
          }

        </div>
      </section>
    </>
  );
};

export default PastExhibitionsSimple; 