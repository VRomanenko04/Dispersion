'use client'
import React, { useState } from 'react';
import styles from './Slider.module.scss';
import Image from 'next/image';

import ImageSpaceDev1 from '@/assets/Image_SpaceDev_1.png';
import ImageSpaceDev2 from '@/assets/Image_SpaceDev_2.png';
import ImageSpaceDev3 from '@/assets/Image_SpaceDev_3.png';
import ImageSpaceDev4 from '@/assets/Image_SpaceDev_4.png';
import ImageEtalon1 from '@/assets/Image_Etalon_1.png';
import ImageEtalon2 from '@/assets/Image_Etalon_2.png';
import ImageEtalon3 from '@/assets/Image_Etalon_3.png';
import ImageEtalon4 from '@/assets/Image_Etalon_4.png';
import { motion } from 'framer-motion';

const slides = [
    {
        image1: ImageSpaceDev1,
        image2: ImageSpaceDev2,
        image3: ImageSpaceDev3,
        image4: ImageSpaceDev4,
        descrition: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis commodi sed nobis tempora error, sunt quibusdam libero, aliquid corporis, dolorum laborum nisi ipsa atque veritatis asperiores assumenda pariatur porro consequuntur inventore omnis praesentium voluptate sit consequatur. Quod placeat asperiores inventore?'
    },
    {
        image1: ImageEtalon1,
        image2: ImageEtalon2,
        image3: ImageEtalon3,
        image4: ImageEtalon4,
        descrition: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione reiciendis eos, aut quis ipsa dicta in nobis aspernatur doloribus architecto voluptas exercitationem facere amet! Neque vel aspernatur repudiandae sint fuga cupiditate, eius officia adipisci recusandae corporis saepe eaque dicta sit, pariatur voluptatem atque debitis. Totam tempore quo perspiciatis commodi quae.'
    },
    {
        image1: ImageSpaceDev1,
        image2: ImageSpaceDev2,
        image3: ImageSpaceDev3,
        image4: ImageSpaceDev4,
        descrition: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis commodi sed nobis tempora error, sunt quibusdam libero, aliquid corporis, dolorum laborum nisi ipsa atque veritatis asperiores assumenda pariatur porro consequuntur inventore omnis praesentium voluptate sit consequatur. Quod placeat asperiores inventore?'
    }
]

const Slider = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const handleNextSlide = () => {
        setActiveSlideIndex((prev) => {
            if (prev + 1 >= slides.length) {
                return prev; // Достигнут конец, остаемся на последнем слайде
            }
            return prev + 1;
        });
    }

    const handleBackSlide = () => {
        setActiveSlideIndex((prev) => {
            if (prev - 1 < 0) {
                return prev; // Достигнуто начало, остаемся на первом слайде
            }
            return prev - 1;
        });
    }

    return (
        <section className={styles.wrapper}>
            <div className={styles.slider__container}>
                <button className={styles.btn__left} onClick={handleBackSlide} type='button'>&lt;</button>
                {slides.map((slide, index) => (
                    <motion.div 
                        className={styles.slide} 
                        key={index}
                        initial={{ opacity: 0}}
                        animate={{ opacity: index === activeSlideIndex ? 1 : 0}}
                        transition={{ duration: 0}}
                    >
                        <Image src={slide.image1} alt={slide.descrition} className={styles.image__main}/>
                        <div className={styles.slide__subimages}>
                            <Image src={slide.image2} alt={slide.descrition} className={styles.image__sub}/>
                            <Image src={slide.image3} alt={slide.descrition} className={styles.image__sub}/>
                            <Image src={slide.image4} alt={slide.descrition} className={styles.image__sub}/>
                        </div>
                    </motion.div>
                ))}
                <button className={styles.btn__right} onClick={handleNextSlide} type='button'>&gt;</button>
            </div>
            <div className={styles.slide__bar}>
                {slides.map((_slide, index) => (
                    <motion.div 
                        key={index}
                        className={styles.bar}
                        initial={{ width: '20%' }}
                        animate={{ width: index === activeSlideIndex ? '80%' : '20%', border: index === activeSlideIndex ? '3px solid #5116FB' : '3px solid #C1C1C1'}}
                        transition={{ width: { duration: 0.3 }, border: { delay: 0.15} }}
                    ></motion.div>
                ))}
            </div>
            <div className={styles.description__container}>
                {slides.map((slide, index) => (
                    <motion.p
                        key={index}
                        initial={{ opacity: 0}}
                        animate={{ opacity: index === activeSlideIndex ? 1 : 0}}
                        transition={{ duration: 0}}
                    >
                        {slide.descrition}
                    </motion.p>
                ))}
            </div>
        </section>
    )
}

export default Slider;