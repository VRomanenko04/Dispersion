'use client';
import React from 'react';
import styles from './MobileWorkExamples.module.scss';
import Xisk from '@/assets/xisk_example.png';
import Image from 'next/image';


const slides = [
    {
        source: Xisk,
        alt: 'Xisk'
    },
    {
        source: Xisk,
        alt: 'Xisk'
    },
    {
        source: Xisk,
        alt: 'Xisk'
    },
    {
        source: Xisk,
        alt: 'Xisk'
    },
    {
        source: Xisk,
        alt: 'Xisk'
    },
    {
        source: Xisk,
        alt: 'Xisk'
    },
    {
        source: Xisk,
        alt: 'Xisk'
    },
    {
        source: Xisk,
        alt: 'Xisk'
    },
    {
        source: Xisk,
        alt: 'Xisk'
    },
    {
        source: Xisk,
        alt: 'Xisk'
    },
];


const MobileWorkExamples = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                {slides.map((image, index) => (
                    <Image key={index} src={image.source} alt={image.alt} className={styles.slide}/>
                ))}
            </div>
            <div className={styles.scrollTrack}>
            </div>
        </section>
    )
}

export default MobileWorkExamples;