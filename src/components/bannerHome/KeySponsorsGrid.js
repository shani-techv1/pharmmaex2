import React from 'react';
import styles from './KeySponsorsGrid.module.css';
import KeySponsors from './KeySponsors';
import OurExhibitors from './OurExhibitors';

const sponsors = [
    [
    { label: 'Industry Leaders', img: '/assests/img/Sponsor Logo/Sponsor Logo/Industry-Leader.png' },
    { label: 'Top Rankers', img: '/assests/img/Sponsor Logo/Sponsor Logo/Top-Ranker.png' },
    { label: 'Pharma Player', img: '/assests/img/Sponsor Logo/Sponsor Logo/Pharma-Player.png' },
    { label: 'Pharma Champion', img: '/assests/img/Sponsor Logo/Sponsor Logo/Pharma-Champion.png' },
    { label: 'Supported Partners', img: '/assests/img/Sponsor Logo/Sponsor Logo/Supported-Partner.png' },
  ],
  [
    { label: 'Endorsed By', img: '/assests/img/Sponsor Logo/Sponsor Logo/Endorsed By.png' },
    { label: 'Affilated Partner', img: '/assests/img/Sponsor Logo/Sponsor Logo/Affilate-Partner.jpg' },
   { label: 'Association-01', img: '/assests/img/Sponsor Logo/Sponsor Logo/Association-01.jpg' },
     { label: 'Association-02', img: '/assests/img/Sponsor Logo/Sponsor Logo/Association-02.jpg' },
      { label: 'Association-03', img: '/assests/img/Sponsor Logo/Sponsor Logo/Association-03.jpg' },
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
   <KeySponsors/>
   <OurExhibitors/>
   </>
  );
};

export default KeySponsorsGrid; 