'use client'
import React, { useEffect, useState } from 'react';
import styles from './ourSpecialty.module.scss';
import { AnimatePresence, animate, motion, useMotionValue } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import useMeasure from 'react-use-measure';

const emergenceVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}

const firstList = ['Webdev', 'Optimization', 'Landing', 'SEO', 'Business', 'Logotype', 'Social', '3D Visualization', 'Animation'];
const secondList = ['NextJS', 'TypeScript', 'Website', 'E-commerce', 'Individual', 'Advertizing', 'Branding', 'Stylization'];

const OurSpecialty = () => {
    const [hasAnimated, setHasAnimated] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const isMobile = useMediaQuery({ query: '(max-width: 800px)' });

    useEffect(() => {
        setIsMounted(true);
    }, []);

    let [refFirst, { width: widthFirst }] = useMeasure();
    let [refSecond, { width: widthSecond }] = useMeasure();

    const xTranslationFirst = useMotionValue(0);
    const xTranslationSecond = useMotionValue(0);

    useEffect(() => {
        let controls;
        let finalPosition = -widthFirst / 2 - 1600;

        controls = animate(xTranslationFirst, [0, finalPosition], {
            ease: 'linear',
            duration: 37.5,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0
        })

        return controls.stop;
    }, [xTranslationFirst, widthFirst]);

    useEffect(() => {
        let controls;
        let startPosition = -widthSecond * 2.2;
        let finalPosition = widthSecond - widthSecond / 1.2;

        controls = animate(xTranslationSecond, [startPosition, finalPosition], {
            ease: 'linear',
            duration: 30,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0
        })

        return controls.stop;
    }, [xTranslationSecond, widthSecond]);

    const handleViewportEnter = () => {
        if (!hasAnimated) {
            setHasAnimated(true);
        }
    };

    if (!isMounted) {
        return null;
    }

    return (
        <>
            {!isMobile ? (
                <section className={styles.wrapper}>
                    <div className={styles.container}>
                        <h2 className={styles.abilities__up}>
                            <motion.span variants={emergenceVariant} initial="hidden" animate={hasAnimated ? "visible" : "hidden"} onViewportEnter={handleViewportEnter} transition={{delay: 0.5, duration: 1}} className={styles.big}>Webdev</motion.span>
                            <motion.span variants={emergenceVariant} initial="hidden" animate={hasAnimated ? "visible" : "hidden"} onViewportEnter={handleViewportEnter} transition={{delay: 1.5, duration: 1}} className={styles.hight}>Optimization</motion.span>
                            <motion.span variants={emergenceVariant} initial="hidden" animate={hasAnimated ? "visible" : "hidden"} onViewportEnter={handleViewportEnter} transition={{delay: 2, duration: 1}} className={styles.regular}>Landing</motion.span>
                            <motion.span variants={emergenceVariant} initial="hidden" animate={hasAnimated ? "visible" : "hidden"} onViewportEnter={handleViewportEnter} transition={{delay: 1, duration: 1}} className={styles.semibold}>SEO</motion.span>
                            <motion.span variants={emergenceVariant} initial="hidden" animate={hasAnimated ? "visible" : "hidden"} onViewportEnter={handleViewportEnter} transition={{delay: 1.5, duration: 1}} className={styles.hight}>Business</motion.span>
                            <motion.span variants={emergenceVariant} initial="hidden" animate={hasAnimated ? "visible" : "hidden"} onViewportEnter={handleViewportEnter} transition={{delay: 2, duration: 1}} className={styles.regular}>Logotype</motion.span>
                            <motion.span variants={emergenceVariant} initial="hidden" animate={hasAnimated ? "visible" : "hidden"} onViewportEnter={handleViewportEnter} transition={{delay: 1.5, duration: 1}} className={styles.hight}>Social</motion.span>
                            <motion.span variants={emergenceVariant} initial="hidden" animate={hasAnimated ? "visible" : "hidden"} onViewportEnter={handleViewportEnter} transition={{delay: 2, duration: 1}} className={styles.regular}>3D Visualization</motion.span>
                            <motion.span variants={emergenceVariant} initial="hidden" animate={hasAnimated ? "visible" : "hidden"} onViewportEnter={handleViewportEnter} transition={{delay: 2, duration: 1}} className={styles.regular}>Animation</motion.span>
                        </h2>
                        <h2 className={styles.abilities__down}>
                            <motion.span variants={emergenceVariant} initial="hidden" animate={hasAnimated ? "visible" : "hidden"} onViewportEnter={handleViewportEnter} transition={{delay: 2, duration: 1}} className={styles.regular}>NextJS</motion.span>
                            <motion.span variants={emergenceVariant} initial="hidden" animate={hasAnimated ? "visible" : "hidden"} onViewportEnter={handleViewportEnter} transition={{delay: 2, duration: 1}} className={styles.regular}>TypeScript</motion.span>
                            <motion.span variants={emergenceVariant} initial="hidden" animate={hasAnimated ? "visible" : "hidden"} onViewportEnter={handleViewportEnter} transition={{delay: 1, duration: 1}} className={styles.semibold}>Website</motion.span>
                            <motion.span variants={emergenceVariant} initial="hidden" animate={hasAnimated ? "visible" : "hidden"} onViewportEnter={handleViewportEnter} transition={{delay: 2, duration: 1}} className={styles.regular}>E-commerce</motion.span>
                            <motion.span variants={emergenceVariant} initial="hidden" animate={hasAnimated ? "visible" : "hidden"} onViewportEnter={handleViewportEnter} transition={{delay: 1.5, duration: 1}} className={styles.hight}>Individual</motion.span>
                            <motion.span variants={emergenceVariant} initial="hidden" animate={hasAnimated ? "visible" : "hidden"} onViewportEnter={handleViewportEnter} transition={{delay: 2, duration: 1}} className={styles.regular}>Advertizing</motion.span>
                            <motion.span variants={emergenceVariant} initial="hidden" animate={hasAnimated ? "visible" : "hidden"} onViewportEnter={handleViewportEnter} transition={{delay: 1, duration: 1}} className={styles.semibold}>Branding</motion.span>
                            <motion.span variants={emergenceVariant} initial="hidden" animate={hasAnimated ? "visible" : "hidden"} onViewportEnter={handleViewportEnter} transition={{delay: 0.5, duration: 1}} className={styles.big}>Stylization</motion.span>
                        </h2>
                    </div>
                </section>
            ): (
                <section className={styles.mobile__wrapper}>
                    <div className={styles.mobile__container}>
                        <AnimatePresence>
                            <motion.h2 
                                className={styles.line__up}
                                ref={refFirst}
                                style={{ x: xTranslationFirst }}
                            >
                                {[...firstList, ...firstList].map((item, index) => (
                                    <span className={styles.item} key={`${item}-${index}`}>{item}</span>
                                ))}
                            </motion.h2>
                            <motion.h2 
                                className={styles.line__down}
                                ref={refSecond}
                                style={{ x: xTranslationSecond }}
                            >
                                {[...secondList, ...secondList].map((item, index) => (
                                    <span className={styles.item} key={`${item}-${index}`}>{item}</span>
                                ))}
                            </motion.h2>
                        </AnimatePresence>
                    </div>
                </section>
            )}
        </>
    )
}

export default OurSpecialty;