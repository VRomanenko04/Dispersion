'use client';
import React from 'react';
import styles from './MobileWorkExamples.module.scss';
import Image from 'next/image';
import ImageSpaceDev from '@/assets/topImage1.webp';
import ImageForum from '@/assets/topImage2.webp';
import ImageVFoolring from '@/assets/topImage3.webp';
import ImageXisk from '@/assets/topImage4.webp';
import ImageUCanPower from '@/assets/topImage5.webp';
import ImageUCanPower2 from '@/assets/topImage6.webp';
import ImageAnimation from '@/assets/topImage7.webp';
import ImageCrux from '@/assets/topImage8.webp';
import ImageFonts from '@/assets/topImage9.webp';
import ImageEtalon from '@/assets/topImage10.webp';


const slides = [
    {
        source: ImageForum,
        alt: 'Forum image'
    },
    {
        source: ImageCrux,
        alt: 'Crux image'
    },
    {
        source: ImageXisk,
        alt: 'Xisk image'
    },
    {
        source: ImageFonts,
        alt: 'Fonts image'
    },
    {
        source: ImageUCanPower,
        alt: 'UCanPower image'
    },
    {
        source: ImageEtalon,
        alt: 'Etalon image'
    },
    {
        source: ImageUCanPower2,
        alt: 'UCanPower2 image'
    },
    {
        source: ImageSpaceDev,
        alt: 'SpaceDev image'
    },
    {
        source: ImageAnimation,
        alt: 'Animation image'
    },
    {
        source: ImageVFoolring,
        alt: 'VFoolring image'
    },
];


const MobileWorkExamples = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                {slides.map((image, index) => (
                    <Image key={index} src={image.source} alt={image.alt} className={styles.slide} placeholder='blur'/>
                ))}
            </div>
            <div className={styles.scrollTrack}>
            </div>
        </section>
    )
}

export default MobileWorkExamples;