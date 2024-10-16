'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from './UiSubPageMobile.module.scss';
import Image, { StaticImageData } from 'next/image';
import { motion, useMotionValue } from 'framer-motion';
import SliderDots from '../SliderDots/SliderDots';
import { useMediaQuery } from 'react-responsive';

type UiSubPageMobileProps = {
    title: string
    text: string | React.ReactNode
    color: string
    link: string
    slides: StaticImageData[]
}

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 30;

const SPRING_OPTIONS = {
    type: "spring",
    mass: 3,
    stiffness: 400,
    damping: 50,
};


const UiSubPageMobile = ({ title, text, color, link, slides }: UiSubPageMobileProps) => {
    const [imgIndex, setImgIndex] = useState(0);

    const isSmallScreen = useMediaQuery({ query: '(max-width: 450px)'});
    const dragX = useMotionValue(0);

    useEffect(() => {
        const intervalRef = setInterval(() => {
            const x = dragX.get();
    
            if (x === 0) {
                setImgIndex((pv) => {
                    if (pv === slides.length - 1) {
                        return 0;
                    }
                    return pv + 1;
                });
            }
        }, AUTO_DELAY);
    
        return () => clearInterval(intervalRef);
    }, []);

    const onDragEnd = () => {
        const x = dragX.get();
    
        if (x <= -DRAG_BUFFER && imgIndex < slides.length - 1) {
            setImgIndex((pv) => pv + 1);
        } else if (x >= DRAG_BUFFER && imgIndex > 0) {
            setImgIndex((pv) => pv - 1);
        }

        dragX.set(0);
    };
    
    return (
        <div className={`${styles.mobile__container} ${color === "blue" ? styles.blue : color === "magenta" ? styles.magenta : ''}`}>
            <article className={styles.article__mobile}>
                <h3>{title}</h3>
                <p>{text}</p>
            </article>
            <section className={styles.slider__mobile}>
                <motion.div
                    drag="x"
                    dragConstraints={{
                        left: 0,
                        right: 0,
                    }}
                    style={{ x: dragX }}
                    animate={{
                        translateX: isSmallScreen ? `-${imgIndex * 378}px` : `-${imgIndex * 440}px`,
                    }}
                    transition={SPRING_OPTIONS}
                    onDragEnd={onDragEnd}
                    className={styles.slider__container}
                >
                    {slides.map((imgSrc, index) => (
                        <Image key={index} src={imgSrc} alt={`${imgIndex}`} className={styles.image}/>
                    ))}
                </motion.div>
            </section>
            <SliderDots imgIndex={imgIndex}/>
            <Link className={`${styles.link__mobile} ${color === 'blue' ? styles.link__blue : color === 'magenta' ? styles.link__magenta : ''}`} href={link}>
                Continue&gt;
            </Link>
        </div>
    )
}

export default UiSubPageMobile;