'use client'
import React, { useState } from 'react';
import styles from './Slider.module.scss';
import Image, { StaticImageData } from 'next/image';

import ImageSpaceDev1 from '@/assets/SD1.webp';
import { motion } from 'framer-motion';
import ImageModal from '../ImageModal/ImageModal';
import { SlidesObj } from '../PortfolioSubPage/PortfolioSubPage';

type SliderProps = {
    slides: SlidesObj[];
};

const Slider = ({ slides }: SliderProps) => {
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
                        <Image src={slide.image1} alt={slide.description} 
                            placeholder="blur"
                            className={styles.image__main} 
                            onClick={() => handleImageClick(slide.image1, slide.description)}
                        />
                        <div className={styles.slide__subimages}>
                            <Image src={slide.image2} alt={slide.description} 
                                placeholder="blur"
                                className={styles.image__sub} 
                                onClick={() => handleImageClick(slide.image2, slide.description)}
                            />
                            <Image src={slide.image3} alt={slide.description} 
                                placeholder="blur"
                                className={styles.image__sub} 
                                onClick={() => handleImageClick(slide.image3, slide.description)}
                            />
                            <Image src={slide.image4} alt={slide.description} 
                                placeholder="blur"
                                className={styles.image__sub} 
                                onClick={() => handleImageClick(slide.image4, slide.description)}
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
                        {slide.description}
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