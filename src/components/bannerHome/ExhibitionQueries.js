import React from 'react';
import styles from './ExhibitionQueries.module.css';


const boxs = [
    {
        name : "Shivam Sharma",
        pos : "Managing Director-PharmmaEx",
        contact : "M. +91-9258002828, +91-701 733 6797",
        email : "E. shivam.sharma@pharmmaex.com",
        image : "/assests/img/exhPerson.png"
    },
     {
        name : "Vivek Agarwal",
        pos : "Operation Manager-PharmmaEx",
        contact : "M. +91-789 573 8919, +91-701 733 6797",
        email : "E. info@pharmmaex.com",
        image : "/assests/img/vivek.svg"
    }
]
const ExhibitionQueries = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Exhibition Queries</h2>
            <div className={styles.cardsWrapper}>
                {boxs.map((item, idx) => (
                    <div key={idx} className={styles.card}>
                        {/* Image Column */}
                        <div className={styles.imageColumn}>
                            <img
                                src={item.image}
                                alt="Shivam Sharma"
                                className={styles.image}
                            />
                        </div>
                        {/* Data Column */}
                        <div className={styles.dataColumn}>
                            <div className={styles.nameSection}>
                                <p>{ item.name }</p>
                                <p className={styles.roleSection}>{item.pos}</p>
                            </div>
                            <div className={styles.contactSection}>
                                <p>{item.contact}</p>
                                <p>{item.email}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExhibitionQueries;
