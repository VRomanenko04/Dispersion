'use client'
import React, { useState } from 'react';
import styles from './Slider.module.scss';
import Image, { StaticImageData } from 'next/image';

import ImageSpaceDev1 from '@/assets/SD1.webp';
import ImageSpaceDev2 from '@/assets/SD2.webp';
import ImageSpaceDev3 from '@/assets/SD3.webp';
import ImageSpaceDev4 from '@/assets/SD4.webp';
import ImageEtalon1 from '@/assets/ETAL1.webp';
import ImageEtalon2 from '@/assets/ETAL2.webp';
import ImageEtalon3 from '@/assets/ETAL3.webp';
import ImageEtalon4 from '@/assets/ETATL4.webp';
import ImageUCanPower1 from '@/assets/UCP1.webp';
import ImageUCanPower2 from '@/assets/UCP2.webp';
import ImageUCanPower3 from '@/assets/UCP3.webp';
import ImageUCanPower4 from '@/assets/UCP4.webp';
import { motion } from 'framer-motion';
import ImageModal from '../ImageModal/ImageModal';

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
        image1: ImageUCanPower1,
        image2: ImageUCanPower2,
        image3: ImageUCanPower3,
        image4: ImageUCanPower4,
        descrition: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis commodi sed nobis tempora error, sunt quibusdam libero, aliquid corporis, dolorum laborum nisi ipsa atque veritatis asperiores assumenda pariatur porro consequuntur inventore omnis praesentium voluptate sit consequatur. Quod placeat asperiores inventore?'
    }
]

const Slider = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<StaticImageData>(ImageSpaceDev1);
    const [selectedImageDescription, setSelectedImageDescription] = useState('');

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

    const handleImageClick = (image: StaticImageData, description: string) => {
        setSelectedImage(image);
        setSelectedImageDescription(description);
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedImageDescription('');
    }

    return (
        <section className={styles.wrapper}>
            <div className={styles.slider__container}>
                <button className={`${styles.btn__left} ${activeSlideIndex === 0 ? styles.btn_disable : ''}`} onClick={handleBackSlide} type='button'>&lt;</button>
                {slides.map((slide, index) => (
                    <motion.div 
                        className={styles.slide} 
                        key={index}
                        initial={{ opacity: 0}}
                        animate={{ opacity: index === activeSlideIndex ? 1 : 0}}
                        transition={{ duration: 0}}
                        style={{ display: index === activeSlideIndex ? 'flex' : 'none' }}
                    >
                        <Image src={slide.image1} alt={slide.descrition} 
                            className={styles.image__main} 
                            onClick={() => handleImageClick(slide.image1, slide.descrition)}
                        />
                        <div className={styles.slide__subimages}>
                            <Image src={slide.image2} alt={slide.descrition} 
                                className={styles.image__sub} 
                                onClick={() => handleImageClick(slide.image2, slide.descrition)}
                            />
                            <Image src={slide.image3} alt={slide.descrition} 
                                className={styles.image__sub} 
                                onClick={() => handleImageClick(slide.image3, slide.descrition)}
                            />
                            <Image src={slide.image4} alt={slide.descrition} 
                                className={styles.image__sub} 
                                onClick={() => handleImageClick(slide.image4, slide.descrition)}
                            />
                        </div>
                    </motion.div>
                ))}
                <button className={`${styles.btn__right} ${activeSlideIndex === 2 ? styles.btn_disable : ''}`} onClick={handleNextSlide} type='button'>&gt;</button>
            </div>
            <div className={styles.slide__bar}>
                {slides.map((_slide, index) => (
                    <motion.div 
                        key={index}
                        className={styles.bar}
                        initial={{ width: '20%' }}
                        animate={{ width: index === activeSlideIndex ? '80%' : '20%', border: index === activeSlideIndex ? '3px solid #5116FB' : '3px solid #C1C1C1'}}
                        transition={{ width: { duration: 0.3 }, border: { delay: 0.15} }}
                        onClick={() => setActiveSlideIndex(index)}
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
            <ImageModal 
                image={selectedImage} 
                imageDescription={selectedImageDescription} 
                onClose={handleCloseModal}
                isOpen={isModalOpen}
            />
        </section>
    )
}

export default Slider;